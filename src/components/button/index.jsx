import React from 'react';
import {
  element, oneOf, string, func,
} from 'prop-types';

import Container from './Container';

import { variants } from './json';

function Button({
  variant,
  type = 'button',
  color,
  text,
  icon,
  onClick,
}) {
  return (
    <Container
      variant={variant}
      color={color}
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
  variant: 'text',
  icon: null,
};

Button.propTypes = {
  variant: oneOf(Object.keys(variants)),
  color: string,
  type: string,
  text: string.isRequired,
  icon: element,
  onClick: func.isRequired,
};

export default Button;
