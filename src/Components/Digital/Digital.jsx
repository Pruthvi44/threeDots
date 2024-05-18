import "./Digital.css";
import image1 from "../../Assets/images/Digial_img/1.jpg";
import image2 from "../../Assets/images/Digial_img/2.jpg";
import image3 from "../../Assets/images/Digial_img/3.jpg";
import Section1 from "../Digital/Section1";
function Digital() {
  return (
    <>
      <div className="Digital-main-content">
        <div
          id="carouselExampleIndicators"
          className="carousel"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <img className="d-block w-100" src={image1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image3} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <Section1 />
      </div>
    </>
  );
}
export default Digital;
