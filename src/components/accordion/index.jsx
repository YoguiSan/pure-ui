import React, { useState } from 'react';
import { element, string } from 'prop-types';

import Container from './Container';
import Title from '../title';
import Button from '../button';
import Grid, { Row, Column } from '../grid';

import { AccordionDefaultProps } from './assets/json';
import { SpecialCharacters } from '../assets/json';

function Accordion({
  title,
  children,
}) {
  const [open, setOpen] = useState(false);

  return (
    <Container
      open={open}
    >
      <section
        role="button"
        className="pure-ui-accordion-header"
        onClick={() => setOpen(!open)}
      >
        <Grid condensed narrow>
          <Row condensed narrow>
            <Column condensed narrow extraSmall={11}>
              <Title
                type="h4"
                text={title}
              />
            </Column>
            <Column condensed narrow extraSmall={1}>
              <Button
                variant="text"
                text={SpecialCharacters.caret}
                className={`${open && 'open'}`}
                onClick={() => setOpen(!open)}
              />
            </Column>
          </Row>
        </Grid>
      </section>
      <section className="pure-ui-accordion-body">
        <Grid>
          {children}
        </Grid>
      </section>
    </Container>
  );
}

Accordion.defaultProps = AccordionDefaultProps;
Accordion.propTypes = {
  title: string.isRequired,
  children: element,
};

export default Accordion;
