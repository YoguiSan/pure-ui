import Styles from 'styled-components';

import { Fonts } from '../assets/json';

export default Styles.figure`
overflow: hidden;
position: relative;
height: ${({ height, unit = 'px' }) => (height ? `${height}${unit}` : '100%')};
width: ${({ width, unit = 'px' }) => (width ? `${width}${unit}` : '100%')};
${({ styles }) => Object.keys(styles).map((param) => `${param}: ${styles[param]};`)}

${({ backgroundImage }) => (
    backgroundImage
      ? `
        background: url(${backgroundImage}) no-repeat;
        background-size: 100%;
      `
      : ''
  )
}

img {
  margin: auto;
  max-width: 100%;
  position: relative;
  transition: all 1s;
  vertical-align: middle;
  width: 100%;

  &:hover {
    max-width: 110%;
    position: relative;
    opacity: ${({ backgroundImage }) => (backgroundImage ? 0.8 : 0.6)};
    width: 110%;
  }
}

figcaption {
  background: ${({ captionBackground }) => captionBackground};
  bottom: 0;
  color: ${({ captionColor }) => captionColor};

  ${Fonts.default}

  opacity: .8;
  padding: .4rem;
  position: absolute;
  width: 100%;
}
`;
