import styles from 'styled-components';
import { Fonts } from '../assets/json';

import { Colors } from './assets/json';

const {
  info: lightBlue,
  success: green,
  warning: yellow,
  error: red,
  fatal: fatalRed,
} = Colors;

const openAnimationFade = `
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;

const closeAnimationFade = `
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
`;

const openAnimationOptions = {
  fadeIn: openAnimationFade,
};

const closeAnimationOptions = {
  fadeOut: closeAnimationFade,
};

export default styles.div`
  ${openAnimationFade}
  ${closeAnimationFade}

  ${({ openAnimation, openDelay = 200 }) => (openAnimation
    ? `
    ${openAnimationOptions[openAnimation]}
    animation: ${openAnimation};
    animation-duration: ${openDelay / 1000}s;`
    : '')}

  ${({
    closeAnimation,
    openDelay = 200,
    closeDelay = openDelay,
  }) => (closeAnimation
    ? `
    ${closeAnimationOptions[closeAnimation]}
    &.closing {
      animation: ${closeAnimation};
      animation-duration: ${closeDelay / 1000}s;
    }`
    : '')}

  ${({ closeDelay }) => (closeDelay > 0
    ? (`animation-duration: ${closeDelay / 1000}s;`)
    : '')}
  background: black;
  border-radius: .2rem;
  color: white;
  ${Fonts.default}
  font-size: 1rem;
  font-weight: bold;
  height: fit-content;
  max-width: 10rem;
  padding: .6rem;
  position: absolute;
  ${({ closeDelay }) => (closeDelay > 0
    ? (`transition: all ${closeDelay / 1000}s;`)
    : '')}
  width: fit-content;

  > .close-button {
    background: white;
    border: solid 2px white;
    border-radius: 1rem;
    color: black;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    position: absolute;
    right: -1rem;
    top: -1rem;

    &.alert, &.warning {
      border: solid 2px ${yellow};
      color: ${yellow};
    }
    
    &.error {
      border: solid 2px ${red};
      color: ${red};
    }

    &.fatal {
      border: solid 2px ${fatalRed};
      color: ${fatalRed};
    }
    
    &.success {
      border: solid 2px ${green};
      color: ${green};
    }
    
    &.info {
      border: solid 2px ${lightBlue};
      color: ${lightBlue};
    }
  }

  p {
    margin: 0;
  }

  &.alert, &.warning {
    background: ${yellow};
  }
  
  &.error {
    background: ${red};
  }

  &.fatal {
    background: ${fatalRed};
  }
  
  &.success {
    background: ${green};
  }
  
  &.info {
    background: ${lightBlue};
  }

  &.top {
    bottom: unset;
    top: 1rem;

    > .close-button {
      bottom: -1rem;
      top: unset;
    }
  }

  &.middle {
    bottom: 0;
    margin: auto;
    top: 0;
  }

  &.bottom {
    bottom: 1rem;
    top: unset;
  }

  &.right {
    right: 1rem;

    > .close-button {
      left: -1rem;
      right: unset;
    }
  }

  &.left {
    left: 1rem;
  }

  &.center {
    left: 0;
    margin: auto;
    right: 0;
  }
}
`;
