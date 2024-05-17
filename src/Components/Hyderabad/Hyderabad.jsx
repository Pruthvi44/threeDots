import './Hyderabad.css'
import image1 from '../../Assets/images/Hydarabad_img/1.jpg'
import Section1 from './Section1';
import Section2 from './Section2';
function Hyderabad(){
    return(
        <>

        <div className='Hyderabad-Container'>

            <img src={image1} alt="" id='Hyderabad-img'/>

            <h1>Creative, Advertising, Digital Marketing Agency in Hyderabad</h1>

            <h2>Your all-in-one solution for multiple communication needs in Hyderabad.</h2>

        </div>
        
        <div className='Hyderabad-Sections'>

                <Section1 />
                <Section2 />
        </div>

        

        </>
    )
}
export default Hyderabad;