import "./Section3.css";
import image9 from "../../Assets/images/Digial_img/9.svg";
import image17 from "../../Assets/images/Digial_img/17.svg";
import image10 from "../../Assets/images/Digial_img/10.png";
function Section3() {
  return (
    <>
      <div className="Digital-Section3-mainContent">
        <div className="Digital-Section3-midContent">
          <img src={image17} alt="" id="Section3-circle-img" />
          <img src={image9} alt="" id="Section3-main-img" />
        </div>

        <h1>Experts in Online Marketing</h1>

        <h2>DIGITAL MARKETING</h2>

        <h3>
          The digital space is at the heart of 3 Dots Digital. It’s also where
          the today’s generation likes to be. With a population of 4.8 billion
          residents on social media, 3 Dots Digital Marketing Agency in Pune has
          the experience to guide your message to the right audience and ears.
        </h3>

        <h4>
          The 3 Dots Digital repertoire of Digital Marketing and Branding
          solutions has all the tools and services a client needs to propel
          their business forward in the digital space. Here’s a full list of our
          Digital Marketing Services:
        </h4>

        <ul>
          <li>Social Media Marketing</li>
          <li>Email Marketing</li>
          <li>Search Engine Marketing</li>
          <li>Search Engine optimization</li>
          <li>Content Marketing</li>
          <li>Business Profile Manager</li>
        </ul>

        <button>Explore More</button>

        <div className="Digital-Section3-BottomContent">
          <img src={image17} alt="" id="circle-img" />
          <img src={image10} alt="" id="main-img" />

          <h1>WEBSITE DESIGN & DEVELOPMENT</h1>

          <h2>
            Any creative UI/UX design aims to create a seamless and unique
            experience for its users while ensuring a great visual appeal. 3
            Dots Digital designs and develops compelling websites that garner
            better long term results. Our expertise helps you attract more
            leads, control bounce rates and improve your revenue stream.
          </h2>

          <ul>
            <li>Website Design</li>
            <li>Website Development</li>
            <li>E-Commerce Platform</li>
            <li>Content Development</li>
            <li>Search Engine optimization</li>
          </ul>

          <button>Explore More</button>
        </div>
      </div>
    </>
  );
}
export default Section3;
