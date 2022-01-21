import Styles from 'styled-components';

import { Fonts } from '../assets/json';

export default Styles.figure`
overflow: hidden;
position: relative;
width: ${({ width }) => (width ? `${width}%` : '100%')};

img {
  margin: auto;
  transition: all 1s;
  vertical-align: middle;
  width: 100%;
  &:hover {
    opacity: .6;
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
