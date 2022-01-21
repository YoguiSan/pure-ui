import {
  object, objectOf, string,
} from 'prop-types';

import React from 'react';
import { TopMenuDefaultProps } from './assets/json';

import Container from './Container';

const iterateMenuObject = (menuObject) => {
  const menu = [];

  Object.keys(menuObject).forEach((menuItem) => {
    if (typeof (menuObject[menuItem]) === 'object') {
      menu.push(
        <li>
          {menuItem}
          <ul>
            {iterateMenuObject(menuObject[menuItem])}
          </ul>
        </li>,
      );
    } else {
      menu.push(<li><a href={menuObject[menuItem]}>{menuItem}</a></li>);
    }
  });

  return menu;
};

function TopMenu({
  menuItems,
  menuBorderBottom = TopMenuDefaultProps.menuBorderBottom,
  menuItemBackground = TopMenuDefaultProps.menuItemBackground,
  menuItemBorder,
  menuItemColor = TopMenuDefaultProps.menuItemColor,
  menuItemBackgroundHover = TopMenuDefaultProps.menuItemBackgroundHover,
  menuItemBorderHover,
  menuItemColorHover = TopMenuDefaultProps.menuItemColorHover,
}) {
  const menu = iterateMenuObject(menuItems);

  return (
    <Container
      menuBorderBottom={menuBorderBottom}
      menuItemBackground={menuItemBackground}
      menuItemBorder={menuItemBorder}
      menuItemColor={menuItemColor}
      menuItemBackgroundHover={menuItemBackgroundHover}
      menuItemBorderHover={menuItemBorderHover}
      menuItemColorHover={menuItemColorHover}
    >
      <ul>{menu}</ul>
    </Container>
  );
}

TopMenu.defaultProps = TopMenuDefaultProps;

TopMenu.propTypes = {
  menuItems: (string || objectOf(string || object)).isRequired,
  menuBorderBottom: string,
  menuItemBackground: string,
  menuItemBorder: string,
  menuItemColor: string,
  menuItemBackgroundHover: string,
  menuItemBorderHover: string,
  menuItemColorHover: string,
};

export default TopMenu;
