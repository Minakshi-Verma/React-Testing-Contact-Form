import React from 'react';
import {render} from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm',() =>{
    test('renders without crashing',()=>{
        render(<ContactForm />)
    });

    test('it renders First',() =>{
        const display = render(<ContactForm />)
        display.getByText(/First/)
        
    })

    test('it renders Last',() =>{
        const display = render(<ContactForm />)
        display.getByText(/Last/)
    })

    test('it renders First',() =>{
        const { getByTestId } = render(<ContactForm/>)
        const button = getByTestId('submitButtonTest')

        expect(button).toBeInTheDocument()
        

        // const display = render(<ContactForm />)
        // display.getByTextId('submitButtonTest')
    })
})
