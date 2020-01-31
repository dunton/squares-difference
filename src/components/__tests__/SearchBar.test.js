import React from 'react';
import SearchBar from 'components/SearchBar';
import { mount } from 'enzyme';

let wrapped;
beforeEach(()=> {
  // onFormSubmit comes down from App and does not clear form
  wrapped = mount(<SearchBar onFormSubmit={()=>{console.log('submitted')}} />);
})

afterEach(()=> {
  wrapped.unmount();
})

it('has an input field', () => {
  expect(wrapped.find('input').length).toEqual(1); // check form
  expect(wrapped.find('form').length).toEqual(1); // check input
});

describe('the input area', () => {
  beforeEach(() => {
    wrapped.find('input').simulate('change', { // HMTL event
      target: { value: 'new input' } // this get copied to merge into event object
    });
    wrapped.update(); // make it rerender immediately
  })

  it('has an input area that users can type in', () => {
    expect(wrapped.find('input').prop('value')).toEqual('new input');
  });

  it('input field is emptied on submit', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    wrapped.find('form').simulate('submit', fakeEvent); // simulate submit
    expect(wrapped.find('input').prop('value')).toEqual('');// check if empty
  })
})
