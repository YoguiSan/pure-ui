import React from 'react';
import {
  arrayOf, func, oneOf, string,
} from 'prop-types';

import { InputDefaultProps, types, variants } from './assets/json';

import Container from './Container';

function Input({
  type = InputDefaultProps.type,
  label = InputDefaultProps.label,
  value = InputDefaultProps.value,
  onChange = InputDefaultProps.onChange,
  name = `pure-ui-input-${Date.now()}`,
  variant = InputDefaultProps.variant,
  classes = InputDefaultProps.classes,
}) {
  return (
    <Container
      className={`pure-ui-input-${variant} ${classes.join(' ')}`}
    >
      {
        label
          && (
            <label
              htmlFor={name}
            >
              {label}
            </label>
          )
      }
      <input
        name={name}
        id={name}
        type={type}
        label={label}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}

Input.defaultProps = InputDefaultProps;

Input.propTypes = {
  type: oneOf(types),
  label: string,
  value: string,
  name: string,
  onChange: func,
  variant: oneOf(variants),
  classes: arrayOf(string),
};

export default Input;
