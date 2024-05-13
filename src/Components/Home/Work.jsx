import "./Work.css";
import wimg1 from "../../Assets/images/Homeimg/pencil.jpg";
function Work() {
  return (
    <>
      <div className="work-main">
        <div className="work-info">
          <p>BEST OF OUR</p>
          <h2>RECENT WORK</h2>
          <p>
            Being one of the best advertising agencies in Pune, we pride
            ourselves in giving only the best to our clients. Working closely
            with them, we become as invested in their success as they are. The
            result? Fantastic campaigns that gets results. Here’s a bird’s eye
            view of the successes that made us one of the top digital marketing
            agencies in Pune.
          </p>
        </div>
        <div className="work-img-cont">
        <div className="container">
          <img src={wimg1} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
        <div className="container">
          <img src={wimg1} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
        <div className="container">
          <img src={wimg1} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
        <div className="container">
          <img src={wimg1} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
        <div className="container">
          <img src={wimg1} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
        <div className="container">
          <img src={wimg1} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
        <div className="container">
          <img src={wimg1} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Work;
