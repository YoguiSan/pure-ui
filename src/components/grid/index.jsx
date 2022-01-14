import { element } from 'prop-types';
import React from 'react';
import Container from './Container';

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
