import './App.css';
import Home from './Components/Home/Home'
import Header from './Components/Header';
import About from '../src/Components/About/About'
import Footer from './Components/Footer';
import FixNav from './Components/FixNav';
import MainWork from './Components/Work/MainWork'
import Accolades from './Components/Accolades/Accolades';
import Contact from './Components/Contact/Contact';
import Hydrabad from './Components/Hydrabad';
function App() {
  return (
    <>
    <div className='header'>
        <Header/>
        </div>
        <FixNav/>

        <Hydrabad/>

        {/* <Contact/> */}

        {/* <Accolades/> */}
       {/* <MainWork/> */}

      {/* <Home/> */}

      {/* <About /> */}
      <div className='footer'>
        <Footer/>
      </div>
    </>
  );
}

export default App;
