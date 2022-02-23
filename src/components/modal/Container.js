import Styles from 'styled-components';
import { Breakpoints, Colors } from '../assets/json';

export default Styles.article`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
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
    height: 10%;
  }

  .pure-ui-modal-body {
    height: 90%;
    overflow: scroll;
  }
}

@media(max-width: ${Breakpoints.extraLarge}px) {
  .pure-ui-modal {
    .pure-ui-modal-header {
      height: 15%;
    }
  
    .pure-ui-modal-body {
      height: 85%;
      overflow: scroll;
    }
  }
}

@media(max-width: ${Breakpoints.medium}px) {
  .pure-ui-modal {
    width: 90%;

    .pure-ui-modal-header {
      height: 15%;
    }
  
    .pure-ui-modal-body {
      height: 85%;
      overflow: scroll;
    }
  }
}
`;
