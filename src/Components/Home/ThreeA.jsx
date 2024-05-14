import "./ThreeA.css";
import a1 from '../../Assets/images/Homeimg/ad1.png';
import a2 from '../../Assets/images/Homeimg/ad2.png';
import a3 from '../../Assets/images/Homeimg/ad3.png';
import a4 from '../../Assets/images/Homeimg/ad4.png';
import a5 from '../../Assets/images/Homeimg/ad5.png';
import a6 from '../../Assets/images/Homeimg/ad6.png';
import a7 from '../../Assets/images/Homeimg/ad7.png';
import a8 from '../../Assets/images/Homeimg/ad8.png';
import a9 from '../../Assets/images/Homeimg/ad9.png';
import a10 from '../../Assets/images/Homeimg/ad10.png';


function ThreeA() {
  return (
    <>
      <div className="threeA-main">
        <div className="titl">
          <h3>ASSETS. APPRECIATIONS. ASSOCIATIONS.</h3>
          <p>
            our clients are our greatest assets. Sometimes, even a single word
            of appreciation from them is enough for us to take our creativity
            notches above. Watch our clients speak their hearts out about our
            association
          </p>
          <hr/>
        </div>
        <div className="a-utube">
        <iframe src="https://www.youtube.com/embed/kksH3ihjPHM" title="Mr. Amit Paranjape from Paranjape Schemes sharing his experiences of working with 3 Dots Design!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="ad-logo">
            <marquee>
            <img src={a1} alt="" />
            <img src={a2} alt="" />
            <img src={a3} alt="" />
            <img src={a4} alt="" />
            <img src={a5} alt="" />
            <img src={a6} alt="" />
            <img src={a7} alt="" />
            <img src={a8} alt="" />
            <img src={a9} alt="" />
            <img src={a10} alt="" />
            </marquee>
        </div>
      </div>
    </>
  );
}

export default ThreeA;
