import React from 'react';
import {render} from '@testing-library/react';
import ContactForm from './ContactForm';

test('firstName, lastName, email, message inputs are rendered',() =>{
    const { getByLabelText } = render(<ContactForm />);
    getByLabelText(/firstName/i);
    getByLabelText(/lastName/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
});


// test('displays error message when missing required param'() =>
// )

test('firstName, lastName, email is rendered',()=>{
    const{ getByPlaceholderText} = render(<ContactForm />)
    getByPlaceholderText(/bill/i)
    getByPlaceholderText(/luo/i)
    getByPlaceholderText(/bluebill1049@hotmail.com/i)
})



    // it('renders without crashing', () => {
    //   const {getByLabelText} = render(<ContactForm />);
    //   const label
    // });
