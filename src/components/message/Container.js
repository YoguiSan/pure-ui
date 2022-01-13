import styles from 'styled-components';

const green = '#37ba07';
const blue = '#49c9e3';
const yellow = '#f5bf42';
const red = '#bf3e1b';
const fatalRed = '#e34949';

const openAnimationFade = `
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;

const openAnimationOptions = {
  fade: openAnimationFade,
};

export default styles.div`
  ${({ openAnimation }) => (openAnimation
    ? `
    ${openAnimationOptions[openAnimation]}
    animation: ${openAnimation};`
    : '')}
  ${openAnimationFade}
  ${({ closeDelay }) => (closeDelay > 0
    ? (`animation-duration: ${closeDelay / 1000}s;`)
    : '')}
  background: black;
  border-radius: .2rem;
  color: white;
  font-family: 'Arial', sans-seriff;
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
      border: solid 2px ${blue};
      color: ${blue};
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
    background: ${blue};
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

    &.closing {
      transform: translateX(100%);
    }
  }

  &.left {
    left: 1rem;
  }

  &.center {
    left: 0;
    margin: auto;
    right: 0;

    &.closing {

    }
  }
}
`;
