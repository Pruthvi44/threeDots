import './App.css';
import Home from './Components/Home/Home'
import Slider from './Components/Home/Slider';
import Header from './Components/Header';
import About from '../src/Components/About/About'
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <div className='header'>
        <Header/>
        </div>
      {/* <Home/> */}

      <About />
      
      {/* <Footer/> */}
      
    </>
  );
}

export default App;
