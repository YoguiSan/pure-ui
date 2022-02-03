import React from 'react';
import {
  bool, element, func, string,
  arrayOf,
} from 'prop-types';

import Grid, { Row, Column } from '../grid';
import Title from '../title';
import Button from '../button';

import Container from './Container';

import { ModalDefaultProps } from './assets/json';
import { SpecialCharacters } from '../assets/json';

function Modal({
  title = ModalDefaultProps.title,
  children = ModalDefaultProps.children,
  open = ModalDefaultProps.open,
  setOpen = ModalDefaultProps.setOpen,
  classes = ModalDefaultProps.classes,
}) {
  const close = () => {
    setOpen(false);
  };

  if (!open) return '';

  return (
    <Container
      classes={classes}
    >
      <section
        className="pure-ui-modal"
      >
        <div
          className="pure-ui-modal-header"
        >
          <Grid>
            <Row condensed narrow>
              <Column
                narrow
                extraSmall={11}
              >
                <Title
                  type="subtitle"
                  text={title}
                />
              </Column>
              <Column
                condensed
                narrow
                extraSmall={1}
              >
                <Button
                  onClick={() => close()}
                  text={SpecialCharacters.close}
                />
              </Column>
            </Row>
          </Grid>
        </div>
        <div
          className="pure-ui-modal-body"
        >
          {children}
        </div>
      </section>
    </Container>
  );
}

Modal.defaultProps = ModalDefaultProps;

Modal.propTypes = {
  title: string,
  children: element.isRequired,
  open: bool,
  setOpen: func.isRequired,
  classes: arrayOf(string),
};

export default Modal;
