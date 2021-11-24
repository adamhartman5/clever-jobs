import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: rgb(17, 18, 26);
  width: 100%;
  height: 100%;
`
