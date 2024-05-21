import "./Section5.css";
import image18 from '../../Assets/images/Digial_img/18.jpg'
import image19 from '../../Assets/images/Digial_img/19.jpg'
import image20 from "../../Assets/images/Digial_img/20.jpg";
import image21 from "../../Assets/images/Digial_img/21.jpg";
import image22 from "../../Assets/images/Digial_img/22.jpg";
function Section5() {
  return (
    <>
      <div className="Digital-Section5-MainContent">
        <h1>DIGITAL MARKETING PORTFOLIO</h1>
        <div
          id="carouselExampleControls"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card-wrapper container-sm d-flex  justify-content-around">
                <div className="card ">
                  <img src={image20} alt="..." id="card-align"/>
                  <div className="card-body" >
                    <h5>Naptrap</h5>
                    <p>Industry: Home Furniture</p>
                    <p>Year: 2021</p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src={image21} alt="..." id="card-align" />
                  <div class="card-body">
                    <h5>TechDogs</h5>
                    <p>Information Aggregation Services</p>
                    <p>Year: 2020</p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src={image22}  alt="..." id="card-align" />
                  <div className="card-body">
                    <h5>Exer Energy</h5>
                    <p>Industry: Automobile</p>
                    <p>Year: 2021</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-wrapper container-sm d-flex   justify-content-around">
                <div className="card  ">
                <img src={image18} alt="..." id="card-align"/>
                  <div className="card-body">
                    <h5>Vatashi</h5>
                    <p>Industry: Automobile Accessories</p>
                    <p>Year: 2023</p>
                  </div>
                </div>
                <div className="card">
                <img src={image22} alt="..." id="card-align"/>
                  <div className="card-body">
                  <h5>Exer Energy</h5>
                    <p>Industry: Automobile</p>
                    <p>Year: 2021</p>
                  </div>
                </div>
                <div className="card">
                <img src={image19} alt="..." id="card-align"/>
                  <div className="card-body">
                  <h5>Bookstation</h5>
                    <p>Industry: Retail Aggregator</p>
                    <p>Year: 2022</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
export default Section5;
