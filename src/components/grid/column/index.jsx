import React from 'react';
import { element, number } from 'prop-types';

import Container from './Container';

function Column({
  children,
  extraSmall,
  small,
  medium,
  large,
  extraLarge,
}) {
  return (
    <Container
      extraSmall={extraSmall}
      small={small}
      medium={medium}
      large={large}
      extraLarge={extraLarge}
    >
      {children}
    </Container>
  );
}

Column.defaultProps = {
  extraSmall: 12,
  small: 12,
  medium: 12,
  large: 12,
  extraLarge: 12,
};

Column.propTypes = {
  children: element.isRequired,
  extraSmall: number,
  small: number,
  medium: number,
  large: number,
  extraLarge: number,
};

export default Column;
