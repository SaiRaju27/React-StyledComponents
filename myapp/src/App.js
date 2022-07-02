
import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Features from './components/Features'


const Container = styled.div`
  height:100vh;
  overflow:hidden;
`
const IntroShape = styled.div`
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 50% 100%);
  background-color:blue;
  z-index:-1;
`
const FeatureShape = styled.div`
  width:100%;
  height:100%;
  position:relative;
  top:0;
  left:0;
  clip-path: polygon(0 0%, 55% 0%, 33% 100%,  55% 100%);
  background-color:blue;
  `
  

function App() {
  return (
    <>
    <Container>
      <Navbar />
      <Intro />
      <IntroShape />
    </Container>
    <Container>
<Features>
  </Features>
  <FeatureShape/>
    </Container>
    </>


  );
}

export default App;
