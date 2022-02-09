import React, { useEffect, useState } from 'react';
import {
  arrayOf, bool, func, oneOf, string,
} from 'prop-types';

import { InputDefaultProps, types, variants } from './assets/json';

import Container from './Container';

function Input({
  type = InputDefaultProps.type,
  label = InputDefaultProps.label,
  value = InputDefaultProps.value,
  onChange = InputDefaultProps.onChange,
  name = InputDefaultProps.name,
  variant = InputDefaultProps.variant,
  classes = InputDefaultProps.classes,
  error,
  errorMessage,
  register,
  fullWidth,
}) {
  const [componentName, setComponentName] = useState(name || `pure-ui-input-${Date.now() / ((175124 * Math.random()) * Math.random())}`);

  useEffect(() => {
    setComponentName(name);
  }, [name]);

  useEffect(() => {
    const conflictingElements = document.getElementsByName(componentName);

    if (!componentName || componentName.length < 1 || conflictingElements.length > 1) {
      setComponentName(`pure-ui-input-${Date.now() / ((301574 * Math.random()) * Math.random())}`);
    }
  }, [componentName]);

  return (
    <Container
      className={`pure-ui-input-${variant} ${classes.join(' ')}`}
      fullWidth={fullWidth}
    >
      {
        label
          && (
            <label
              htmlFor={componentName}
            >
              {label}
            </label>
          )
      }
      <input
        name={componentName}
        id={componentName}
        type={type}
        label={label}
        value={value}
        onChange={onChange}
        {...register}
      />
      {
        error
        && (
          <p
            className="pure-ui-input-error-message"
          >
            {errorMessage}
          </p>
        )
      }
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
  error: bool,
  errorMessage: string,
  register: func,
  fullWidth: bool,
};

export default Input;
