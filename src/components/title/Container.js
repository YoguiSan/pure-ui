import { createElement } from 'react';
import styled from 'styled-components';

import { styles } from './assets/json';

import { Fonts } from '../assets/json';

const Container = styled(({
  tag,
  children,
  ...props
}) => createElement(tag, props, children))`
display: flex;
${({ tag }) => styles && styles[tag] && styles[tag]}
${({ lineHeight, unit = 'px' }) => `line-height: ${lineHeight}${unit};`}

${Fonts.default}

width: 100%;
`;

export default Container;
