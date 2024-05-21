import './Section1.css'
import image4 from '../../Assets/images/Digial_img/4.png'
function Section1(){
    return(
        <>

        <div className='Digital-section-mainContent'>
        <h1>Welcome to 3 Dots Digital</h1>
        <h2>The Digital Marketing Agency of Pune</h2>


        <div className='Digital-section-midContent'>
            <h1>GROW YOUR BUSINESS WITH OUR SEO AGENCY</h1>

            <p>3 Dots Designs doesn’t just believe in keeping up with the latest technology but also evolving in mindset. It’s our secret to becoming a top digital marketing agency in Pune. Not just that, we have grown to become the neo-gen digital marketing agency to connect with audiences captivated by current trends.</p>

            <p>This compelling necessity gave birth to 3 Dots Digital with its roots in 3 Dots Design. Garnering eight years of experience in the digital marketing industry, along with the 3 Dots Design expertise, 3 Dots Digital offers a concrete array of services. They are digital marketing, web design and development.</p>

            <img src={image4} id='Digital-Section-Img'/>

            <ul>
                <li>Involve</li>
                <li>Evolve</li>
                <li>Become</li>
            </ul>

            <button>Know More</button>
        </div>

        </div>
        </>
    )
}
export default Section1;