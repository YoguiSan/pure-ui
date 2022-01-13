import styles from 'styled-components';

export default styles.div`
  background: black;
  border-radius: .2rem;
  color: white;
  font-family: 'Arial', sans-seriff;
  font-size: 1rem;
  font-weight: bold;
  max-width: 10rem;
  padding: .6rem;
  position: absolute;
  top: 1rem;
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
    left: -1rem;
    position: absolute;
    top: -1rem;

    &.alert, &.warning {
    
    }
    
    &.error, &.fatal {
      border: solid 2px red;
      color: red;
    }
    
    &.success {
    
    }
    
    &.info {
    
    }
  }

  p {
    margin: 0;
  }

  &.alert, &.warning {
    
  }
  
  &.error, &.fatal {
    background: red;
  }
  
  &.success {
  
  }
  
  &.info {
  
  }

  &.top-right {
    right: 1rem;

    &.closing {
      transform: translateX(100%);
    }
  }

  &.top-left {
    left: 1rem;

    &.closing {

    }
  }

  &.top-center {
    left: 0;
    margin: auto;
    right: 0;

    &.closing {

    }
  }

  &.bottom-right {
    bottom: 1rem;
    right: 1rem;
    top: unset;

    &.closing {

    }
  }

  &.bottom-left {
    bottom: 1rem;
    left: 1rem;
    top: unset;

    &.closing {

    }
  }

  &.bottom-center {
    bottom: 1rem;
    left: 0;
    margin: auto;
    right: 0;
    top: unset;

    &.closing {

    }
  }
}
`;
