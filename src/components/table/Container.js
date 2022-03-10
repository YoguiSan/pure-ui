import Styles from 'styled-components';
import {
  Colors,
  Fonts,
  Styles as CSSStyles,
} from '../assets/json';

export default Styles.div`
width: 100%;
${({ background = 'none' }) => `background: ${background};`}
${CSSStyles.boxShadow()}

${Fonts.default}

th, td {
  padding: 1rem;
}

thead, tbody {
  border-collapse: separate;
  border-spacing: 0;
}

thead {
  ${({ headerBackground = 'none' }) => `background: ${headerBackground};`}
  ${({ headerColor = 'black' }) => `color: ${headerColor};`}
  border-bottom: solid 1px black;
}

tbody {
  tr {
  ${({
    fontColor = 'black',
    striped,
    stripeColor = Colors.lightGray,
  }) => `
    color: ${fontColor};
    ${
    striped
      ? `&:nth-child(odd) {
        background: ${stripeColor};
      }`
      : ''
  }`}
  
    td {
  
    }
  }
}
`;
