
import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Intro from './components/Intro';


const Container = styled.div`
color:black;
height:100vh;
overflow:hidden;
`
function App() {
  return (
    <Container>
      <Navbar />
      <Intro />
    </Container>


  );
}

export default App;
