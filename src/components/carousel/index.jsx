import React, { useState, useEffect } from 'react';
import {
  arrayOf, oneOfType, shape, string, number, func,
} from 'prop-types';

import Container from './Container';
import Image from '../figure';
import Button from '../button';
import Grid, { Row, Column } from '../grid';

import { CarouselDefaultProps } from './assets/json';
import { Breakpoints } from '../assets/json';

function Carousel({
  images,
  current,
  setCurrent,
  classes,
}) {
  const [active, setActive] = useState(0);
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

    return imageArray?.map(
      (image, index) => (
        typeof (image) === 'object'
          ? (
            <Image
              key={`image-${index + 1}`}
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
  };

  useEffect(() => {
    if (current !== null && current !== undefined) {
      setActive(current);
    }
  }, [current]);

  useEffect(() => setImageComponents(assembleComponents(images)), [active]);

  const phoneBreakpoint = `@media (max-width: ${Breakpoints.medium}px)`;

  const imageSelectorButtonStyles = {
    width: '1rem',
    height: '1rem',
    [phoneBreakpoint]: {
      width: '1rem',
      height: '1rem',
      'min-width': '1rem',
      'max-width': '1rem',
    },
  };

  const prevNextButtonStyles = {
    'font-weight': 'bold',
    [phoneBreakpoint]: {
      'font-size': '.5rem',
      'max-width': '2rem',
      width: '1.5rem',
      height: '1.5rem',
    },
  };

  return (
    <Container
      className={classes.join(' ')}
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
              padding={2}
              styles={prevNextButtonStyles}
              text="&#8592;"
              onClick={() => (
                active > 0 ? setActive(active - 1) : setActive(imageComponents.length - 1)
              )}
            />
          </Column>
          <Column extraSmall={10}>
            {
              images?.map((img, index) => (
                <Column
                  key={`button-column-${index + 1}`}
                  extraSmall={1}
                  narrow
                  condensed
                >
                  <Button
                    variant={index === active ? 'contained' : 'outlined'}
                    styles={imageSelectorButtonStyles}
                    onClick={
                      index !== active
                        ? () => (setCurrent && setCurrent(index)) || setActive(index)
                        : () => null
                    }
                    padding={0}
                  />
                </Column>
              ))
            }
          </Column>
          <Column extraSmall={1} condensed narrow>
            <Button
              variant="outlined"
              color="secondary"
              padding={2}
              styles={prevNextButtonStyles}
              text="&#8594;"
              onClick={() => (
                active < imageComponents.length - 1 ? setActive(active + 1) : setActive(0)
              )}
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
    oneOfType([
      string,
      shape({
        alt: string.isRequired,
        src: string.isRequired,
        caption: string,
      }),
    ]),
  ).isRequired,
  current: number,
  setCurrent: func,
  classes: arrayOf(string),
};

export default Carousel;
