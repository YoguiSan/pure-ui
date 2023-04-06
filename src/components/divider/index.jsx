import React from 'react';
import { string } from 'prop-types';

import Container from './Container';

import { DividerDefaultProps } from './assets/json';

function Divider({
  variation,
  text,
}) {
  return (
    <Container
      variation={variation}
    >
      {text}
    </Container>
  );
}

Divider.defaultProps = DividerDefaultProps;

Divider.propTypes = {
  variation: string,
  text: string,
};

export default Divider;
