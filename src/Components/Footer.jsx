import "./Footer.css";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <>
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
