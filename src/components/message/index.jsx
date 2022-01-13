import React, { useEffect, useState } from 'react';
import {
  string,
  number,
  arrayOf,
  oneOf,
  func,
  element,
} from 'prop-types';

import Container from './Container';

function Message({
  text,
  type,
  timeout,
  classes,
  handleClose,
  closeButtonIcon,
}) {
  const [show, setShow] = useState(false);

  let closeIcon = '✕';
  if (closeButtonIcon) {
    closeIcon = closeButtonIcon;
  }

  const close = () => setShow(false);

  useEffect(() => {
    if (text && type) {
      setShow(true);
      if (type !== 'fatal') {
        setTimeout(() => close(), timeout);
      }
    }
  }, [text, type]);

  const date = Date.now();

  if (show) {
    return (
      <Container
        id={`pure-ui-message-container-${date}`}
        key={`pure-ui-message-container-${date}`}
        className={`${type}${classes?.map((className) => ` ${className}`)}`}
      >
        <button
          id={`pure-ui-message-container-close-button-${date}`}
          key={`pure-ui-message-container-close-button-${date}`}
          className={`close-button ${type}`}
          type="button"
          onClick={() => {
            if (handleClose) {
              handleClose();
            } else {
              close();
            }
          }}
        >
          {closeIcon}
        </button>
        <p
          id={`pure-ui-message-container-text-${date}`}
          key={`pure-ui-message-container-text-${date}`}
        >
          {text}
        </p>
      </Container>
    );
  }

  return '';
}

Message.defaultProps = {
  text: null,
  type: null,
  timeout: 3000,
  classes: [],
  handleClose: () => null,
  closeButtonIcon: null,
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
  handleClose: func,
  closeButtonIcon: element,
};

export default Message;
