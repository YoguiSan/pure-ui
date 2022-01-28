import React, { useEffect, useState } from 'react';
import {
  number, oneOf, string, objectOf,
} from 'prop-types';

import Container from './Container';

import { ProgressBarDefaultProps, types, variants } from './assets/json';

function ProgressBar({
  variant = ProgressBarDefaultProps.variant,
  type = ProgressBarDefaultProps.type,
  progress = ProgressBarDefaultProps.progress,
  text = ProgressBarDefaultProps.text,
  transitionDuration = ProgressBarDefaultProps.transitionDuration,
  styles = ProgressBarDefaultProps.styles,
}) {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => setCurrentProgress(progress), [progress]);

  return (
    <Container
      variant={variant}
      type={type}
      progress={currentProgress < 100 ? currentProgress : 100}
      transitionDuration={transitionDuration}
      styles={styles}
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
  styles: objectOf(),
};

export default ProgressBar;
