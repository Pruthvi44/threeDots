import './Home.css';
import Slider from './Slider';
import SliderImg from './SliderImg'
import CreativeAgncy from './CreativeAgncy';
import Growth from './Growth';
import Achievment from './Achievment';
import Work from './Work';
import Recent from './Recent';
import ThreeA from './ThreeA';
import Demo from './Demo';

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

        <Achievment/>

        <Work/>

        <Recent/>

        <ThreeA/>


        
      
      </div>
      
        </>
     );
    
}

export default Home;