import React from 'react';
import {
  element, oneOf, string, number,
} from 'prop-types';

import Container from './Container';
import Image from '../figure';

import { align as Align, tags, TitleDefaultProps } from './assets/json';
import { Units } from '../assets/json';

function Title({
  type,
  text,
  children,
  align,
  icon,
  iconPosition = 'right',
  iconHeight,
  iconWidth,
  unit = 'px',
  classes,
}) {
  const tag = tags[type];

  const logoComponent = (
    <Image
      alt="title logo"
      src={icon}
      height={iconHeight}
      width={iconWidth}
      unit={unit}
      styles={{ margin: '0 1rem' }}
    />
  );

  return (
    <Container
      tag={tag}
      align={align}
      lineHeight={iconHeight}
      unit={unit}
    >
      {icon && iconPosition === 'left' && logoComponent}
      {text}
      {children || ''}
      {icon && iconPosition === 'right' && logoComponent}
    </Container>
  );
}

Title.defaultProps = TitleDefaultProps;

Title.propTypes = {
  type: oneOf(Object.keys(tags)),
  text: string.isRequired,
  children: element,
  align: oneOf(Align),
  icon: string,
  iconPosition: oneOf(['left', 'right']),
  iconHeight: number,
  iconWidth: number,
  unit: oneOf(Units),
};

export default Title;
