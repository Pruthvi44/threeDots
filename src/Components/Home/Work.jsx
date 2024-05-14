import "./Work.css";
import w1 from '../../Assets/images/Homeimg/coll-1.jpg';
import w2 from '../../Assets/images/Homeimg/coll-2.webp';
import w3 from '../../Assets/images/Homeimg/coll-3.jpg';
import w4 from '../../Assets/images/Homeimg/coll-3.webp';
import w5 from '../../Assets/images/Homeimg/coll-4.jpg';
import w6 from '../../Assets/images/Homeimg/coll-5.png';
import w7 from '../../Assets/images/Homeimg/coll-6.jpg';
import w8 from '../../Assets/images/Homeimg/coll-7.png';
import w9 from '../../Assets/images/Homeimg/coll-8.jpeg';
import w10 from '../../Assets/images/Homeimg/coll-9.png';
import w11 from '../../Assets/images/Homeimg/coll-10.jpg';
import w12 from '../../Assets/images/Homeimg/coll-11.jpg';
import w13 from '../../Assets/images/Homeimg/coll-12.avif';
import w14 from '../../Assets/images/Homeimg/coll-13.jpg';


function Work() {
  return (
    <>
      <div className="work-main">
        <div className="work-info">
          <p>BEST OF OUR</p>
          <h2>RECENT WORK</h2><hr/>
          <div className="work-inner">
          <p>
            Being one of the best advertising agencies in Pune, we pride
            ourselves in giving only the best to our clients. Working closely
            with them, we become as invested in their success as they are. The
            result? Fantastic campaigns that gets results. Here’s a bird’s eye
            view of the successes that made us one of the top digital marketing
            agencies in Pune.
          </p>
          </div>
        </div>
        <div className="work-img-cont">
        <div className="container">
          <img src={w1} alt="Avatar" className="image" />
          <div className="overlay">
            <hr/>
            <div className="text">Paranjape Schemes Construction Ltd.</div>
          </div>
        </div>
        <div className="container">
          <img src={w2} alt="Avatar" className="image" />
          <div className="overlay">
          <hr/>
            <div style={{left:"100px"}} className="text">Mangalam Landmarks</div>
          </div>
        </div>
        <div className="container">
          <img src={w4} alt="Avatar" className="image" />
          <div className="overlay">
          <hr/>
            <div style={{left:"70px"}} className="text">rgs reality</div>
          </div>
        </div>
        </div>

        <div className="work-img-cont">
        <div className="container">
          <img src={w8} alt="Avatar" className="image" />
          <div className="overlay">
          <hr/>
            <div style={{left:"70px"}} className="text">exer energy</div>
          </div>
        </div>
        <div className="container">
          <img src={w6} alt="Avatar" className="image" />
          <div className="overlay">
          <hr/>
            <div style={{left:"50px"}} className="text">naptrap</div>
          </div>
        </div>
        <div className="container">
          <img src={w5} alt="Avatar" className="image" />
          <div className="overlay">
          <hr/>
            <div style={{left:"60px"}} className="text">happy nest</div>
          </div>
        </div>
        </div>

        <div className="work-img-cont">
        <div className="container">
          <img src={w7} alt="Avatar" className="image" />
          <div className="overlay">
          <hr/>
            <div style={{left:"80px"}} className="text">windsor county</div>
          </div>
        </div>
        <div className="container">
          <img src={w8} alt="Avatar" className="image" />
          <div className="overlay">
          <hr/>
            <div style={{left:"125px"}} className="text">pushpa international school</div>
          </div>
        </div>
        </div>

        <div className="work-img-cont">
        <div className="container">
          <img src={w9} alt="Avatar" className="image" />
          <div className="overlay">
          <hr/>
            <div style={{left:"60px"}} className="text">thinkitive</div>
          </div>
        </div>
        </div>

        
        <div className="new">
        <div className="big-container">
          <img src={w11} alt="Avatar" className="big-image" />
          <div className="big-overlay">
          <hr/>
            <div className="big-text">life 360</div>
          </div>
        </div>
        <div className="ntwo">
        <div className="big-container" style={{left:"355px"}}>
          <img src={w12} alt="Avatar" className="big-image" />
          <div className="big-overlay">
          <hr/>
            <div style={{left:"100px"}} className="big-text">7 plumeria drive</div>
          </div>
        </div>
        </div>
        </div>

        <div className="work-img-cont">
        <div className="container">
          <img src={w10} alt="Avatar" className="image" />
          <div className="overlay">
          <hr/>
            <div style={{left:"80px"}} className="text">grande view 7</div>
          </div>
        </div>
        </div>

        <div className="work-img-cont-last">
        <div className="container">
          <img src={w13} alt="Avatar" className="image" />
          <div className="overlay">
          <hr/>
            <div style={{left:"80px"}} className="text">water's square</div>
          </div>
        </div>
        </div>

        <div className="work-img-cont">
        <div className="container" style={{left:"34%"}}>
          <img src={w14} alt="Avatar" className="image" />
          <div className="overlay">
          <hr/>
            <div style={{left:"90px"}} className="text">femcity hospitals</div>
          </div>
        </div>
        </div>

        <button id="work-btn">VIEW MORE WORK</button>

      </div>
    </>
  );
}

export default Work;
