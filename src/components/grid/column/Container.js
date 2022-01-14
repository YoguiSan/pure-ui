import Styles from 'styled-components';

const widths = {
  extraSmall: 320,
  small: 481,
  medium: 769,
  large: 1025,
  extraLarge: 1201,
};

const containerColumns = 12;
const widthPerColumn = 100 / containerColumns;

export default Styles.div`
${({ justifyContent }) => `justify-content: ${justifyContent};`}

@media all and(max-width: ${widths.extraLarge}px) {
  ${({ extraLarge }) => `
  width: ${widthPerColumn * extraLarge}px;
  `}
}

@media all and(max-width: ${widths.large}px) {
  ${({ large }) => `
  width: ${widthPerColumn * large}px;
  `}
}

@media all and(max-width: ${widths.medium}px) {
  ${({ medium }) => `
  width: ${widthPerColumn * medium}px;
  `}
}

@media all and(max-width: ${widths.small}px) {
  ${({ small }) => `
  width: ${widthPerColumn * small}px;
  `}
}

@media all and(max-width: ${widths.extraSmall}px) {
  ${({ extraSmall }) => `
  width: ${widthPerColumn * extraSmall}px;
  `}
}
`;
