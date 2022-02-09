import React from 'react';

import Container from './Container';
import { GridDefaultProps, GridPropTypes } from '../propTypes';

function Row({
  children = GridDefaultProps.children,
  condensed = GridDefaultProps.condensed,
  narrow = GridDefaultProps.narrow,
  noBoxSizing = GridDefaultProps.noBoxSizinh,
  overflow = GridDefaultProps.overflow,
  padding = GridDefaultProps.padding,
  paddingBottom = GridDefaultProps.paddingBottom,
  paddingLeft = GridDefaultProps.paddingLeft,
  paddingRight = GridDefaultProps.paddingRight,
  paddingTop = GridDefaultProps.paddingTop,
  allowOverflow = GridDefaultProps.allowOverflow,
  justifyContent = GridDefaultProps.justifyContent,
  flexDirection = GridDefaultProps.flexDirection,
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
      allowOverflow={allowOverflow}
      justifyContent={justifyContent}
      flexDirection={flexDirection}
    >
      {children}
    </Container>
  );
}

Row.defaultProps = GridDefaultProps;
Row.propTypes = GridPropTypes;

export default Row;
