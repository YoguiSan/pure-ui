import Styles from 'styled-components';

import { variants } from './json';

export default Styles.button`
${({
    padding = 16,
    unit = 'px',
    variant,
    animationTime = 0.3,
  }) => `
  padding: ${padding}${unit};
  transition: all ${animationTime}s;

${variants[variant]}
`}
`;
