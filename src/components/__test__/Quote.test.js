import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import  Quote  from '../Quote';

it("test increment button", () => {
    const {queryByTestId, queryByPlaceHolderName} = render(<Quote/>)
    fireEvent.Event.onclick(<button></button>)
    expect(queryByTestId('increment-button')).toBeTruthy();
})

it("test decrement button", () => {
    const {queryByTestId, queryByPlaceHolderName} = render(<Quote/>)
    fireEvent.Event.onclick(<button></button>)
    expect(queryByTestId('deccrement-button')).toBeTruthy();
})





