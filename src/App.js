import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Hero></Hero>    
      <About></About>
      <Skills></Skills>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
