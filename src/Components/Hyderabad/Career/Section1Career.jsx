import './Section1Career.css'
import image2 from '../../../Assets/images/Career_img/output-onlinepngtools.png'
function Section1Career(){
    return(
        <>
        <div className='Career-bottom-content'>
                <h1>CAREER OPPORTUNITIES</h1>

                <h2>DROP A MAIL, IT COULD RESHAPE YOUR CAREER</h2>
                <hr />

                <h3>If you feel that you have it in you what it takes to be with 3 Dots, don't hesitate to initiate a dialogue by sharing your work and CV with us. We are growing and have many ambitious plans on the card. Your credentials may just fit the bill and fetch you an opportunity to join a vibrant team.</h3>

                <img src={image2} alt="" id='Career-icon'/>

                <h4>EMAIL YOUR DETAILS & PORTFOLIO</h4>
                <h5>hr@3dotsdesign.in</h5>
            </div>
        </>
    )
}
export default Section1Career;