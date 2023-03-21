import Styles from 'styled-components';

const blinkingAnimation = `
@keyframes blinking {
  0% {
    opacity: .1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: .1;
  }
}
`;

const animations = [
  blinkingAnimation,
];

export default Styles.div`
${animations?.map((animation) => animation)}

height: 100%;
width: 100%;
position: fixed;
bottom: 0;
top: 0;
left: 0;
right: 0;
opacity: .8;
z-index: 999;
${({ modalBackground }) => (
    (modalBackground !== false
    && modalBackground
      ? `background: ${modalBackground};`
      : 'background: #333;'))
      || ''
}

> .loader-icon {
  ${({ iconBackground }) => iconBackground && `background: ${iconBackground};`}

  border-radius: .5rem;
  padding: 1rem;

  position: absolute;
  margin: auto;
  height: fit-content;
  width: fit-content;
  bottom: 0;
  top: 0;
  min-height: 3rem;
  min-width: 3rem;
  left: 0;
  right: 0;

  > img {
    min-width: 15%;
    max-width: 100%;
    &.blinking {
      animation: blinking;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }
}
`;
