import "./EnquiryForm.css";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";


function EnquiryForm() {

    const [myNeed, setMyNeed] = useState("djojd");

    const handleChange = (event) => {
      setMyNeed(event.target.value)
    }

  return (
    <>
      <div className="main-form">
        <div className="textarea">
          <p>FILL OUT THE FORM AND WE'LL BE IN TOUCH SOON!</p>
          <h2>LET'S GET STARTED</h2>
        </div>
        <div className="start-form">
          <form>
            <input
              className="i1"
              type="text"
              name="name"
              required
              placeholder="Name"
            />
            <input
              className="i1"
              type="text"
              name="name"
              required
              placeholder="Email"
            />
            <input
              className="i1"
              type="text"
              name="name"
              required
              placeholder="Company name"
            />
            <input
              className="editarea"
              type="text"
              name="name"
              required
              placeholder="Enter your 10 digit number"
            />
            <button id="otp-btn">SEND OTP</button>

            <select  className="s1" value={myNeed} onChange={handleChange} >
        <option value="PRINT MEDIA ADVERTISING">PRINT MEDIA ADVERTISING</option>
        <option value="DIGITAL MARKETING">DIGITAL MARKETING</option>
        <option value="BRAND STRATEGY PLANNING">BRAND STRATEGY PLANNING</option>
        <option value="EVENT EXIBITION">EVENT EXIBITION</option>
        <option value="MEDIA PLANNING">MEDIA PLANNING</option>
        <option value="AV PRODUCTION">AV PRODUCTION</option>
        <option value="OTHER">OTHER</option>
      </select>

            <input
              className="i1"
              type="text"
              name="name"
              required
              placeholder="Enter Verifivation Code"
            />


<button id="send-btn">SEND MESSAGE</button>

          </form>
        </div>
        
      </div>
      <div className="end">
      <a href=""><h2>CLICK HERE FOR ONLINE PAYMENTS</h2></a>
      </div>
     
    </>
  );
}

export default EnquiryForm;
