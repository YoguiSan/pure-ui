import React from 'react';
import {
  element, oneOf, string, func,
} from 'prop-types';

import Container from './Container';

import { variants } from './assets/json';

function Button({
  variant = 'text',
  type = 'button',
  color = 'primary',
  text,
  icon,
  fontColor,
  onClick,
}) {
  return (
    <Container
      variant={variant}
      color={color}
      fontColor={fontColor}
    >
      <button
        type={type}
        onClick={(event) => onClick(event)}
      >
        {icon && icon}
        {text}
      </button>
    </Container>
  );
}

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  fontColor: undefined,
  variant: 'text',
  icon: null,
};

Button.propTypes = {
  variant: oneOf(Object.keys(variants)),
  color: string,
  fontColor: string,
  type: string,
  text: string.isRequired,
  icon: element,
  onClick: func.isRequired,
};

export default Button;
