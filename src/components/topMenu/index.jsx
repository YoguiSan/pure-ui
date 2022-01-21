import React from 'react';
import {
  object, objectOf, string, number, oneOf,
} from 'prop-types';

import { TopMenuDefaultProps } from './assets/json';
import { Units } from '../assets/json';

import Container from './Container';

const iterateMenuObject = (menuObject) => {
  const menu = [];

  Object.keys(menuObject).forEach((menuItem) => {
    if (typeof (menuObject[menuItem]) === 'object') {
      menu.push(
        <li key={`${menuItem}-${Date.now()}`}>
          {menuItem}
          <ul>
            {iterateMenuObject(menuObject[menuItem])}
          </ul>
        </li>,
      );
    } else {
      menu.push(<li key={`${menuItem}-${Date.now()}`}><a href={menuObject[menuItem]}>{menuItem}</a></li>);
    }
  });

  return menu;
};

function TopMenu({
  menuItems = {},
  menuItemFontSize = TopMenuDefaultProps.menuItemFontSize,
  menuBorderBottom = TopMenuDefaultProps.menuBorderBottom,
  menuItemWidth,
  menuItemBackground = TopMenuDefaultProps.menuItemBackground,
  menuItemBorder,
  menuItemColor = TopMenuDefaultProps.menuItemColor,
  menuItemBackgroundHover = TopMenuDefaultProps.menuItemBackgroundHover,
  menuItemBorderHover,
  menuItemColorHover = TopMenuDefaultProps.menuItemColorHover,
  unit = TopMenuDefaultProps.unit,
}) {
  const menu = iterateMenuObject(menuItems);

  return (
    <Container
      menuItemFontSize={menuItemFontSize}
      menuBorderBottom={menuBorderBottom}
      menuItemBackground={menuItemBackground}
      menuItemBorder={menuItemBorder}
      menuItemColor={menuItemColor}
      menuItemBackgroundHover={menuItemBackgroundHover}
      menuItemBorderHover={menuItemBorderHover}
      menuItemColorHover={menuItemColorHover}
      unit={unit}
      menuItemWidth={menuItemWidth}
    >
      <ul>{menu}</ul>
    </Container>
  );
}

TopMenu.defaultProps = TopMenuDefaultProps;

TopMenu.propTypes = {
  menuItems: (string || objectOf(string || object)).isRequired,
  menuItemWidth: number,
  menuBorderBottom: string,
  menuItemBackground: string,
  menuItemBorder: string,
  menuItemColor: string,
  menuItemBackgroundHover: string,
  menuItemBorderHover: string,
  menuItemColorHover: string,
  menuItemFontSize: number,
  unit: oneOf(Units),
};

export default TopMenu;
