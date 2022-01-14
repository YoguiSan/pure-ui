import React from 'react';

import Container from './Container';
import { GridDefaultProps, GridPropTypes } from '../propTypes';

function Row({
  children,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  padding,
  condensed,
  narrow,
  noBoxSizing,
}) {
  return (
    <Container
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      padding={padding}
      condensed={condensed}
      narrow={narrow}
      noBoxSizing={noBoxSizing}
    >
      {children}
    </Container>
  );
}

Row.defaultProps = GridDefaultProps;
Row.propTypes = GridPropTypes;

export default Row;
