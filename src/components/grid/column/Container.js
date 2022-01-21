import Styles from 'styled-components';

import { breakpoints } from './assets/json';

const containerColumns = 12;
const widthPerColumn = 100 / containerColumns;

export default Styles.div`
display: flex;
flex-wrap: wrap;

${({ justifyContent = 'space-around' }) => `justify-content: ${justifyContent};`}

${({
    padding = 16,
    unit = 'px',
    paddingTop = padding,
    paddingBottom = padding,
    paddingLeft = padding,
    paddingRight = padding,
    condensed,
    narrow,
    noBoxSizing,
    allowOverflow,
  }) => `
  ${!allowOverflow && `
  * {
    max-width: 100%;
    max-height: 100%;
  }
  `}
  box-sizing: ${noBoxSizing ? 'content=box' : 'border-box'};
  padding: ${padding}${unit};
  ${
  !condensed
    ? (`
      ${paddingBottom ? `padding-bottom: ${paddingBottom}${unit};` : ''}
        ${paddingTop ? `padding-top: ${paddingTop}${unit};` : ''}
      `)
    : `
  padding-bottom: 0;
  padding-top: 0;
  `}
  ${
  !narrow
    ? (`
      ${paddingLeft ? `padding-left: ${paddingLeft}${unit};` : ''}
      ${paddingRight ? `padding-right: ${paddingRight}${unit};` : ''}
    `)
    : `
  padding-left: 0;
  padding-right: 0;
  `}
`}

@media (min-width: ${breakpoints.extraSmall}px) {
  ${({ extraSmall = 12 }) => `
  ${extraSmall ? `width: ${widthPerColumn * extraSmall}%;` : ''};
  `}
}

@media (min-width: ${breakpoints.small}px) {
  ${({ small }) => `
  ${small ? `width: ${widthPerColumn * small}%;` : ''};
  `}
}

@media (min-width: ${breakpoints.medium}px) {
  ${({ medium }) => `
  ${medium ? `width: ${widthPerColumn * medium}%;` : ''};
  `}
}

@media (min-width: ${breakpoints.large}px) {
  ${({ large }) => `
  ${large ? `width: ${widthPerColumn * large}%;` : ''};
  `}
}

@media (min-width: ${breakpoints.extraLarge}px) {
  ${({ extraLarge }) => `
  ${extraLarge ? `width: ${widthPerColumn * extraLarge}%;` : ''};
  `}
}
`;
