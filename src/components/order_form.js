import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

export default function Order(props) {
    const { values, change, submit, disabled } = props;
    console.log(values)

    const onSubmit = evt => {
      evt.preventDefault()
      submit()
    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value; // convert browser res of "on" to true or false so it toggles
        change(name, valueToUse)
      }
    
  
    return (
        <Container>
            <Form >
                <h1>Build Your Own Pizza</h1>
                <FormGroup>
                    <div className='background'>
                        <label for='size'>Choice of Size:  </label>
                    </div>
                    <select
                        onChange={onChange}
                        name='size'
                        value={values.size}
                    >
                        <option value='small'>Small</option>
                        <option value='medium'>medium</option>
                        <option value='large'>Large</option>
                    </select>
                </FormGroup>
                <FormGroup>
                    <div className='background'>
                        <label for='sauce'>Choice of Sauce</label>
                    </div>
                    <label>Original Sauce 
                    </label>
                        <input 
                            type="radio"
                            name="sauce"
                            value="orignal"
                            onChange={onChange}
                            checked={values.civil === "original"}

                    />
                    <br/>
                    <label>Garlic Ranch 
                        <input 
                            type="radio"
                            name="sauce"
                            value="garlic ranch"
                            onChange={onChange}
                            checked={values.civil === 'garlic ranch'}
                        />
                    </label>
                    <br/>
                    <label>BBQ 
                        <input 
                            type="radio"
                            name="sauce"
                            value="bbq"
                            onChange={onChange}
                            checked={values.civil === 'bbq'}
                        />
                    </label>
                    <br/>
                    <label>Spinach Alfredo 
                        <input 
                            type="radio"
                            name="sauce"
                            value="Spinach Alfredo"
                            onChange={onChange}
                            checked={values.civil === 'Spinach Alfredo'}
                        />
                    </label>
                    
                    
                </FormGroup>

                <Button disabled={disabled} onSubmit={onSubmit}>Add to Order</Button>
            </Form>
        </Container>
    )
  }
  