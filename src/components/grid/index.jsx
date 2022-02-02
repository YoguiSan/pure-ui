import { element } from 'prop-types';
import React from 'react';

import Container from './Container';

export { default as Row } from './row';
export { default as Column } from './column';

function Grid({
  children,
}) {
  return (
    <Container>
      {children}
    </Container>
  );
}

Grid.defaultProps = {};

Grid.propTypes = {
  children: element.isRequired,
};

export default Grid;
