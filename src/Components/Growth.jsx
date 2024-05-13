import './Growth.css';
import c1 from '../Assets/images/card1.png';
import c2 from '../Assets/images/card2.png';
import c3 from '../Assets/images/card3.png';
import c4 from '../Assets/images/card4.png';

function Growth() {
    return ( 
        <>
        <div className='grt-main'>
            <div className='grt-title'>YOUR GROWTH CATALYST</div>
            <div className='grt-info'>
                <p>3 Dots Design advertising agency in Pune offers a plethora of services from brand strategy and design to advertising and media solutions to empower your business. Discover how we can deliver disruptive solutions that exceed your expectations.</p>
            </div>
            <div className='grt-card-container'>
                <div className='card1'>
                <img src={c1}/>
                <h1>Brand Strategy</h1>
                <p>
                Brand strategy ensures that your brand is reflected correctly in the customer’s mind. As the digital marketing agency in Pune, we bring the right branding solutions for launching, rebranding or just building up your brand through careful planning and creative thinking.</p>
                </div>
                <div className='card1'>
                <img src={c1}/>
                <h1>Brand Design</h1>
                <p>If you want your brand to look good and have the right impact, you need brand design. At 3 Dots Design, we believe in creating great looking brands that not only stand out in a cluttered market but tell the brand story that matters to today’s customers.</p>
                </div>
                <div className='card1'>
                <img src={c1}/>
                <h1>Advertising</h1>
                <p>Being among the prominent advertising agencies in Pune, we are the perfect partner for creating campaigns to exceed your business goals. Through insight driven ideas and creative finesse, 3 Dots Design delivers result oriented campaigns across multiple platform and formats that connect customers to your business.</p>
                </div>
                <div className='card1'>
                <img src={c1}/>
                <h1>Digital Marketig</h1>
                <p>In the cluttered space of the online world, you need experts who know how to hook your customers. 3 Dots Design digital marketing agency in Pune helps you navigate this maze and ensure your message cuts through the noise and appears on your customers' screens.</p>
                </div>
            </div>

        </div>
        </>
     );
}

export default Growth;
