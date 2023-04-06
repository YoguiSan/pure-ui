import React, { useEffect, useState } from 'react';
import {
  string,
  number,
  arrayOf,
  oneOf,
  func,
  element,
  bool,
} from 'prop-types';

import Container from './Container';

import { AnimationOptions, PositionOptions, TypeOptions } from './assets/json';

function Message({
  text,
  type,
  timeout,
  classes,
  handleClose,
  closeButtonIcon,
  closeDelay = 500000,
  position,
  openAnimation,
  closeAnimation,
  show: showProp,
}) {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);

  const [closeTimeout, setCloseTimeout] = useState();

  let closeIcon = '✕';
  if (closeButtonIcon) {
    closeIcon = closeButtonIcon;
  }

  const close = () => {
    if (!showProp) {
      setClosing(true);
    }
    setCloseTimeout(setTimeout(() => setShow(false), closeDelay));
  };

  useEffect(() => {
    if (showProp && closeTimeout) {
      clearTimeout(closeTimeout);
    }
  }, [showProp]);

  useEffect(() => {
    setClosing(false);
    clearTimeout(closeTimeout);

    if (text && type) {
      setShow(true);
      if (!showProp && type !== 'fatal') {
        setCloseTimeout(setTimeout(() => (handleClose ? handleClose() : close()), timeout));
      }
    }
  }, [text, type]);

  const date = Date.now();

  if (showProp || show) {
    return (
      <Container
        id={`pure-ui-message-container-${date}`}
        key={`pure-ui-message-container-${date}`}
        className={`${type} ${position.split('-').join(' ')}${classes?.map((className) => ` ${className}`)} ${!showProp && closing && 'closing'}`}
        closeDelay={closeDelay}
        openAnimation={openAnimation}
        closeAnimation={closeAnimation}
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
  openAnimation: 'fadeIn',
  closeAnimation: 'fadeOut',
  show: false,
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
  openAnimation: oneOf(AnimationOptions.open),
  closeAnimation: oneOf(AnimationOptions.close),
  show: bool,
};

export default Message;
