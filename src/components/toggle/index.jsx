import React, { useEffect, useState } from 'react';
import {
  arrayOf, bool, func, shape, string,
} from 'prop-types';

import Container from './Container';

import { ToggleDefaultProps } from './assets/json';

function Toggle({
  checked = ToggleDefaultProps.checked,
  text = ToggleDefaultProps.text,
  styles = ToggleDefaultProps.styles,
  onChange = ToggleDefaultProps.onChange,
  key = ToggleDefaultProps.key,
  checkedBackground = ToggleDefaultProps.checkedBackground,
  uncheckedBackground = ToggleDefaultProps.uncheckedBackground,
  disabled = ToggleDefaultProps.disabled,
}) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <Container
      styles={styles}
      checked={isChecked}
      checkedBackground={checkedBackground}
      uncheckedBackground={uncheckedBackground}
      key={key}
      disabled={disabled}
    >
      <span>{text}</span>
      <label
        htmlFor={key}
        className="pure-ui-toggle-container"
      >
        <span className="pure-ui-toggle-switch" />
        <input
          id={key}
          type="checkbox"
          checked={!!isChecked}
          onClick={
            (event) => (onChange
              ? onChange(event)
              : setIsChecked(!isChecked))
          }
          disabled={disabled}
        />
      </label>
    </Container>
  );
}

Toggle.propTypes = {
  checked: bool,
  styles: arrayOf(shape()),
  text: string,
  onChange: func,
  key: string.isRequired,
  checkedBackground: string,
  uncheckedBackground: string,
  disabled: bool,
};

Toggle.defaultProps = ToggleDefaultProps;

export default Toggle;
