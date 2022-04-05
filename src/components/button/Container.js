import Styles from 'styled-components';

import {
  variants,
  colors,
} from './assets/json';

export default Styles.div`
> button {
  ${({
    padding = 16,
    unit = 'px',
    variant,
    animationTime = 0.3,
    color = 'primary',
    fontColor = (variant === 'contained' ? 'white' : 'black'),
    styles,
  }) => `
    border: solid 2px ${fontColor};
    border-radius: .3rem;
    color: ${fontColor};
    cursor: pointer;
    font-size: 1rem;
    padding: ${padding}${unit};
    transition: all ${animationTime}s;
  
    ${color && (
    Object.keys(colors).includes(color)
      ? colors[color]
      : `background: ${color};`
  )}

    ${variant && variants[variant]}

    ${Object.keys(styles).map((property) => (
    typeof (styles[property]) === 'object'
      ? (`${property} {
          ${Object.keys(styles[property]).map((subProperty) => `${subProperty}: ${styles[property][subProperty]};`).join('\n')}
        }`)
      : `${property}: ${styles[property]};`)).join('\n')}
  `}

}
`;
