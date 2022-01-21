import React from 'react';

import Row from '../grid/row';
import Column from '../grid/column';
import TopMenu from '.';

import { TopMenuDefaultProps } from './assets/json';

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
    Início: 'inicio',
    Páginas: {
      História: 'historia',
      Sobre: 'sobre',
      Contato: {
        Email: 'email',
        Telefone: 'phone',
      },
    },
  },
};
