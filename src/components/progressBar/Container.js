import Styles from 'styled-components';

import { Fonts, Colors } from '../assets/json';

export default Styles.div`
&, * {
  box-sizing: border-box;
  border-radius: .5rem;
}

border: solid 1px black;
height: fit-content;
position: relative;
${({ padding = 2, unit = 'px' }) => `padding: ${padding}${unit};`}

width: 100%;

> div.pure-ui-progress-bar {
  ${({
    progress,
    type = 'info',
    transitionDuration = 1000,
    styles,
  }) => `
  ${Object.keys(styles).map((prop) => `${prop}: ${styles[prop]};`)}

  background: ${Colors[type]};
  display: flex;
  height: fit-content;
  min-height: 1rem;
  transition: all ${transitionDuration / 1000}s;
  width: ${progress}%;

  margin: auto 0;

  > span {
    ${Fonts.default}
    color: white;
    font-size: .8rem;
    display: block;
    padding: 0.1rem;
    margin: auto;
    white-space: nowrap;
  }
  `}
}
`;
