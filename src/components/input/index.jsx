import React, { useEffect, useState } from 'react';
import {
  arrayOf, bool, func, oneOf, string, number, shape,
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
  rows = InputDefaultProps.rows,
  options,
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

  let selectedInput;

  if (type === 'textarea') {
    selectedInput = (
      <textarea
        name={componentName}
        id={componentName}
        label={label}
        value={value}
        {...register}
        onChange={onChange}
        rows={rows}
      />
    );
  } else if (
    type === 'select'
    || type === 'dropdown'
  ) {
    selectedInput = (
      <select
        name={componentName}
        id={componentName}
        label={label}
        value={value}
        {...register}
        onChange={onChange}
      >
        {options.map(({ value: optionValue, text }) => (
          <option
            value={optionValue}
            selected={optionValue === value}
          >
            {text}
          </option>
        ))}
      </select>
    );
  } else {
    selectedInput = (
      <input
        name={componentName}
        id={componentName}
        type={type}
        label={label}
        value={value}
        {...register}
        onChange={onChange}
      />
    );
  }

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
      {selectedInput}
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
  rows: number,
  options: arrayOf(shape({
    value: string.isRequired,
    text: string.isRequired,
  })),
};

export default Input;
