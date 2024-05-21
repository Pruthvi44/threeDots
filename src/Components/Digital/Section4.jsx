import "./Section4.css";
import image8 from "../../Assets/images/Digial_img/8.gif";
import image12 from "../../Assets/images/Digial_img/12.jpg";
import image13 from "../../Assets/images/Digial_img/13.jpg";
import image14 from "../../Assets/images/Digial_img/14.jpg";
import image15 from "../../Assets/images/Digial_img/15.jpg";
import image16 from "../../Assets/images/Digial_img/16.jpg";
import image17 from "../../Assets/images/Digial_img/17.svg";
function Section4() {
  return (
    <>
      <div className="Digital-Section4-MainContent">
        <h1>Going step-by-step to reach your goals</h1>

        <div className="Section4-rowImage">
          <img src={image8} alt="" />
        </div>

        <div className="Section4-ColumnImage">
          <img src={image12} alt="" />
          <h1>
            We conduct rigorous on-ground, real-time market research before
            taking any step, or generating any idea.
          </h1>
          <img src={image13} alt="" />
          <h1>
            With a finger on the pulse of what others are doing, we strive to
            create better and offer disruptive solutions that make an impact.
          </h1>
          <img src={image14} alt="" />
          <h1>
            Our strategy and planning are directed by our clients’ expectations
            and their customers’ needs.
          </h1>
          <img src={image15} alt="" />
          <h1>
            Skilfully blending creative thought and strategic planning enables 3
            Dots Digital to orchestrate impeccable execution on every platform.
          </h1>
          <img src={image16} alt="" />
          <h1>
            Making sure that the communication reaches the right audience is
            where 3 Dots Digital showcases its forte. Using real-time data
            driven decisions 3 Dots Digital makes sure that communication
            reaches its target audience, every time.
          </h1>
        </div>
      </div>
    </>
  );
}
export default Section4;
