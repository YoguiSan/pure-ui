import React, { useEffect, useState } from 'react';
import {
  string, number, arrayOf, oneOf,
} from 'prop-types';

import Container from './Container';

function Message({
  text,
  type,
  timeout,
  classes,
}) {
  const [show, setShow] = useState(false);

  const close = () => setShow(false);

  useEffect(() => {
    if (text && type) {
      setShow(true);
      if (type !== 'fatal') {
        setTimeout(() => close(), timeout);
      }
    }
  }, [text, type]);

  const date = new Date();

  return (
    <Container
      id={`pure-ui-message-container-${date}`}
      key={`pure-ui-message-container-${date}`}
      className={`pure-ui-message-container ${type}${classes?.map((className) => ` ${className}`)}`}
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
  text: null,
  type: null,
  timeout: 3000,
  classes: [],
};

Message.propTypes = {
  text: string,
  type: oneOf([
    'success',
    'info',
    'warning',
    'error',
    'fatal',
  ]),
  timeout: number,
  classes: arrayOf(string),
};

export default Message;
