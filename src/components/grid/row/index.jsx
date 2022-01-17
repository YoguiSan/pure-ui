import React from 'react';

import Container from './Container';
import { GridDefaultProps, GridPropTypes } from '../propTypes';

function Row({
  children,
  condensed,
  narrow,
  noBoxSizing,
  overflow,
  padding = 16,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
}) {
  return (
    <Container
      condensed={condensed}
      overflow={overflow}
      narrow={narrow}
      noBoxSizing={noBoxSizing}
      padding={padding}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
    >
      {children}
    </Container>
  );
}

Row.defaultProps = GridDefaultProps;
Row.propTypes = GridPropTypes;

export default Row;
