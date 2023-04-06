import Styles from 'styled-components';

import { Breakpoints } from '../assets/json';

export default Styles.div`
height: 100%;
width: 100%;
position: relative;

overflow: hidden;

> figure {
  height: fit-content;
  width: fit-content;
  margin: auto;
  min-height: 50%;
  min-width: 50%;
  max-height: 90%;
  max-width: 90%;
}

@media (min-width: ${Breakpoints.extraSmall}px) {
  figure {
    min-width: 80%;
  }
}

@media (min-width: ${Breakpoints.small}px) {
  
}

@media (min-width: ${Breakpoints.medium}px) {
  
}

@media (min-width: ${Breakpoints.large}px) {
  
}

@media (min-width: ${Breakpoints.extraLarge}px) {
  
}
`;
