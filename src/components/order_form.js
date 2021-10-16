import React from "react";
import { Button, Form, FormGroup, Input, Container } from 'reactstrap';

export default function Order(props) {
    const { values, change, submit, disabled } = props;
    
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
            <Form onSubmit={onSubmit}>
                <h1>Build Your Own Pizza</h1>
                <FormGroup>
                    <div className='background'>
                        <p>Choice of Size</p>
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
                        <p>Choice of Sauce</p>
                    </div>
                    <div className="form-check">
                    <label className="form-check-label">Original Sauce 
                    </label>
                    <input
                            className="form-check-input"
                            type="radio"
                            name="sauce"
                            value="orignal"
                            onChange={onChange}
                            checked={values.sauce === "original"}
                    />
                    </div>
                    <div className='form-check'>
                    <label className="form-check-label">Garlic Ranch 
                            <input
                            className="form-check-input"
                            type="radio"
                            name="sauce"
                            value="garlic ranch"
                            onChange={onChange}
                            checked={values.sauce === 'garlic ranch'}
                        />
                    </label>
                    </div>
                    <div className='form-check'>
                    <label className="form-check-label">BBQ 
                        <input
                            className="form-check-input"
                            type="radio"
                            name="sauce"
                            value="bbq"
                            onChange={onChange}
                            checked={values.sauce === 'bbq'}
                        />
                    </label>
                    </div>
                    <div className='form-check'>
                    <label className="form-check-label">Spinach Alfredo 
                        <input
                            className="form-check-input"
                            type="radio"
                            name="sauce"
                            value="Spinach Alfredo"
                            onChange={onChange}
                            checked={values.sauce === 'Spinach Alfredo'}
                        />
                    </label>
                    </div>
                </FormGroup>
                <FormGroup>
                    <div className='background'>
                        <p>Add Toppings</p>
                    </div>
                    <div className='checkboxes'>
                        <div className='left'>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor='Mozzarella'>Mozzarella<input
                            className="form-check-input"
                            type='checkbox'
                            name='Mozzarella'
                            id='Mozzarella'
                            onChange={onChange}
                            checked={values.Mozzarella}
                            />
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor='Pepperoni'>Pepperoni<input
                            className="form-check-input"
                            type='checkbox'
                            name='Pepperoni'
                            id='Pepperoni'
                            onChange={onChange}
                            checked={values.Pepperoni}
                            />
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor='Garlic'>Garlic<input
                            className="form-check-input"
                            type='checkbox'
                            name='Garlic'
                            id='Garlic'
                            onChange={onChange}
                            checked={values.Garlic}
                            />
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor='Bacon'>Bacon<input
                            className="form-check-input"
                            type='checkbox'
                            name='Bacon'
                            id='Bacon'
                            onChange={onChange}
                            checked={values.Bacon}
                            />
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor='Oregano'>Oregano<input
                            className="form-check-input"
                            type='checkbox'
                            name='Oregano'
                            id='Oregano'
                            onChange={onChange}
                            checked={values.Oregano}
                            />
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor='Basil'>Basil<input
                            className="form-check-input"
                            type='checkbox'
                            name='Basil'
                            id='Basil'
                            onChange={onChange}
                            checked={values.Basil}
                            />
                        </label>
                    </div>
                        </div>
                        <div className='right'>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor='Onion'>Onion<input
                            className="form-check-input"
                            type='checkbox'
                            name='Onion'
                            id='Onion'
                            onChange={onChange}
                            checked={values.Onion}
                            />
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor='Sausage'>Sausage<input
                            className="form-check-input"
                            type='checkbox'
                            name='Sausage'
                            id='Sausage'
                            onChange={onChange}
                            checked={values.Sausage}
                            />
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor='Tomato'>Tomato<input
                            className="form-check-input"
                            type='checkbox'
                            name='Tomato'
                            id='Tomato'
                            onChange={onChange}
                            checked={values.Tomato}
                            />
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor='Mushroom'>Mushroom<input
                            className="form-check-input"
                            type='checkbox'
                            name='Mushroom'
                            id='Mushroom'
                            onChange={onChange}
                            checked={values.Mushroom}
                            />
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor='Olive_oil'>Olive_oil<input
                            className="form-check-input"
                            type='checkbox'
                            name='Olive_oil'
                            id='Olive_oil'
                            onChange={onChange}
                            checked={values.Olive_oil}
                            />
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor='Red_onion'>Red_onion<input
                            className="form-check-input"
                            type='checkbox'
                            name='Red_onion'
                            id='Red_onion'
                            onChange={onChange}
                            checked={values.Red_onion}
                            />
                        </label>
                    </div>
                    </div>
                    </div>
                </FormGroup>
                <FormGroup>
                    <div className='background'>
                    <p>Special Instructions</p>    
                    </div>
                    <Input type='textarea'
                        name='special'
                        value={values.special}
                        onChange={onChange}
                        placeholder='Enter special instructions here!'
                    />

                <Button disabled={disabled}>Add to Order</Button>
                </FormGroup>
            </Form>
    )
  }
  