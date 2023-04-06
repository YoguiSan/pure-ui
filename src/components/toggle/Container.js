import Styles from 'styled-components';

import { Colors, Fonts } from '../assets/json';

export default Styles.div`
border-radius: 1rem;
position: relative;
width: fit-content;
display: flex;

${Fonts.default}

.pure-ui-toggle-container {
  cursor: pointer;
  transition: all .2s;

  border-radius: 10rem;

  position: relative;
  width: 3rem;
  height: 1.5rem;
  margin-left: .5rem;

  ${({
    checked,
    checkedBackground = Colors.success,
    uncheckedBackground = Colors.error,
    disabled,
  }) => `${checked
    ? (`background: ${checkedBackground};`)
    : (`background: ${uncheckedBackground};`)}
    ${disabled ? `background: ${Colors.gray};` : ''}
  }`}

  .pure-ui-toggle-switch {
    ${({ disabled }) => (disabled ? 'opacity: .7;' : '')}
    background: white;
    transition: all .2s;

    border-radius: 10rem;
    bottom: 0;

    width: 1rem;
    height: 1rem;

    display: block;
    position: absolute;
    margin: auto;
    top: 0;

  ${({ checked }) => `${checked
    ? 'right: 5%;'
    : 'left: 5%;'
  }`}
  }
}

input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.000001;
  z-index: 1;
}
`;
