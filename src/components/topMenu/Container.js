import Styles from 'styled-components';

import { Fonts } from '../assets/json';

const menuStyles = '';

export default Styles.header`
border-bottom: ${({ menuBorderBottom }) => `solid 1px ${menuBorderBottom}`};
position: fixed;
height: fit-content;
max-height: 3rem;
width: 97%;
top: 0;

margin: 0 auto;

transition: all .2s;

${Fonts.default}

> ul {
  display: flex;
  flex-direction: row;
  position: relative;

  a {
    text-decoration: none;
    ${({ menuItemColor }) => `color: ${menuItemColor}`}
  }

  ul {
    position: absolute;

    right: -8rem;
  }

  &, & ul {
    list-style-type: none;
    margin: 0;
    width: 8rem;
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

    > ul {
      display: none;
    }
  
    &:hover {
      > ul {
        display: block;

        ${menuStyles}
      }
    }
  }
}
`;
