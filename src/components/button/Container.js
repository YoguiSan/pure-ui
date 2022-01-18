import Styles from 'styled-components';

import { variants } from './json';

export default Styles.div`
> button {
  ${({
    padding = 16,
    unit = 'px',
    variant,
    animationTime = 0.3,
    color,
  }) => `
    padding: ${padding}${unit};
    transition: all ${animationTime}s;
  
  ${variants[variant]}
  `}
}
`;
