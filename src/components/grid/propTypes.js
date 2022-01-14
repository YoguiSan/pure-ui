import { bool, element, number } from 'prop-types';

export const GridPropTypes = {
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

export const GridDefaultProps = {
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 16,
  paddingRight: 16,
  padding: 16,
  condensed: false,
  narrow: false,
  noBoxSizing: false,
};
