import './Accolades.css';
import A1 from '../../Assets/images/Accolades/back1.jpg';
import Awards from './Awards';

function Accolades() {
    return ( 
        <>
        <div className="acc-main">
            <div className='acc-back'>
                <img src= {A1}/>
                <div className="text-over">
                    <h4>Happiness is essential.</h4>
                    <p>And sometimes it</p>
                    <p>brings a lot of</p>
                    <p>confidence.</p>
                </div>
            </div>
            <Awards/>
        </div>
        </>
     );
}

export default Accolades;