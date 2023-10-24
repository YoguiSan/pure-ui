import React from 'react';
import {
  element, oneOf, string, func, objectOf, oneOfType, number,
  arrayOf,
} from 'prop-types';

import Container from './Container';

import { ButtonDefaultProps, variants } from './assets/json';

function Button({
  variant = ButtonDefaultProps.variant,
  padding = ButtonDefaultProps.padding,
  type = ButtonDefaultProps.type,
  color = ButtonDefaultProps.color,
  text = ButtonDefaultProps.text,
  icon = ButtonDefaultProps.icon,
  fontColor = ButtonDefaultProps.fontColor,
  onClick = ButtonDefaultProps.onClick,
  styles = ButtonDefaultProps.styles,
  classes,
}) {
  return (
    <Container
      variant={variant}
      padding={padding}
      color={color}
      fontColor={fontColor}
      styles={styles}
      className={classes.join(' ')}
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
  padding: number,
  styles: objectOf(oneOfType([string, number])),
  classes: arrayOf(string),
};

export default Button;
