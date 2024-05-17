import './Section2.css'
import image1 from '../../Assets/images/Hydarabad_img/2.png'
import image2 from '../../Assets/images/Hydarabad_img/3.png'
import image3 from '../../Assets/images/Hydarabad_img/4.png'
import image4 from '../../Assets/images/Hydarabad_img/5.png'
import image5 from '../../Assets/images/Hydarabad_img/6.png'
import image6 from '../../Assets/images/Hydarabad_img/7.png'
import image7 from '../../Assets/images/Hydarabad_img/7.png'
function Section2(){
    return(
        <>
        <div className='card'>

            <div className='Card-align'>
                <img src={image1} alt="" />
                <h2>Print Media Advertising</h2>
                <p>3 Dots Design Pvt. Ltd., one of the best advertising agencies in Hyderabad, has been mastering the art of print media with in-depth expertise in logo design, corporate & environmental branding, packaging design, creative print ads and outdoor advertising.</p>      
            </div>

            <div className='Card-align'>
                <img src={image2} alt="" />
                <h2>Strategy Planning</h2>
                <p>When advertising is backed by solid strategy & planning, there’s nothing that can stop your brand from being the best. 3 Dots Design Pvt. Ltd. provides comprehensive solutions in terms of research & analysis, strategy & planning, execution and evaluation even by being one of the best creative agencies in Hyderabad.</p>
            </div>

            <div className='Card-align'>
                <img src={image3} alt="" />
                <h2>Digital Marketing</h2>
                <p>With evolving markets today, brands need to stay relevant by catching up with the digital universe. 3 Dots Design Pvt. Ltd., being one of the best online advertising companies in Hyderabad, offers a spectrum of effective digital media solutions such as web design & development, SEO, SEM, social media advertising, content marketing, lead generation campaigns and ORM.</p>
            </div>

            <div className='Card-align'>
                <img src={image4} alt="" />
                <h2>Events & Exhibitions</h2>
                <p>All the events & exhibition organized by 3 Dots Design Pvt. Ltd. ensure that your brand gets maximum followers. With services such as stall design & venue branding, event planning & execution, and event promotions, 3 Dots Design Pvt. Ltd. makes the journey of your brand an ‘event’ful one.</p>
            </div>

            <div className='Card-align'>
                    <img src={image5} alt="" />
                    <h2>Media Planning</h2>
                    <p>3 Dots Design Pvt. Ltd. uses media planning & execution to diligently deliver success to your brand. It does so with the help of print media, radio, outdoor, and multiplex advertising. By using these mediums, 3 Dots Design Pvt. Ltd. not only optimizes the client’s ad spends but also optimizes their time.</p>
            </div>

            <div className='Card-align'>
                    <img src={image7} alt="" />
                    <h2>AV Production</h2>
                    <p>The adept team at 3 Dots Design Pvt. Ltd. puts your brand in the limelight at the drop of a hat. 3 Dots Design Pvt. Ltd. specializes in AV production solutions such as TV commercials, corporate films, radio jingles and brand theme songs. From conceptualization to scripting to production, 3 Dots Design Pvt. Ltd. works on it all from ‘Action’ to ‘Pack-up’!</p>  
            </div>
        </div>

        </>
    )
}
export default Section2;
