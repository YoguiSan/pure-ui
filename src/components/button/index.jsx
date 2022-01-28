import React from 'react';
import {
  element, oneOf, string, func, objectOf,
} from 'prop-types';

import Container from './Container';

import { ButtonDefaultProps, variants } from './assets/json';

function Button({
  variant = ButtonDefaultProps.variant,
  type = ButtonDefaultProps.type,
  color = ButtonDefaultProps.color,
  text = ButtonDefaultProps.text,
  icon = ButtonDefaultProps.icon,
  fontColor = ButtonDefaultProps.fontColor,
  onClick = ButtonDefaultProps.onClick,
  styles = ButtonDefaultProps.styles,
}) {
  return (
    <Container
      variant={variant}
      color={color}
      fontColor={fontColor}
      styles={styles}
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

Button.defaultProps = ButtonDefaultProps;

Button.propTypes = {
  variant: oneOf(Object.keys(variants)),
  color: string,
  fontColor: string,
  type: string,
  text: string.isRequired,
  icon: element,
  onClick: func.isRequired,
  styles: objectOf(),
};

export default Button;
