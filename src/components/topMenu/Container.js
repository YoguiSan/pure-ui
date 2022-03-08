import Styles from 'styled-components';

import { Breakpoints, Fonts, Colors } from '../assets/json';

const menuStyles = '';

export default Styles.header`
${({ background = 'white' }) => `background: ${background};`}

.pure-ui-menu-toggle-button {
  display: none;
}

border-bottom: ${({ menuBorderBottom }) => `solid 1px ${menuBorderBottom}`};
position: fixed;
height: fit-content;
width: 97%;
top: 0;
z-index: 998;

margin: 0 auto;

transition: all .2s;

${Fonts.default}
${({
    menuItemFontSize,
    unit = 'px',
  }) => (menuItemFontSize ? `font-size: ${menuItemFontSize}${unit};` : '')}

> ul {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  position: relative;
  max-height: 3rem;
  width: 100%;

  > li {
    width: ${(({ menuItemWidth, unit = 'px' }) => (menuItemWidth ? `${menuItemWidth}${unit}` : '8rem'))};
  }

  a {
    margin: auto;
    text-decoration: none;
    ${({ menuItemColor }) => `color: ${menuItemColor}`}
  }

  ul {
    position: absolute;
    box-shadow: -2px 2px 1rem #ccc;

    top: 100%;

  ${({
    menuDropdownBackground = 'white',
    menuDropdownColor = 'black',
  }) => `
    background: ${menuDropdownBackground};
    color: ${menuDropdownColor};
    `}

    margin: 0 auto;
  }

  &, & ul {
    list-style-type: none;
    margin: 0;
  ${({
    menuItemBackground,
    menuItemBorder,
    menuItemColor,
    menuItemBackgroundHover,
    menuItemBorderHover,
    menuItemColorHover,
  }) => `> li {
      border: ${menuItemBorder ? `solid 2px ${menuItemBorder}` : 'none'};
      background: ${menuItemBackground};
      color: ${menuItemColor};
      
      &:hover {
        background: ${menuItemBackgroundHover};
        border: ${menuItemBorderHover ? `solid 2px ${menuItemBorderHover}` : 'none'};
        color: ${menuItemColorHover};
      }
    }
      `}
  }

  li {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: .6rem;
    position: relative;

    text-align: center;

    > ul {
      display: none;
    }
  
    &:hover {
      > ul {
        display: block;
        padding: 0;
        left: 0;
        right: 0;

        ${menuStyles}
      }
    }
  }
}

@media (max-width: ${Breakpoints.medium - 1}px) {
  border-bottom: none;
  position: relative;

  .pure-ui-menu-toggle-button {
    display: block;
    > button {
      padding: 0;
      width: 2rem;
      height: 2rem;
    }
  }

  > ul {
    ${({ open }) => (
    open
      ? `
      display: flex;
      flex-direction: column;
      padding: 0;
      position: fixed;
      left: 0;
      flex-direction: column;
      width: fit-content;
      height: fit-content;
      box-shadow: -2px 2px 1rem ${Colors.gray};
      `
      : 'display: none;')};

      > li > ul {
        z-index: 997;
      }
  }
}
`;
