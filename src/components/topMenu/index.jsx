import React, { useState } from 'react';
import {
  object, objectOf, string, number, oneOf, node,
} from 'prop-types';

import Button from '../button';

import { TopMenuDefaultProps } from './assets/json';
import { Units } from '../assets/json';

import Container from './Container';
import Image from '../figure';

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
  menuItemBackgroundHover = TopMenuDefaultProps.menuItemBackgroundHover,
  menuItemBorder,
  menuItemColor = TopMenuDefaultProps.menuItemColor,
  menuDropdownBackground = TopMenuDefaultProps.menuDropdownBackground,
  menuDropdownColor = TopMenuDefaultProps.menuDropdownColor,
  menuItemBorderHover,
  menuItemColorHover = TopMenuDefaultProps.menuItemColorHover,
  unit = TopMenuDefaultProps.unit,
  background = TopMenuDefaultProps.background,
  logo,
  logoAlt = 'Home',
  logoHref = '/',
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menu = iterateMenuObject(menuItems);

  return (
    <Container
      menuItemFontSize={menuItemFontSize}
      menuBorderBottom={menuBorderBottom}
      menuDropdownBackground={menuDropdownBackground}
      menuDropdownColor={menuDropdownColor}
      menuItemBackground={menuItemBackground}
      menuItemBorder={menuItemBorder}
      menuItemColor={menuItemColor}
      menuItemBackgroundHover={menuItemBackgroundHover}
      menuItemBorderHover={menuItemBorderHover}
      menuItemColorHover={menuItemColorHover}
      unit={unit}
      menuItemWidth={menuItemWidth}
      background={background}
      open={mobileOpen}
    >
      <Button
        variant="outlined"
        text="≡"
        onClick={() => setMobileOpen(!mobileOpen)}
        classes={['pure-ui-menu-toggle-button']}
      />
      {logo && (
        <a href={logoHref} className="pure-ui-top-menu-logo-container">
          <Image src={logo} alt={logoAlt} />
        </a>
      )}
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
  menuDropdownBackground: string,
  menuDropdownColor: string,
  menuItemBorder: string,
  menuItemColor: string,
  menuItemBackgroundHover: string,
  menuItemBorderHover: string,
  menuItemColorHover: string,
  menuItemFontSize: number,
  unit: oneOf(Units),
  background: string,
  logo: node,
  logoAlt: string,
  logoHref: string,
};

export default TopMenu;
