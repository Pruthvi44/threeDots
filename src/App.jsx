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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
            {/* <Route path="hydrabad" element={ <Hydrabad/> }/> */}
            <Route path="work" element={<MainWork/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="contact" element= {<Contact/>} />
          </Routes>
      <div className='footer'>
        <Footer/>
      </div>
    </>
  );
}

export default App;
