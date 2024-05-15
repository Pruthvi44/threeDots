import "./Award.css";
import awardimg from "../../Assets/images/Accolades/award.jpg";
import awardimg1 from "../../Assets/images/Accolades/award1.jpg";

function Awards() {
  return (
    <>
      <div className="award-main">
        <div className="award-inner">
          <p>
            WE ARE PROUD TO HAVE WON SOME PRESTIGIOUS AWARDS AND WE LOOK FORWARD
            TO SCALE NEW HEIGHTS IN THE FUTURE.
          </p>
          <h2>ACCOLADES AND ACHIEVEMENTS</h2>
          <hr />
        </div>
        <div className="award-full-container">
          <div className="award-container">
            <img src={awardimg} alt="Award" className="award-image" />
            <div className="award-overlay">
              <div className="award-text">
                <b>Category :</b> Printed Illustration Client : Life 360 Degree
              </div>
            </div>
          </div>

          <div className="award-container">
            <img src={awardimg1} alt="Award" className="award-image" />
            <div className="award-overlay">
              <div className="award-text">
                <b>Category :</b> Corporate Identity Client : Pushpa
                International School
              </div>
            </div>
          </div>
          <div className="award-container">
            <img src={awardimg} alt="Award" className="award-image" />
            <div className="award-overlay">
              <div className="award-text">
                <b>Category :</b>Single Press Advt.(English Only) Client : 7
                Plumeria Drive
              </div>
            </div>
          </div>
          <div className="award-container">
            <img src={awardimg1} alt="Award" className="award-image" />
            <div className="award-overlay">
              <div className="award-text">
                <b>Category :</b>Copywriting Client : Happycity
              </div>
            </div>
          </div>
          <div className="award-container">
            <img src={awardimg1} alt="Award" className="award-image" />
            <div className="award-overlay">
              <div className="award-text">
                <b>Category :</b>Editorial Art Client : Happycity
              </div>
            </div>
          </div>
          <div className="award-container">
            <img src={awardimg} alt="Award" className="award-image" />
            <div className="award-overlay">
              <div className="award-text">
                <b>Category :</b>Outdoor Client : Water’s Square
              </div>
            </div>
          </div>
          <div className="award-container">
            <img src={awardimg1} alt="Award" className="award-image" />
            <div className="award-overlay">
              <div className="award-text">
                <b>Category :</b>Radio Client : Happycity
              </div>
            </div>
          </div>
          <div className="award-container">
            <img src={awardimg} alt="Award" className="award-image" />
            <div className="award-overlay">
              <div className="award-text">
                <b>Category :</b>Typography Client : Water’s Square
              </div>
            </div>
          </div>
          <div className="award-container">
            <img src={awardimg1} alt="Award" className="award-image" />
            <div className="award-overlay">
              <div className="award-text">
                <b>Category :</b>Single Press Advt. Client : Happycity
              </div>
            </div>
          </div>
          <div className="award-container">
            <img src={awardimg} alt="Award" className="award-image" />
            <div className="award-overlay">
              <div className="award-text">
                <b>Category :</b> Sakal Property Expo Client : Namrata Group
              </div>
            </div>
          </div>
          <div className="award-container">
            <img src={awardimg} alt="Award" className="award-image" />
            <div className="award-overlay">
              <div className="award-text">
                <b>Category :</b> Times Of Festivals Contest Client : Life 360
                degree
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
