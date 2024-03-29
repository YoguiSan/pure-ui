import React from 'react';

import CookiesModal from '.';

import { CookiesModalDefaultProps } from './assets/json';

export default {
  title: 'Cookies Modal component',
  component: CookiesModal,
  argTypes: {
    /*
    icon: {
      control: {
        type: 'text',
      },
    },
    onClick: {
      control: {
        type: 'text',
      },
    },
    */
  },
};

function Template(args) {
  return (
    <CookiesModal
      {...args}
    />
  );
}

export const cookiesModal = Template.bind({});

cookiesModal.args = {
  ...CookiesModalDefaultProps,
  title: 'Have a cookie',
  description: 'We need cookies for basic site functionalities and to ensure your best experience. You can opt out of those that you don\' want.',
  readMoreText: 'For more details on how we use cookies, please read our cookie policy',
  readMoreUrl: 'https://localhost:696',
  savePreferences: (result) => console.log(result),
  acceptButtonText: 'Yes, I\'m a bit hungry',
  rejectButtonText: 'I don\'t like cookies',
  customizeButtonText: 'What flavors do you have?',
  confirmChoicesButtonText: 'I think it\'s good',
  customizeSettingsTitle: 'Cookie settings',
  fields: [{
    name: 'Mandatory cookies',
    key: 'mandatory',
    accepted: true,
    required: true,
  }, {
    name: 'Chocolate cookies',
    key: 'publicity',
  }],
  open: true,
};
