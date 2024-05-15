import "./Contact.css";
import Location from "./Location";
import im1 from "../../Assets/images/footer/f1.png";
import im2 from "../../Assets/images/footer/f3.png";
import im3 from "../../Assets/images/footer/f2.png";
import EnquiryForm from "./EnquiryForm";

function Contact() {
  return (
    <>
      <div className="main-con">
        <div className="contact-title">
          <p>WE WOULD LOVE TO WORK WITH YOU</p>
          <h1>We invite you for a productive discussion</h1>
          <p>
            If you want to take your brand to the next level, simply let us
            know. We will be more than happy to serve you.
          </p>
        </div>

        <div className="office">
          <div className="card">
            <img src={im1} />
            <h5>HEAD OFFICE - PUNE</h5>
            <p>
              Amalanand Bungalow, Plot No. 14 Survey No. 3023/14 Bhambhurda,
              Mangalwadi Society S B Road, Haveli, Pune, Maharashtra 411016
            </p>
          </div>

          <div style={{ backgroundColor: "black" }} className="card">
            <img src={im2} />
            <h5>LET'S TALK</h5>
            <p>Mobile: +91 9511696411</p>
            <p>Phone: +91 20 2566 5266</p>
          </div>

          <div className="card">
            <img src={im1} />
            <h5>BRANCH OFFICE - HYDERABAD</h5>
            <p>
            Flat.no.202 Hyderguda, Old MLA Quarters Rd, Opp. 
            Fabric Care Dry Cleaners, Hyderabad, Telangana 500029
            </p>
          </div>

          <div style={{ backgroundColor: "black" }} className="card">
            <img src={im2} />
            <h5>LET'S TALK</h5>
            <p>Mobile: +91 9511696411</p>
            <p>Phone: +91 20 2566 5266</p>
          </div>

          <div style={{ backgroundColor: "black" }} className="card">
            <img src={im3} />
            <h5>EMAIL US</h5>
            <p>pune@3dotsdesign.in</p>
            <p>contact@3dotsdesign.in</p>
          </div>

          <div className="card">
            <img src={im1} />
            <h5>WORKING HOURS</h5>
            <p>Mon to Friday - 10 AM to 7 PM</p>
          </div>

          <div style={{ backgroundColor: "black" }} className="card">
            <img src={im3} />
            <h5>EMAIL US</h5>
            <p>hydrabad@3dotsdesign.in</p>
            <p>contact@3dotsdesign.in</p>
          </div>

          <div className="card">
            <img src={im1} />
            <h5>WORKING HOURS</h5>
            <p>Mon to Friday - 10 AM to 7 PM</p>
          </div>
        </div>
      </div>
      <Location/>
      <EnquiryForm/>
    </>
  );
}

export default Contact;
