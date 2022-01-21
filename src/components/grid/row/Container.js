import Styles from 'styled-components';

export default Styles.div`
display: flex;
flex-wrap: wrap;
width: 100%;

${({
    condensed,
    narrow,
    noBoxSizing,
    overflow = 'visible',
    padding = 16,
    paddingBottom = padding,
    paddingLeft = padding,
    paddingRight = padding,
    paddingTop = padding,
    unit = 'px',
    allowOverflow,
  }) => `
  ${!allowOverflow && `
  * {
    max-width: 100%;
    max-height: 100%;
  }
  `}
  box-sizing: ${noBoxSizing ? 'content=box' : 'border-box'};
  overflow: ${overflow};
  padding: ${padding}${unit};

  * {
    max-height: 100%;
    max-width: 100%;
  }

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
