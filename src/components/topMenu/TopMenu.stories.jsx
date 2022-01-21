import React from 'react';

import Row from '../grid/row';
import Column from '../grid/column';
import TopMenu from '.';

import { TopMenuDefaultProps } from './assets/json';
import { Units } from '../assets/json';

const assembleUrl = (component) => `/?path=/story/${component}-component`;

export default {
  title: 'TopMenu component',
  component: TopMenu,
  argTypes: {
    menuItems: {
      control: {
        type: 'object',
      },
    },
    menuBorderBottom: {
      control: {
        type: 'text',
      },
    },
    menuItemFontSize: {
      control: {
        type: 'number',
      },
    },
    menuItemBackground: {
      control: {
        type: 'text',
      },
    },
    menuItemBorder: {
      control: {
        type: 'text',
      },
    },
    menuItemColor: {
      control: {
        type: 'text',
      },
    },
    menuItemBackgroundHover: {
      control: {
        type: 'text',
      },
    },
    menuItemBorderHover: {
      control: {
        type: 'text',
      },
    },
    menuItemColorHover: {
      control: {
        type: 'text',
      },
    },
    unit: {
      control: {
        type: 'radio',
        options: Units,
      },
    },
  },
};

function Template(args) {
  return (
    <TopMenu
      {...args}
    />
  );
}

export const topMenu = Template.bind({});

topMenu.args = {
  ...TopMenuDefaultProps,
  menuItems: {
    Home: '/',
    'Structure Components': {
      Grid: {
        Row: assembleUrl('row'),
        Column: assembleUrl('column'),
      },
    },
    'Interaction Components': {
      Button: assembleUrl('button'),
    },
    'Media components': {
      Image: assembleUrl('image'),
    },
    'Feedback components': {
      Loader: assembleUrl('loader'),
      Message: assembleUrl('message'),
    },
  },
};
