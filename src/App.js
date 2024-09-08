import './App.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Counter from './components/Counter';
import Services from './components/Services';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume';



function App() { 
  return (
      <div className="main">
        <>
        <Header />
        <HeroBanner /> 
        <Counter /> 
        <Services />
        <Work />
        <Skills />
        <Resume />
        <Contact />
        </> 
      </div>
  );
}

export default App;
