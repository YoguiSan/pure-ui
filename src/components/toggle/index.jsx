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
};

Toggle.defaultProps = ToggleDefaultProps;

export default Toggle;
