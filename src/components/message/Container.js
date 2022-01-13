import styles from 'styled-components';

export default styles.div`
  background: black;
  border-radius: .2rem;
  color: white;
  font-family: 'Arial, sans-seriff',
  font-size: 1rem;
  font-weight: bold;
  max-width: 10rem;
  padding: .6rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
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
}
`;
