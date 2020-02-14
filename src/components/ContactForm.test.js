import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

test('firstName, lastName, email, message inputs are rendered',() =>{
    const { getByLabelText } = render(<ContactForm />);
    getByLabelText(/firstName/i);
    getByLabelText(/lastName/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
});

test ('form submit adds new user to the list', ()=>{
const{ getByLabelText } = render(<ContactForm />);
const firstNameInput = getByLabelText(/firstName/i);
const lastNameInput = getByLabelText(/lastName/i);
const emailInput = getByLabelText(/email/i);
const messageInput = getByLabelText(/message/i);

fireEvent.change(firstNameInput, {target:{value: 'test firstName'}})

fireEvent.change(lastNameInput, {target:{value: 'test lastName'}})

fireEvent.change(emailInput, {target:{value: 'test email'}})

fireEvent.change(messageInput, {target:{value: 'test message'}})
})


















// test('displays error message when missing required param'() =>
// )

// test('firstName, lastName, email is rendered',()=>{
//     const{ getByPlaceholderText} = render(<ContactForm />)
//     getByPlaceholderText(/bill/i)
//     getByPlaceholderText(/luo/i)
//     getByPlaceholderText(/bluebill1049@hotmail.com/i)
// })



    // it('renders without crashing', () => {
    //   const {getByLabelText} = render(<ContactForm />);
    //   const label
    // });
