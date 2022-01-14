import React from 'react';
import { element, bool, number } from 'prop-types';

import Container from './Container';

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

Row.defaultProps = {
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 16,
  paddingRight: 16,
  padding: 16,
  condensed: false,
  narrow: false,
  noBoxSizing: false,
};

Row.propTypes = {
  children: element.isRequired,
  paddingTop: number,
  paddingBottom: number,
  paddingLeft: number,
  paddingRight: number,
  padding: number,
  condensed: bool,
  narrow: bool,
  noBoxSizing: bool,
};

export default Row;
