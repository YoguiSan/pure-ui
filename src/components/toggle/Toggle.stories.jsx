import React, { useState } from 'react';

import Toggle from '.';

import { ToggleDefaultProps } from './assets/json';

export default {
  title: 'Toggle component',
  component: Toggle,
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
    },
  },
};

function Template(args) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <p>
        Checked:
        {' '}
        {isChecked}
      </p>
      <Toggle
        {...args}
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
    </>
  );
}

export const toggle = Template.bind({});

toggle.args = {
  ...ToggleDefaultProps,
  text: 'Another generic toggle component, do you like it?',
};
