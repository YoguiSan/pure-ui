import Styles from 'styled-components';

export default Styles.div`
  box-shadow: -2px 2px 1rem #ccc;
  height: fit-content;

  ${({
    padding,
    unit = 'px',
  }) => `
  padding: ${padding}${unit};
  `}

  figure {
    margin: auto;
  }
`;
