import './AboutSneak.css'
import image9 from '../../Assets/images/About_img/9.jpg'
function AboutSneak(){
    return(
        <>
        <div className='AboutSneak-Container'>

            <img src={image9} alt="" id='AboutSneak-img'/>
            <h2>SNEAK PEEK INTO OUR OFFICE</h2>
            <hr />

            <iframe src="https://www.youtube.com/embed/HbeNI-tsr9g?si=415cmCycg-YA3lqn" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen id='AboutSneak-Frame'></iframe>

        </div>
        </>

    )
}
export default AboutSneak;