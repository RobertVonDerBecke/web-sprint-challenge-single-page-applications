import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { Button, Container, Navbar, ButtonGroup} from 'reactstrap';
import * as yup from 'yup';
import schema from './validation/formSchema';
//my components
import Home from './components/home';
import Order from './components/Pizza_form';
// import Confirm from './components/confirmation';
import axios from "axios";


const barePizza = {
  name: '',
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
const intialErr = {
  name: ''
}
const isDisabled = true;
const App = () => {
  const [pizza, setPizza] = useState();
  const [formValues, setFormValues] = useState(barePizza) // object
  const [formErrors, setFormErrors] = useState(intialErr) // object
  const [disabled, setDisabled] = useState(isDisabled)       // boolean



  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza)
      .then(res => {
        // setPizza(res)
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      }).finally(() => {
        setFormValues(barePizza)
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
    setFormValues({ ...formValues, [name]: value })
  }
  const formSubmit = () => {
    const newPizza = {
      name: formValues.name,
      Mozzarella: formValues.Mozzarella,
      Pepperoni: formValues.Pepperoni,
      Garlic: formValues.Garlic,
      Bacon: formValues.Bacon,
      Oregano: formValues.Oregano,
      Basil: formValues.Basil,
      Onion: formValues.Onion,
      Sausage: formValues.Sausage,
      Tomato: formValues.Tomato,
      Mushroom: formValues.Mushroom,
      Olive_oil: formValues.Olive_oil,
      Red_onion: formValues.Red_onion,
      gluten: formValues.gluten,
      sauce: formValues.sauce,
      size: formValues.size,
      special: formValues.special
  
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
            errors={formErrors}
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
