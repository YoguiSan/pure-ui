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

${({ fullHeight }) => `
${
  fullHeight
    ? 'height: 100%'
    : 'height: fit-content'
}`};

table {
  width: 100%;

  th, td {
    padding: 1rem;
    text-align: left;
  }
  
  thead, tbody {
    border-collapse: separate;
    border-spacing: 0;
  }
  
  thead {
    ${({ headerBackground = 'none' }) => `background: ${headerBackground};`}
    ${({ headerColor = 'black' }) => `color: ${headerColor};`}
    ${({
      headerBordered,
      headerBorderColor = 'black',
    }) => `
    ${
      headerBordered
        ? `
          border: solid 1px ${headerBorderColor};
        `
        : ''
    }
    `}
  }
  
  tbody {
    tr {
      ${({
        fontColor = 'black',
        striped,
        stripeBackground = Colors.lightGray,
        stripeColor = 'black',
      }) => `
        color: ${fontColor};
        ${
        striped
          ? `&:nth-child(odd) {
            color: ${stripeColor};
            background: ${stripeBackground};
          }`
          : ''
      }`}
      td {
        ${({ bordered, borderColor = 'black' }) => `
          ${
            bordered
              ? `border: solid 1px ${borderColor};`
              : ''
          }
        `}
      }
    }
  }
}
`;
