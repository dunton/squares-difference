import React from 'react';
import DataDisplay from 'components/DataDisplay';
import { mount } from 'enzyme';

let wrapped;
beforeEach(()=> {
  let data = [{number: 3, value: 3, datetime: 3, occurrences: 3, last_datetime: 3}]
  wrapped = mount(<DataDisplay data={data}/>);
})

afterEach(()=> {
  wrapped.unmount();
})

it('renders data', () => {
  expect(wrapped.find('h4').length).toBe(1); // renders 1 h4
  expect(wrapped.find('p').length).toBe(4); // 4 paragraphs with data
})
