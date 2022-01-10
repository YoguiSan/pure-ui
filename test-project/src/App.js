import React, { useState } from 'react';
import { Message, ErrorWrapper } from 'pure-ui';
import { getRandomArrayElement } from 'formatadores';

const types = [
  'warning',
  'error',
  'success',
];

const texts = [
  'This is a test',
  'I will randomly display a message every so often, so stay sharp',
  'Yet another test message',
];

const timeouts = [
  5000,
  3000,
  1000,
];

function App() {
  const [text, setText] = useState();
  const [type, setType] = useState();
  const [timeout, setMessageTimeout] = useState();

  const interval = setInterval(() => {
    setText(getRandomArrayElement(texts));
    setType(getRandomArrayElement(types));
    setMessageTimeout(getRandomArrayElement(timeouts));
  }, 6000);

  return (
    <ErrorWrapper>
      <h1>Running...</h1>
      <Message
        type={type}
        text={text}
        timeout={timeout}
      />
    </ErrorWrapper>
  );
}

export default App;
