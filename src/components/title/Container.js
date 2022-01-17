import { createElement } from 'react';
import styled from 'styled-components';

import styles from './json';

const Container = styled(({
  tag,
  children,
  ...props
}) => createElement(tag, props, children))`
${({ tag }) => styles[tag]}
font-family: 'Arial', sans-serif;
width: 100%;
`;

export default Container;
