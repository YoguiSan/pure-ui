import React from 'react';

import Container from './Container';

import { GridDefaultProps, GridPropTypes } from '../propTypes';

function Column({
  children,
  extraSmall,
  small,
  medium,
  large,
  extraLarge,
  condensed,
  narrow,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  padding = 16,
  noBoxSizing,
  allowOverflow,
  justifyContent,
}) {
  return (
    <Container
      extraSmall={extraSmall}
      small={small}
      medium={medium}
      large={large}
      extraLarge={extraLarge}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      padding={padding}
      condensed={condensed}
      narrow={narrow}
      noBoxSizing={noBoxSizing}
      allowOverflow={allowOverflow}
      justifyContent={justifyContent}
    >
      {children}
    </Container>
  );
}

Column.defaultProps = GridDefaultProps;
Column.propTypes = GridPropTypes;

export default Column;
