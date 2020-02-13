import React from 'react';
import ContactForm from './ContactForm';
import {render} from '@testing-library/react'

test ('firstName, lastName, email, message inputs are rendered',() =>{
    const { getByLabelText } = render(<ContactForm />);
    getByLabelText(/firstName/i);
    getByLabelText(/lastName/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
});


// test('form submit adds a ')

