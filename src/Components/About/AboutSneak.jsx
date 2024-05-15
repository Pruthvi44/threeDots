import './AboutSneak.css'
import image9 from '../../Assets/images/About_img/9.jpg'
function AboutSneak(){
    return(
        <>
        <div className='AboutSneak-Container'>

            <img src={image9} alt="" id='AboutSneak-img'/>
            <h2>3 DOTS DESIGN PVT. LTD. SQUAD</h2>
            <h1>04</h1><hr />

            <iframe width="560" height="315" src="https://www.youtube.com/embed/HbeNI-tsr9g?si=415cmCycg-YA3lqn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
        </>

    )
}
export default AboutSneak;