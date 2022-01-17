import { bool, element, number, string } from 'prop-types';

export const GridPropTypes = {
  children: element.isRequired,
  condensed: bool,
  narrow: bool,
  noBoxSizing: bool,
  overflow: string,
  padding: number,
  paddingBottom: number,
  paddingLeft: number,
  paddingRight: number,
  paddingTop: number,
};

export const GridDefaultProps = {
  condensed: false,
  narrow: false,
  noBoxSizing: false,
  overflow: 'scroll',
  padding: 16,
  paddingBottom: 16,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 16,
};
