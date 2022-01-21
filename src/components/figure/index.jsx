import React from 'react';
import { number, string } from 'prop-types';
import Container from './Container';

function Image({
  width,
  alt,
  src,
  caption,
  captionBackground = 'black',
  captionColor = 'white',
}) {
  return (
    <Container
      width={width}
      captionBackground={captionBackground}
      captionColor={captionColor}
    >
      <img alt={alt} src={src} />
      {caption && (
        <figcaption>{caption}</figcaption>
      )}
    </Container>
  );
}

Image.defaultProps = {
  width: null,
  caption: null,
  captionBackground: 'black',
  captionColor: 'white',
};

Image.propTypes = {
  width: number,
  alt: string.isRequired,
  caption: string,
  src: string.isRequired,
  captionBackground: string,
  captionColor: string,
};

export default Image;
