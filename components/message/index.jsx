import React, { useEffect, useState } from 'react';
import { string, number, arrayOf } from 'prop-types';
import Container from './Container';

function Message({
  text,
  type,
  timeout,
  classes,
}) {
  const { show, setShow } = useState(false);

  const date = new Date();

  useEffect(() => {
    if (text && type) {
      setShow(true);
      setTimeout(() => setShow(false), timeout);
    }
  }, [text, type]);

  return (
    <Container
      id={`message-${date}`}
      key={`message-${date}`}
      className={`${type}${classes?.map((className) => ` ${className}`)}`}
    >
      {
      show
        ? (
          <p>{text}</p>
        ) : ''
      }
    </Container>
  );
}

Message.defaultProps = {
  timeout: 3000,
  classes: [],
};

Message.propTypes = {
  text: string.isRequired,
  type: string.isRequired,
  timeout: number,
  classes: arrayOf(string),
};

export default Message;
