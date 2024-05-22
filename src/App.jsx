import './App.css';
import Home from './Components/Home/Home'
import Header from './Components/Header';
import About from '../src/Components/About/About';
import Footer from './Components/Footer';
import FixNav from './Components/FixNav';
import Accolades from './Components/Accolades/Accolades';
import MainWork from './Components/Work/MainWork';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Hyderabad from './Components/Hyderabad/Hyderabad';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Digital from './Components/Digital/Digital';


import Career from './Components/Career/Career';
import Vatashi from './Components/Digital/SliderCards/Vatashi';
import ExerEnergy from './Components/Digital/SliderCards/ExerEnergy';
import TechDogs from './Components/Digital/SliderCards/TechDogs';
import NapTrap from './Components/Digital/SliderCards/NapTrap';
import BookStation from './Components/Digital/SliderCards/BookStation'
import PrivacyP from './PrivacyP';
function App() {
  return (
    <>
    <div className='header'>
        <Header/>
        </div>
        <FixNav/>

        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/accolades" element={<Accolades/>}/>
            <Route path="/hydrabad" element={ <Hyderabad/> }/>
            <Route path="/work" element={<MainWork/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element= {<Contact/>} />
            <Route path="/career" element= {<Career />} />
            <Route path="/digital" element={<Digital />} />
            <Route path="/vatashi" element={<Vatashi />} />
            <Route path="/exerEnergy" element={<ExerEnergy />} />
            <Route path="/techdogs" element={<TechDogs />} />
            <Route path="/napTrap" element={<NapTrap />} />
            <Route path="/bookStation" element={<BookStation />} />
            <Route path="/privacy policy" element={<PrivacyP />} />
          </Routes>
          <div className='footer'>
        <Footer/>
      </div>
    </>
  );
}

export default App;
