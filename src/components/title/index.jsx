import React from 'react';
import { element, oneOf, string } from 'prop-types';

import Container from './Container';

import { align as Align, tags, TitleDefaultProps } from './assets/json';

function Title({
  type,
  text,
  children,
  align,
}) {
  const tag = tags[type];
  return (
    <Container
      tag={tag}
      align={align}
    >
      {text}
      {children || ''}
    </Container>
  );
}

Title.defaultProps = TitleDefaultProps;

Title.propTypes = {
  type: oneOf(Object.keys(tags)),
  text: string.isRequired,
  children: element,
  align: oneOf(Align),
};

export default Title;
