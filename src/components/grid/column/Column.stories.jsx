import React from 'react';

import Column from '.';

export default {
  title: 'Column component',
  component: Column,
  argTypes: {},
};

function Template(args) {
  return (
    <Column
      {...args}
    >
      <h1>This is a column</h1>
    </Column>
  );
}

export const column = Template.bind({});

column.args = {
  extraSmall: 12,
  small: 10,
  medium: 8,
  large: 6,
  extraLarge: 4,
};
