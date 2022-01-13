import React from 'react';

import Message from '.';

export default {
  title: 'Message component',
};

export const message = () => (
  <Message
    text="some text"
    type="fatal"
    timeout={3000}
  />
);
