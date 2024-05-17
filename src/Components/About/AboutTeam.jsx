import './AboutTeam.css'
import logo from '../../Assets/images/About_img/3dotsEmp.gif'
function AboutTeam(){
        
    return(
        <>
        <div className='About-Team-mid-data'>
            <h1>04</h1><hr />
            <h2>3 DOTS DESIGN PVT. LTD. SQUAD</h2>
            <img src={logo} alt="" id='About-Team-ig'/>

            <div className='About-Team-mid-content'>
            <h3>Over the years we have built teams of seasoned professionals in Pune & Hyderabad that have the ability to create clutter breaking Advertising for clients.</h3>

            <h4>The 3 Dots Design Pvt. Ltd. squad has the ability to empower seamless 360 communication solutions for all our clients, across categories. The team takes pride in partnering with the clients in their challenges and glory.</h4>

            <h2>The leadership at 3 Dots Design Pvt. Ltd. is a composite of professionals, each with an average experience of 15 years.</h2>
            </div>
        </div>

        

        
        </>
    )
}
export default AboutTeam;