import './Career.css'
import image1 from '../../../Assets/images/Career_img/careers.jpg'
import Section1Career from './Section1Career';
function Career(){
    return(
        <>
        <div className='Career-Container'>

            <img src={image1} alt="" id='Career-img'/>
            
            <div className='Career-mid-content'>
                <h1>JOIN THE GROWTH WAGON</h1>
            </div>

            <Section1Career />
        </div>
        </>
    )
}
export default Career;