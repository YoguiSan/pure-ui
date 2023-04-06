import Styles from 'styled-components';
import { Colors } from '../assets/json';

export default Styles.article`
flex-direction: column;
margin-bottom: .1rem;
width: 100%;

&, & > section {
  display: flex;
}

> section {
  flex-direction: row;

  &.pure-ui-accordion-header {
    cursor: pointer;
    background: ${Colors.lightGray};

    h4 {
      height: fit-content;
      margin: auto;
    }

    div {
      justify-content: end;

      button {
        transition: all .2s;
        font-size: .3rem;
        ${({ open }) => open && 'transform: scaleY(-100%);'}
      }
    }

  }

  &.pure-ui-accordion-body {
    background: ${Colors.lightestGray};
    transition: all .2s;
    ${({ open }) => (!open ? `
    height: 0;
    overflow: hidden;
    ` : 'height: fit-content;')}
  }
}

`;
