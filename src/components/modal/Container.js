import Styles from 'styled-components';
import { Colors } from '../assets/json';

export default Styles.article`
position: fixed;
width: 100%;
height: 100%;
top: 0;
background: rgba(0, 0, 0, .8);

z-index: 999;

.pure-ui-modal {
  background: white;
  border-radius: 1rem;
  height: 80%;
  width: 80%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .pure-ui-modal-header {
    border-bottom: solid 1px ${Colors.lightGray};
    max-height: 25%;
  }

  .pure-ui-modal-body {
    height: fit-content;
    max-height: 75%;
    overflow: scroll;
  }
}
`;
