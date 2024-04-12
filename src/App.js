import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Hero></Hero>    
      <About></About>
      <Skills></Skills>
      <Cards></Cards>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
