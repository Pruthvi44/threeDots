import "./Footer.css";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-last">
        <ul>
          <li><Link id="fid" to="/">Home</Link></li>
          <li><Link id="fid" to="/about">About</Link></li>
          <li>Solution</li>
          <li><Link id="fid" to="/work">Work</Link></li>
          <li><Link id="fid" to="/hydrabad">Hydrabad</Link></li>
          <li><Link id="fid" to="/">Pune</Link></li>
          <li>Careers</li>
          <li><Link id="fid" to="/blog">Blog</Link></li>
          <li><Link id="fid" to="/contact">Contact</Link></li>
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
