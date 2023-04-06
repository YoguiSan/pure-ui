import React, { useState } from 'react';

import Modal from '.';
import Title from '../title';
import Grid, { Row, Column } from '../grid';
import Button from '../button';

import { ModalDefaultProps } from './assets/json';

import Merchant from './assets/img/merchant.jpg';
import Image from '../figure';

export default {
  title: 'Modal component',
  component: Modal,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },

  },
};

function Template(args) {
  const [open, setOpen] = useState(false);

  return (
    <Grid>
      <Modal
        {...args}
        open={open}
        setOpen={setOpen}
      >
        <Row>
          <Column extraSmall={12}>
            <Image
              alt="Resident Evil 4 merchant"
              src={Merchant}
            />
          </Column>
        </Row>
      </Modal>
      <Row>
        <Column extraSmall={12}>
          <Title
            type="title"
            text="Modal demonstration"
          />
        </Column>
      </Row>
      <Row>
        <Column extraSmall={12}>
          <Button
            text={`Click to ${open ? 'close' : 'open'} the modal`}
            variant="outlined"
            onClick={() => setOpen(!open)}
          />
        </Column>
      </Row>
    </Grid>
  );
}

export const modal = Template.bind({});

modal.args = {
  ...ModalDefaultProps,
  title: 'Weeeeeeelcome!',
};
