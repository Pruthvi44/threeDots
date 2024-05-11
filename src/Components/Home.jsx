import './Home.css';
import Header from './Header';
import Slider from './Slider';
import SliderImg from './SliderImg';

function Home() {
    return ( 
        <>
        <div> 
        <Slider>
        {SliderImg.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </Slider>
      </div>
      <div className='new'>
        <h1>dlnsid</h1>
      </div>
        </>
     );
    
}

export default Home;