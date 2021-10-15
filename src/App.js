import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { Button, Container, Navbar, ButtonGroup} from 'reactstrap';
import * as yup from 'yup';
import schema from './validation/formSchema';
//my components
import Home from './components/home';
import Order from './components/order_form';
import Confirm from './components/confirmation';
import axios from "axios";


const barePizza = {
  Mozzarella: false,
  Pepperoni: false,
  Garlic: false,
  Bacon: false,
  Oregano: false,
  Basil: false,
  Onion: false,
  Sausage: false,
  Tomato: false,
  Mushroom: false,
  Olive_oil: false,
  Red_onion: false,
  gluten: false,
  sauce: '',
  size: '',
  special: ''
}
const isDisabled = true;
const App = () => {
  const [pizza, setPizza] = useState();
  const [formValues, setFormValues] = useState(barePizza) // object
  const [formErrors, setFormErrors] = useState() // object
  const [disabled, setDisabled] = useState(isDisabled)       // boolean



  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza)
      .then(res => {
        setPizza(res)
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  }
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }
    
  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }
  const formSubmit = () => {
    const newPizza = {
      Mozzarella: formValues.checked,
      Pepperoni: formValues.checked,
      Garlic: formValues.checked,
      Bacon: formValues.checked,
      Oregano: formValues.checked,
      Basil: formValues.checked,
      Onion: formValues.checked,
      Sausage: formValues.checked,
      Tomato: formValues.checked,
      Mushroom: formValues.checked,
      Olive_oil: formValues.checked,
      Red_onion: formValues.checked,
      gluten: formValues.checked,
      sauce: formValues.value,
      size: formValues.value,
      special: formValues.value
  
    }
    postNewPizza(newPizza);
  }
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <Container>
      <Navbar>
        <h1>Lambda Eats</h1>
        <ButtonGroup>
          <Button color='danger' size='md' href='/'>Home</Button>
          <Button color='danger' size='md' href='/help'>Help</Button>
        </ButtonGroup>
      </Navbar>
    <Switch>
        <Route path={'/help'}>
          {/* {window.open('https://www.dominos.com/')} */}
        </Route>
      <Route path={'/order'}>
          <Order
            values={formValues}
            change={inputChange}
            disabled={disabled}
            submit={formSubmit}
          />
      </Route>
      <Route path={'/'}>
        <Home />
      </Route>
    </Switch>
    </Container>
  );
};
export default App;
