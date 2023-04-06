import { GridDefaultProps } from './propTypes';
import { JustifyContentOptions } from './assets/json';

export const GridParameters = {
  paddingLeft: {
    control: {
      type: 'number',
    },
  },
  paddingRight: {
    control: {
      type: 'number',
    },
  },
  paddingTop: {
    control: {
      type: 'number',
    },
  },
  paddingBottom: {
    control: {
      type: 'number',
    },
  },
  padding: {
    control: {
      type: 'number',
    },
  },
  condensed: {
    control: {
      type: 'boolean',
    },
  },
  narrow: {
    control: {
      type: 'boolean',
    },
  },
  overflow: {
    control: {
      options: [
        'scroll',
        'hidden',
        'visible',
        'auto',
        'inherit',
      ],
      type: 'radio',
    },
  },
  justifyContent: {
    control: {
      options: JustifyContentOptions,
      type: 'radio',
    },
  },
};

export const GridExampleParameters = {
  ...GridDefaultProps,
  condensed: false,
  narrow: false,
};
