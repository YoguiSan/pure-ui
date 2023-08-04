import React from 'react';

import Logo from '../../images/logo.svg';

import Grid, { Row, Column } from '../grid';
import TopMenu from '.';

import { TopMenuDefaultProps } from './assets/json';
import { Units } from '../assets/json';

const assembleUrl = (component) => `/?path=/story/${component}-component`;

export default {
  title: 'TopMenu component',
  component: TopMenu,
  argTypes: {
    background: {
      control: {
        type: 'text',
      },
    },
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
    menuDropdownBackground: {
      control: {
        type: 'text',
      },
    },
    menuDropdownColor: {
      control: {
        type: 'text',
      },
    },
    menuItemWidth: {
      control: {
        type: 'number',
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
    <>
      <TopMenu
        {...args}
      />
      <Grid>
        <Row>
          <Column
            justifyContent="normal"
            extraSmall={12}
          >
            <p>Check out this top menu. It's great for layout components</p>
          </Column>
        </Row>
      </Grid>
    </>
  );
}

export const topMenu = Template.bind({});

topMenu.args = {
  ...TopMenuDefaultProps,
  logo: Logo,
  logoAlt: 'Pure UI React',
  logoHref: 'https://www.npmjs.com/package/pure-ui-react',
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
