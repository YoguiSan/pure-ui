import React from 'react';
import { useForm } from 'react-hook-form';
import {
  arrayOf, element, func, number, oneOf, shape, string,
} from 'prop-types';

import Input from '../input';
import Button from '../button';
import Grid, { Row, Column } from '../grid';

import Container from './Container';

import { childrenPositions, FormDefaultProps } from './assets/json';

function Form({
  inputs = FormDefaultProps.inputs,
  children = FormDefaultProps.children,
  onSubmit = FormDefaultProps.onSubmit,
  onCancel = FormDefaultProps.onCancel,
  inputExtraSmall = FormDefaultProps.inputExtraSmall,
  inputSmall = FormDefaultProps.inputSmall,
  inputMedium = FormDefaultProps.inputMedium,
  inputLarge = FormDefaultProps.inputLarge,
  inputExtraLarge = FormDefaultProps.inputExtraLarge,
  childrenPosition = FormDefaultProps.childrenPosition,
  submitButtonText = FormDefaultProps.submitButtonText,
  cancelButtonText = FormDefaultProps.cancelButtonText,
  submitButtonVariant = FormDefaultProps.submitButtonVariant,
  cancelButtonVariant = FormDefaultProps.cancelButtonVariant,
  submitButtonColor = FormDefaultProps.submitButtonColor,
  cancelButtonColor = FormDefaultProps.cancelButtonColor,
  submitButtonFontColor = FormDefaultProps.submitButtonFontColor,
  cancelButtonFontColor = FormDefaultProps.cancelButtonFontColor,
}) {
  const {
    register,
    handleSubmit,
  } = useForm();

  const inputList = [];

  inputs.forEach(({
    name,
    type,
    variant,
    label,
    value,
    onChange,
    classes,
    required,
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
        register={register(name, {
          required,
        })}
      />
    </Column>,
  ));

  return (
    <Container
      onSubmit={handleSubmit(onSubmit)}
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
        <Row>
          {
            onCancel
              ? (
                <Column
                  extraSmall={inputExtraSmall}
                  small={inputSmall}
                  medium={inputMedium}
                  large={inputLarge}
                  extraLarge={inputExtraLarge}
                >
                  <Button
                    variant={cancelButtonVariant}
                    color={cancelButtonColor}
                    fontColor={cancelButtonFontColor}
                    text={cancelButtonText}
                    onClick={(event) => onCancel(event)}
                  />
                </Column>
              )
              : ''
          }
          <Column
            extraSmall={inputExtraSmall}
            small={inputSmall}
            medium={inputMedium}
            large={inputLarge}
            extraLarge={inputExtraLarge}
          >
            <Button
              // type="submit"
              variant={submitButtonVariant}
              color={submitButtonColor}
              fontColor={submitButtonFontColor}
              text={submitButtonText}
              onClick={handleSubmit(onSubmit)}
            />
          </Column>
        </Row>
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
  onCancel: func,
  childrenPosition: oneOf(childrenPositions),
  submitButtonText: string,
  cancelButtonText: string,
  submitButtonVariant: string,
  cancelButtonVariant: string,
  submitButtonColor: string,
  cancelButtonColor: string,
  submitButtonFontColor: string,
  cancelButtonFontColor: string,
};

export default Form;
