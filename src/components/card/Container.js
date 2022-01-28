import Styles from 'styled-components';

export default Styles.div`
  box-shadow: -2px 2px 1rem #ccc;
  height: fit-content;

  ${({
    padding,
    unit = 'px',
    styles,
  }) => `
  padding: ${padding}${unit};
  ${Object.keys(styles).map((prop) => `${prop}: ${styles[prop]};`)}
  `}

  figure {
    margin: auto;
  }
`;
