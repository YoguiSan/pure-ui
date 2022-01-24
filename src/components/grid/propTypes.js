import {
  bool,
  element,
  number,
  string,
} from 'prop-types';

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
  allowOverflow: bool,
  justifyContent: string,
};

export const GridDefaultProps = {
  condensed: false,
  narrow: false,
  noBoxSizing: false,
  overflow: 'visible',
  padding: 16,
  paddingBottom: 16,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 16,
  allowOverflow: false,
  justifyContent: 'space-around',
};
