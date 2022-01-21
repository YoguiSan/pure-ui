import Styles from 'styled-components';

import { Fonts } from '../assets/json';

const menuStyles = '';

export default Styles.header`
border-bottom: ${({ menuBorderBottom }) => `solid 1px ${menuBorderBottom}`};
position: fixed;
height: fit-content;
width: 97%;
top: 0;

margin: 0 auto;

transition: all .2s;

${Fonts.default}
${({
    menuItemFontSize,
    unit = 'px',
  }) => (menuItemFontSize ? `font-size: ${menuItemFontSize}${unit};` : '')}

> ul {
  display: flex;
  flex-direction: row;
  position: relative;
  max-height: 3rem;

  a {
    margin: auto;
    text-decoration: none;
    ${({ menuItemColor }) => `color: ${menuItemColor}`}
  }

  ul {
    position: absolute;
    box-shadow: -2px 2px 1rem #ccc;

    top: 100%;

    margin: 0 auto;
  }

  &, & ul {
    list-style-type: none;
    margin: 0;
    width: ${(({ menuItemWidth, unit = 'px' }) => (menuItemWidth ? `${menuItemWidth}${unit}` : '8rem'))};
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
`;
