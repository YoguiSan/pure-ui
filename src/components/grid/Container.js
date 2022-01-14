import Styles from 'styled-components';

export default Styles.div`
&, & * {
  box-sizing: border-box;
}

display: flex;
margin: 0;
padding: 1rem;
width: 100%;

&.narrow {
  padding: 0;
}
`;
