import React from 'react';
import { element, oneOf, string } from 'prop-types';

import Container from './Container';

import { tags } from './assets/json';

function Title({
  type,
  text,
  children,
}) {
  const tag = tags[type];
  return (
    <Container
      tag={tag}
    >
      {text}
      {children || ''}
    </Container>
  );
}

Title.defaultProps = {
  type: 'title',
  children: null,
};

Title.propTypes = {
  type: oneOf(Object.keys(tags)),
  text: string.isRequired,
  children: element,
};

export default Title;
