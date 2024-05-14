import './App.css';
import Home from './Components/Home';
import Slider from './Components/Slider';
import Header from './Components/Header';
import About from '../src/Components/About/About'
import AboutExtend from './Components/About/AboutExtend';
function App() {
  return (
    <>
    <div className='header'>
        <Header/>
        </div>
      {/* <Home/> */}

      <About />
    </>
  );
}

export default App;
