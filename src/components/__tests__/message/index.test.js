import React from 'react';
import { shallow } from 'enzyme';
import Message from '../../message';

const Component = shallow(
  <Message
    text="text"
    type="warning"
    timeout={3000}
  />,
);

describe('', () => {
  test('rendered successfully', () => {
    expect(Component).toBeDefined();
  });
});
