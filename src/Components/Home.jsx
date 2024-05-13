import './Home.css';
import Slider from './Slider';
import SliderImg from './SliderImg';
import CreativeAgncy from './CreativeAgncy';
import Growth from './Growth';

function Home() {
    return ( 
        <>
        <div className='home-main'>
        <div> 
        <Slider>
        {SliderImg.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </Slider>

      </div>
      <CreativeAgncy/>
      
        <Growth/>
      
      </div>
      
        </>
     );
    
}

export default Home;