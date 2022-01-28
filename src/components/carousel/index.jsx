import React, { useState, useEffect } from 'react';
import {
  arrayOf, oneOfType, shape, string, number, func,
  objectOf,
} from 'prop-types';

import Container from './Container';
import Image from '../figure';
import Button from '../button';
import Grid, { Row, Column } from '../grid';

import { CarouselDefaultProps } from './assets/json';

function Carousel({
  images = CarouselDefaultProps.images,
  current = CarouselDefaultProps.current,
  setCurrent = CarouselDefaultProps.setCurrent,
  styles: customStyles = CarouselDefaultProps.styles,
}) {
  const [active, setActive] = useState(2);
  const [imageComponents, setImageComponents] = useState([]);

  const assembleComponents = (imageArray) => {
    const nonSelectedStyle = {
      position: 'absolute',
      opacity: 0.4,
    };

    const styles = {
      selected: {
        position: 'relative',
      },
      lower: {
        ...nonSelectedStyle,
        left: '-100%',
      },
      higher: {
        ...nonSelectedStyle,
        right: '-100%',
      },
    };

    const components = imageArray.map(
      (image, index) => (
        typeof (image) === 'object'
          ? (
            <Image
              alt={image.alt}
              src={image.src}
              caption={image.caption}
              styles={
                (index === active
                && styles.selected)
                || (
                  (index < active && styles.lower)
                  || (index > active && styles.higher)
                )
              }
            />
          ) : (
            <Image
              src={image}
              styles={
                (index === active
                && styles.selected)
                || (
                  (index < active && styles.lower)
                  || (index > active && styles.higher)
                )
              }
            />
          )
      ),
    );

    return components;
  };

  useEffect(() => {
    if (current !== null && current !== undefined) {
      setActive(current);
    }
  }, [current]);

  useEffect(() => setImageComponents(assembleComponents(images)), [active]);

  return (
    <Container
      styles={customStyles}
    >
      <Grid>
        <Row>
          <Column extraSmall={12}>
            {imageComponents}
          </Column>
        </Row>
        <Row>
          <Column extraSmall={1} condensed narrow>
            <Button
              variant="outlined"
              color="primary"
            />
          </Column>
          <Column extraSmall={10}>
            {
              images.map((img, index) => (
                <Column
                  extraSmall={1}
                  narrow
                  condensed
                >
                  <Button
                    variant={index === active ? 'contained' : 'outlined'}
                    onClick={
                      index !== active
                        ? () => (setCurrent && setCurrent(index)) || setActive(index)
                        : () => null
                    }
                  />
                </Column>
              ))
            }
          </Column>
          <Column extraSmall={1} condensed narrow>
            <Button
              variant="outlined"
              color="secondary"
            />
          </Column>
        </Row>
      </Grid>
    </Container>
  );
}

Carousel.defaultProps = CarouselDefaultProps;
Carousel.propTypes = {
  images: arrayOf(
    oneOfType(
      string
      || shape({
        alt: string.isRequired,
        src: string.isRequired,
        caption: string,
      }),
    ),
  ).isRequired,
  current: number,
  setCurrent: func,
  styles: objectOf(),
};

export default Carousel;
