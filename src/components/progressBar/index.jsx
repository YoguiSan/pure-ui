import React from 'react';
import { number, oneOf, string } from 'prop-types';

import Container from './Container';

import { ProgressBarDefaultProps, types, variants } from './assets/json';

function ProgressBar({
  variant,
  type,
  progress,
  text,
  transitionDuration = 1000,
}) {
  return (
    <Container
      variant={variant}
      type={type}
      progress={progress < 100 ? progress : 100}
      transitionDuration={transitionDuration}
    >
      <div className="pure-ui-progress-bar">
        {
        text && (
          <span>{text}</span>
        )
      }

      </div>
    </Container>
  );
}

ProgressBar.defaultProps = ProgressBarDefaultProps;
ProgressBar.propTypes = {
  progress: number.isRequired,
  variant: oneOf(variants),
  type: oneOf(types),
  text: string,
  transitionDuration: number,
};

export default ProgressBar;
