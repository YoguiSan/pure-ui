import { Colors } from '../../../assets/json/index';

const colors = {};

Object.keys(Colors).forEach((color) => {
  colors[color] = `
  background: ${Colors[color]};
  `;
});

export default colors;
