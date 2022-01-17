import Styles from 'styled-components';

export default Styles.div`
display: flex;
flex-wrap: wrap;
width: 100%;

${({
    condensed,
    narrow,
    noBoxSizing,
    overflow = 'scroll',
    padding = 16,
    paddingBottom = padding,
    paddingLeft = padding,
    paddingRight = padding,
    paddingTop = padding,
    unit = 'px',
  }) => `
  box-sizing: ${noBoxSizing ? 'content=box' : 'border-box'};
  overflow: ${overflow}
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
