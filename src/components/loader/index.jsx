import React from 'react';
import { getRandomArrayElement } from 'formatadores';
import {
  bool,
  element,
  oneOf,
  string,
  arrayOf,
} from 'prop-types';

import Container from './Container';

import { icons } from './assets/json';

function Loader({
  open,
  spinning = true,
  blinking = false,
  icon,
  random = false,
  modalBackground,
  iconBackground,
  classes,
}) {
  let chosenIcon;

  if (!icon) {
    if (random) {
      const randomIcon = icons[getRandomArrayElement(Object.keys(icons))];

      chosenIcon = (
        <img
          alt="loader"
          src={randomIcon}
          className={`
            ${classes?.map((className) => `${className} `)}${
            blinking && 'blinking'
          }`}
        />
      );
    } else {
      chosenIcon = icons.spinningLine;
    }
  } else {
    chosenIcon = Object.keys(icons).includes(icon)
      ? (
        <img
          alt="loader"
          src={icons[icon]}
          className={`
            ${classes?.map((className) => `${className} `)}${
            blinking && 'blinking'
          }`}
        />
      )
      : (
        <img
          alt="loader"
          src={icon}
          className={`
          ${classes?.map((className) => `${className} `)}${
            spinning && 'spinning'}${
            blinking && 'blinking'
          }`}
        />
      );
  }

  if (!open) return '';

  return (
    <Container
      modalBackground={modalBackground}
      iconBackground={iconBackground}
    >
      <div className="loader-icon">
        {chosenIcon}
      </div>
    </Container>
  );
}

Loader.defaultProps = {
  open: false,
  spinning: true,
  blinking: false,
  icon: undefined,
  random: false,
  modalBackground: undefined,
  iconBackground: undefined,
  classes: [],
};

Loader.propTypes = {
  open: bool,
  spinning: bool,
  blinking: bool,
  icon: oneOf(Object.keys(icons)) || element,
  random: bool,
  modalBackground: string || oneOf([false]),
  iconBackground: string,
  classes: arrayOf(string),
};

export default Loader;
