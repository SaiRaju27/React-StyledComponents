
import './App.css';
import styled,{css} from 'styled-components';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Features from './components/Features'
import Service from './components/Service';
import Team from './components/Team';
import Clients from './components/Clients';
import Price from './components/Price';
import Contact from './components/Contact'
import Footer from './components/Footer';

const Container = styled.div`
  height:100vh;
  overflow:hidden;
  position:relative;
`
const Shape=css`
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  z-index:-1;
`

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 50% 100%);
  background-color:blue;
  z-index:-1;
`
const FeatureShape = styled.div`
  // width:100%;
  // height:100%;
  // position:absolute;
  // top:0;
  // left:0;
  // z-index:-1;
    ${Shape}
    clip-path: polygon(50% 50%, 100% 0%, 100% 100%, 100% 100%);
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
    <Container>
      <Service></Service>
    </Container>
    <Container>
      <Team/>
    </Container>

      <Clients></Clients>
      <Container><Price></Price></Container>
      <Container>
        <Contact/>
      </Container>

        <Footer></Footer>
     
      
  
    </>


  );
}

export default App;
