import "./Footer.css";
import f1 from "../Assets/images/footer/f1.png";
import f2 from "../Assets/images/footer/f2.png";
import f3 from "../Assets/images/footer/f3.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <>
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
      <div className="footer-last">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Solution</li>
          <li>Work</li>
          <li>Hydrabad</li>
          <li>Pune</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>T & C</li>
          <li>Refund Policy</li>
        </ul>
      </div>
      <div className="icons">
            <ul>
            <li><FacebookIcon fontSize="x12"/></li>
            <li><InstagramIcon fontSize="x12"/></li>
            <li><TwitterIcon fontSize="x12"/></li>
            <li><LinkedInIcon fontSize="x12"/></li>
            </ul>
        </div>
    </>
  );
}

export default Footer;
