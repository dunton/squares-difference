import React from 'react';
import { shallow } from 'enzyme'; // just the component and no children
import App from 'components/App';
import SearchBar from 'components/SearchBar';
import DataDisplay from 'components/DataDisplay';

let wrapped; // initialize to allow tests to access
beforeEach(() => {
  wrapped = shallow(<App />);
})

it('shows a seach bar', () => {

  // test to see if SearchBar renders
  expect(wrapped.find(SearchBar).length).toEqual(1);
})

it('shows the data display', () => {

  // test to see if DataDisplay renders
  expect(wrapped.find(DataDisplay).length).toEqual(1);
})
