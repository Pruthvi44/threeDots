import './AboutIntroduce.css'
import image6 from '../../Assets/images/About_img/6.jpg';
function AboutIntroduce(){
    return(
        <>
        
        <img src={image6} alt="" id='AboutIntroduce-img'/>
        <div className='AboutIntroduce-mid-content'>

           

            <i class="fa fa-quote-left" aria-hidden="true" id='AboutIntroduce-mid-icon'></i>
            <h1>DESIGN IS NOT ABOUT HOW GOOD IT LOOKS. DESIGN MUST HAVE THE ABILITY TO WORK.</h1>

            <h3>In a world that’s increasingly cluttered, the role of powerful Design has become even more critical to grab the consumer’s eyeballs. Today, Design is not about how good it looks. Design must have the ability to work.</h3>

            <h4>Rakesh Raisinghani</h4>

            <h2>Managing Director</h2>
        </div>

        {/* <div className="frame">
            <img src={image9} alt="Image 3" className="image" />
        </div> */}

        </>
    )
}
export default AboutIntroduce;