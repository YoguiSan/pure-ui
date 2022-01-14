import Styles from 'styled-components';

export default Styles.div`
display: flex;
flex-wrap: wrap;
width: 100%;

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
  }) => `
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
`}`;
