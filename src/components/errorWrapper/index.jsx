import React from 'react';
import { useErrorBoundary, withErrorBoundary } from 'react-use-error-boundary';
import { element } from 'prop-types';

import Container from './Container';

function ErrorWrapper({
  children,
}) {
  const [error, resetError] = useErrorBoundary((err) => console.error(err));

  if (error) {
    return (
      <Container className="pure-ui-error-message-container">
        <section id="pure-ui-error-message">
          {error}
          <button
            type="button"
            id="pure-ui-error-message-close-button"
            onClick={resetError}
          >
            Retry
          </button>
        </section>
      </Container>
    );
  }

  return (
    <Container>
      {children}
    </Container>
  );
}

ErrorWrapper.propTypes = {
  children: element.isRequired,
};

export default withErrorBoundary(ErrorWrapper);
