import './App.css';
import Home from './Components/Home/Home'
import Slider from './Components/Home/Slider';
import Header from './Components/Header';

function App() {
  return (
    <>
    <div className='header'>
        <Header/>
        </div>
      <Home/>
    </>
  );
}

export default App;
