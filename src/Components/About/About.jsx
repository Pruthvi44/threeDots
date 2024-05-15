import './About.css'
import image1 from '../../Assets/images/About_img/1.jpg'
import '@fontsource/roboto/300.css';
import Backdata from '../About/Backdata';
import BackData2 from './BackData2';
import AboutExtend from './AboutExtend';
import AboutProcess from './AboutProcess';
import AboutIntroduce from './AboutIntroduce';
import AboutIntroduce2 from './AboutIntroduce2';
import AboutIntroduce3 from './AboutIntroduce3';
import AboutTeam from './AboutTeam';
import AboutSneak from './AboutSneak';
function About(){
    return(
        <>
        


        <div className='About-main-content'>
            
        <img id='section1' src={image1} />
        
                    <div className='About_img-merge-data'>
                        <h1> Integrated <br /> Communications Specialist</h1>
                        <hr />
                        <h3> we are one of the rare Advertising Agencies promptly answering to the name of Integrated Communications Specialist.</h3>
                    </div>

                    <Backdata/>
                    <BackData2 />
                    <AboutExtend />
                    <AboutProcess />
                    <AboutIntroduce />
                    <AboutIntroduce2 />
                    <AboutIntroduce3 />
                    <AboutTeam />
                    <AboutSneak />
                   
        </div>
        </> 
    )

}
export default About;
