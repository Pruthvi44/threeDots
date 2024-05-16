import './MainWork.css';
import backimg from '../../Assets/images/MainWorkimg/workbackimg.jpg';
import Work from '../Home/Work';

function MainWork() {
    return ( 
        <>
        <div className="main-work">
            <div className="worktitl">
            <img src={backimg}/>
            <div className="img-text">
            <h1>Our Work</h1>
            <p>Client Portfolio</p>
            </div>
            </div>
            <Work/>
        </div>
        </>
     );
}

export default MainWork;