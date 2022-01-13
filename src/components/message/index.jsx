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

import { PositionOptions, TypeOptions } from './json';

function Message({
  text,
  type,
  timeout,
  classes,
  handleClose,
  closeButtonIcon,
  closeDelay = 500000,
  position,
}) {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);

  let closeIcon = '✕';
  if (closeButtonIcon) {
    closeIcon = closeButtonIcon;
  }

  const close = () => {
    setClosing(true);
    setTimeout(() => setShow(false), closeDelay);
  };

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
        className={`${type} ${position}${classes?.map((className) => ` ${className}`)} ${closing && 'closing'}`}
        closeDelay={closeDelay}
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
  handleClose: null,
  closeButtonIcon: null,
  closeDelay: 50000,
  position: 'top-right',
};

Message.propTypes = {
  text: string,
  type: oneOf(TypeOptions),
  timeout: number,
  classes: arrayOf(string),
  handleClose: func,
  closeButtonIcon: element,
  closeDelay: number,
  position: oneOf(PositionOptions),
};

export default Message;
