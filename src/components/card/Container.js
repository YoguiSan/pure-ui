import Styles from 'styled-components';
import { Colors } from '../assets/json';

export default Styles.div`
  box-shadow: -2px 2px 1rem ${Colors.gray};
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
