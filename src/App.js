import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Hero></Hero>    
      <About></About>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
