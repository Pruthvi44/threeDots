import "./Hydrabad.css";
import h1 from "../Assets/images/Hback.jpg";
import L1 from "../Assets/images/hl1.png";
import L2 from "../Assets/images/hl2.png";
import L3 from "../Assets/images/hl3.png";
import L4 from "../Assets/images/hl4.png";
import L5 from "../Assets/images/hl5.png";
import L6 from "../Assets/images/hl6.png";

function Hydrabad() {
  return (
    <>
      <div className="hydrabad-main">
        <div className="hydra-back">
          <img src={h1} />
          <div className="h-titl">
            <h2>Creative,</h2>
            <h2>Advertising, Digital</h2>
            <h2>Marketing Agency</h2>
            <h2>in Hyderabad</h2>
            <p>
              Your all-in-one solution for multiple communication needs in
              Hyderabad.
            </p>
          </div>
        </div>
        <div className="brand">
          <p>3 DOTS HYDERABAD</p>
          <h3>360° BRANDING SOLUTIONS</h3>
          <h4>
            A gamut of creative yet innovative media solutions for your brand.
          </h4>
          <hr />
          <p>
            Standing out from the crowd of mediocrity when every brand is
            focusing on creativity, 3 Dots Design Pvt. Ltd. is one of the top
            advertising agencies in Hyderabad that will hit the bull’s eye of
            your business needs with integrated marketing and branding
            solutions. 3 Dots Design is a full-service advertising agency in
            Hyderabad that addresses your every communication mandates. At 3
            Dots Design Pvt. Ltd., we offer the best marketing communications,
            branding solutions and creative designs that set your brand apart.
            At 3 Dots Design Pvt. Ltd., we can call it our superpower to
            optimize every advertising rupee of our clients by being media
            neutral. It enables us to be more agile and streamline the marketing
            communications process with ease.
          </p>
          <button id="hy-btn">VIEW OUR WORK</button>
        </div>
      </div>
      <div className="hydrabad-cards">
          <div className="c1">
            <img src={L1} />
            <h3>Print Media Advertising</h3>
            <p>
              3 Dots Design Pvt. Ltd., one of the best advertising agencies in
              Hyderabad, has been mastering the art of print media with in-depth
              expertise in logo design, corporate & environmental branding,
              packaging design, creative print ads and outdoor advertising.
            </p>
          </div>
          <div className="c1">
            <img src={L1} />
            <h3>Strategy Planning</h3>
            <p>
              When advertising is backed by solid strategy & planning, there’s
              nothing that can stop your brand from being the best. 3 Dots
              Design Pvt. Ltd. provides comprehensive solutions in terms of
              research & analysis, strategy & planning, execution and evaluation
              even by being one of the best creative agencies in Hyderabad.
            </p>
          </div>
          <div className="c1">
            <img src={L1} />
            <h3>Digital Marketing</h3>
            <p>
              With evolving markets today, brands need to stay relevant by
              catching up with the digital universe. 3 Dots Design Pvt. Ltd.,
              being one of the best online advertising companies in Hyderabad,
              offers a spectrum of effective digital media solutions such as web
              design & development, SEO, SEM, social media advertising, content
              marketing, lead generation campaigns and ORM.
            </p>
          </div>
          <div className="c1">
            <img src={L1} />
            <h3>Events & Exhibitions</h3>
            <p>
              All the events & exhibition organized by 3 Dots Design Pvt. Ltd.
              ensure that your brand gets maximum followers. With services such
              as stall design & venue branding, event planning & execution, and
              event promotions, 3 Dots Design Pvt. Ltd. makes the journey of
              your brand an ‘event’ful one.
            </p>
          </div>
          <div className="c1">
            <img src={L1} />
            <h3>Media Planning</h3>
            <p>
              3 Dots Design Pvt. Ltd. uses media planning & execution to
              diligently deliver success to your brand. It does so with the help
              of print media, radio, outdoor, and multiplex advertising. By
              using these mediums, 3 Dots Design Pvt. Ltd. not only optimizes
              the client’s ad spends but also optimizes their time.
            </p>
          </div>
          <div className="c1">
            <img src={L1} />
            <h3>AV Production</h3>
            <p>
              The adept team at 3 Dots Design Pvt. Ltd. puts your brand in the
              limelight at the drop of a hat. 3 Dots Design Pvt. Ltd.
              specializes in AV production solutions such as TV commercials,
              corporate films, radio jingles and brand theme songs. From
              conceptualization to scripting to production, 3 Dots Design Pvt.
              Ltd. works on it all from ‘Action’ to ‘Pack-up’!
            </p>
          </div>
        </div>
    </>
  );
}

export default Hydrabad;
