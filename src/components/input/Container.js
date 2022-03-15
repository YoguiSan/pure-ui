import Styles from 'styled-components';

import { Colors, Fonts } from '../assets/json';

const classPrefix = 'pure-ui-input';

export default Styles.div`
${Fonts.default}
${({ fullWidth }) => (fullWidth ? `&, & label, & input, & textarea {
  width: 100%;
}
` : '')}
display: flex;
flex-direction: column;
position: relative;

label {
  margin-bottom: .5rem;
  padding-left: .5rem;
}

&.${classPrefix}-regular input ,
&.${classPrefix}-regular textarea {
  &,
  &:active,
  &:focus,
  &:focus-within,
  &:target {
    border-radius: .5rem;
    border: solid 1px ${Colors.gray};
  }
}

&.${classPrefix}-underlined input,
&.${classPrefix}-underlined textarea,
&.${classPrefix}-underlined select {
  &,
  &:active,
  &:focus,
  &:focus-within,
  &:target {
    border: none;
    border-bottom: solid 1px ${Colors.gray};
  }
}

input, textarea, select {
  padding: .5rem;

  &, &:focus {
    border: none;
  }
}

p.pure-ui-input-error-message {
  color: ${Colors.error};
  margin-top: 0.5rem;
  font-size: .8rem;
}
`;
