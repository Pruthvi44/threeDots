import './FixNav.css';
import Fimg1 from '../Assets/images/fix2.png';
import Fimg2 from '../Assets/images/fix1.png';

function FixNav() {
    return ( 
        <>
        <div className='fix-icons'>
            <img src={Fimg1}/>
            <img src={Fimg2}/>
        </div>
        </>
     );
}

export default FixNav;