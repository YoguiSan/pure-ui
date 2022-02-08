import {
  arrayOf,
  bool,
  element,
  number,
  oneOf,
  string,
} from 'prop-types';
import { JustifyContentOptions } from './assets/json';

export const GridPropTypes = {
  children: arrayOf(element).isRequired,
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
  justifyContent: oneOf(JustifyContentOptions),
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
