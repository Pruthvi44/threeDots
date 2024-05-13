import './CreativeAgncy.css';
import pencilimg from '../../Assets/images/Homeimg/pencil.jpg';
function CreativeAgncy () {
    return ( 
        <>
            <div className='creative'>
                <img src={pencilimg} />
                <h2>3 Dots Design Pvt. Ltd. - Creative Advertising Agency</h2>

                <p className='first'>With a crystal-clear vision to be amongst the best advertising agencies in Pune,
                    3 Dots Design Pvt. Ltd is a one-stop destination for a multitude of communication
                    solutions in Pune and Hyderabad: Advertising. Design. Digital.</p>
                <p className='second'>During these times when the communications business is highly fragmented,
                    we are one of the rare Advertising Agencies who have remained as Integrated
                    Communications Specialists.</p>
                <p className='second'>3 Dots Design Pvt. Ltd. provides contemporary and
                    comprehensive solutions in Pune & Hyderabad for every possible brand communications
                    mandate.</p>
                <p className='second'>Being media neutral not only helps us optimize every Advertising
                    Rupee that the clients spend but also enables us to add more agility to the
                    clients' MarCom process.</p>
                <button>ABOUT COMPANY</button>


            </div>
        </>
     );
}
 
export default CreativeAgncy ;