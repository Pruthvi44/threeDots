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
import f1 from '../../Assets/images/footer/f1.png';
import f2 from '../../Assets/images/footer/f2.png';
import f3 from '../../Assets/images/footer/f3.png';


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

        <div className="footer-main">
        <div className="foot-titl">
          <h4>We invite you for a productive discussion.</h4>
          <h2>
            Let's build a long-term strategy for ‘creating continuous
            communication’
          </h2>
        </div>
        <div className="foot-icon">
          <table>
            <tr>
              <td>
                <div className="foot-row1">
                  <img src={f1} />
                  <h4>Head Office - Pune</h4>
                  <p>
                    Amalanand Bungalow, Plot No. 14 Survey No. 3023/14
                    Bhambhurda, Mangalwadi Society S B Road, Haveli, Pune,
                    Maharashtra 411016
                  </p>
                  <hr />
                </div>
              </td>
              <td>
                <div className="foot-row1">
                  <img src={f1} />
                  <h4>Branch Office - Hyderabad</h4>
                  <p>
                    Flat.no.202 Hyderguda, Old MLA Quarters Rd, Opp. Fabric Care
                    Dry Cleaners, Hyderabad, Telangana 500029
                  </p>
                  <hr />
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="foot-row1">
                  <img src={f2} />
                  <h4>General Enquiries</h4>
                  <p>pune@3dotsdesign.in</p>
                  <p>contact@3dotsdesign.in</p>
                  <hr />
                </div>
              </td>
              <td>
                <div className="foot-row1">
                  <img src={f2} />
                  <h4>General Enquiries</h4>
                  <p>hyderabad@3dotsdesign.in</p>
                  <p>contact@3dotsdesign.in</p>
                  <hr />
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="foot-row1">
                  <img src={f3} />
                  <h4>Business Phone</h4>
                  <p>+91 9511696411</p>
                  <p>+91 20 2566 5266</p>
                  
                </div>
              </td>
              <td>
                <div className="foot-row1">
                  <img src={f3} />
                  <h4>Business Phone</h4>
                  <p>+91 9511696411</p>
                  <p>+91 20 2566 5266</p>
                  
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      </div>
    </>
  );
}

export default ThreeA;
