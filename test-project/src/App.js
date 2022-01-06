import { Message } from 'pure-ui';
import { getRandomArrayElement } from 'formatadores';

const types = [
  'warning',
  'error',
  'success',
];

const texts = [
  'This is a test',
  'I will randomly display a message every so often, so stay sharp',
  'Yet another test message',
];

const timeouts = [
  5000,
  3000,
  1000,
];

function App() {
  return (
    <div>
      <Message
        type={getRandomArrayElement(types)}
        text={getRandomArrayElement(texts)}
        timeout={getRandomArrayElement(timeouts)}
      />
    </div>
  );
}

export default App;
