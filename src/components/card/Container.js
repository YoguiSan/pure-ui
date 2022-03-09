import Styles from 'styled-components';
import {
  Colors,
  Styles as CSSStyles,
} from '../assets/json';

export default Styles.div`
  ${CSSStyles.boxShadow()}
  height: fit-content;

  ${({
    padding,
    unit = 'px',
  }) => `
  padding: ${padding}${unit};
  `}

  figure {
    margin: auto;
  }
`;
