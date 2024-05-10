import './Home.css';
import Header from './Header';
import Slider from './Slider';
import SliderImg from './SliderImg';

function Home() {
    return ( 
        <>
        <Header/>
        {/* <Slider>
        {SliderImg.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </Slider> */}
        </>
     );
    
}

export default Home;