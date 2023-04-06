import Styles from 'styled-components';
import { Fonts } from '../assets/json';
import styles from '../assets/json/styles';

export default Styles.div`
position: fixed;
bottom: 0;
left: 0;
position: fixed;
width: 100%;
${styles.boxShadow()}

p.pure-ui-cookies-modal-description {
  width: 100%;
}

${Fonts.default}
`;
