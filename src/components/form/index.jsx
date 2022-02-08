import React from 'react';

import {
  arrayOf, element, func, number, oneOf, shape, string,
} from 'prop-types';

import Input from '../input';
import Grid, { Row, Column } from '../grid';

import Container from './Container';

import { childrenPositions, FormDefaultProps } from './assets/json';

function Form({
  inputs = FormDefaultProps.inputs,
  children = FormDefaultProps.children,
  onSubmit = FormDefaultProps.onSubmit,
  inputExtraSmall = FormDefaultProps.inputExtraSmall,
  inputSmall = FormDefaultProps.inputSmall,
  inputMedium = FormDefaultProps.inputMedium,
  inputLarge = FormDefaultProps.inputLarge,
  inputExtraLarge = FormDefaultProps.inputExtraLarge,
  childrenPosition = FormDefaultProps.childrenPosition,
}) {
  const inputList = [];

  inputs.forEach(({
    name,
    type,
    variant,
    label,
    value,
    onChange,
    classes,
  }) => inputList.push(
    <Column
      extraSmall={inputExtraSmall}
      small={inputSmall}
      medium={inputMedium}
      large={inputLarge}
      extraLarge={inputExtraLarge}
    >
      <Input
        key={name || `pure-ui-input-${Date.now() / ((175124 * Math.random()) * Math.random())}`}
        name={name}
        type={type}
        variant={variant}
        label={label}
        value={value}
        onChange={onChange}
        classes={classes}
      />
    </Column>,
  ));

  return (
    <Container
      onSubmit={onSubmit}
    >
      <Grid>
        {childrenPosition === 'start' && (
          <Row>
            {children}
          </Row>
        )}
        <Row>
          {inputList}
        </Row>
        {childrenPosition === 'end' && (
          <Row>
            {children}
          </Row>
        )}
      </Grid>
    </Container>
  );
}

Form.defaultProps = FormDefaultProps;

Form.propTypes = {
  inputs: arrayOf(shape({
    name: string,
    type: string,
    variant: string,
    label: string,
    value: string,
    onChange: func,
    classes: arrayOf(string),
  })).isRequired,
  children: arrayOf(element),
  inputExtraSmall: number,
  inputSmall: number,
  inputMedium: number,
  inputLarge: number,
  inputExtraLarge: number,
  onSubmit: func,
  childrenPosition: oneOf(childrenPositions),
};

export default Form;
