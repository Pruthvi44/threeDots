import "./TechDogs.css";
import image1 from "../../../Assets/images/Digial_img/TechDogs_img/1.png";
import image2 from "../../../Assets/images/Digial_img/TechDogs_img/2.jpg";
import image3 from "../../../Assets/images/Digial_img/TechDogs_img/3.jpg";
import image4 from "../../../Assets/images/Digial_img/TechDogs_img/4.jpg";
import image5 from "../../../Assets/images/Digial_img/TechDogs_img/5.jpg";
import image6 from "../../../Assets/images/Digial_img/TechDogs_img/6.jpg";
import image7 from "../../../Assets/images/Digial_img/TechDogs_img/7.jpg";
import f1 from "../../../Assets/images/footer/f1.png";
import f2 from "../../../Assets/images/footer/f2.png";
import f3 from "../../../Assets/images/footer/f3.png";
function TechDogs() {
  return (
    <>
      <div className="CardTechDogs-MainContent">
        <div className="CardTechDogs-MidContent">
          <h1>TECHDOGS</h1>
          <h2>
            As a creative agency that loves breaking the monotony and setting
            design benchmarks, 3 Dots Design took the challenge of working for a
            US-based technology information aggregator – TechDogs. It was more
            than a challenge we’d say. It was a process towards mutual progress.
            TechDogs, being a US-based company had an eye for detail and that
            allowed us to dive deep into the depths of creativity. Their refined
            taste in the intricacies and pure love for pop culture references
            gave us the extra boost to step up our creative game. The design
            thinking behind every creative was given deserving justice and the
            outcome was definitely noteworthy.
          </h2>

          <img src={image1} alt="" id="TechDogs-img1" />

          <table>
            <tr>
              <td id="Border-align">Client: TechDogs</td>
              <td id="Border-align">
                Industry: Information Aggregation Services
              </td>
              <td>Year: 2020</td>
            </tr>
          </table>
        </div>

        <div className="CardTechDogs-BottomContent">

          <div className="TechDogs-CardBottom">
            <div
              id="carouselExampleControls"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner ">
                <div className="carousel-item active">
                  <div className="card-wrapper container-sm d-flex  justify-content-around">
                    <div className="card border-0 ">
                      <img src={image2} alt="..." id="card-align" />
                    </div>
                    <div className="card border-0">
                      <img src={image3} alt="..." id="card-align" />
                    </div>
                    <div className="card border-0">
                      <img src={image4} alt="..." id="card-align" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card-wrapper container-sm d-flex  justify-content-around">
                    <div className="card border-0">
                      <img src={image5} alt="..." id="card-align" />
                    </div>
                    <div className="card border-0">
                      <img src={image6} alt="..." id="card-align" />
                    </div>
                    <div className="card border-0">
                      <img src={image7} alt="..." id="card-align" />
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
            </div>
          </div>

          <h1>THE RESULTS</h1>
          <p>
          Since most of the work was on the digital platform, the detailing of each and every design happened to the microscopic level. The layout design was standardized, yet the content had the freedom to go berserk. From creating social media posts for their articles to creating e-mailers, we religiously followed the article syndication tracker which allowed us to streamline the creative process and deliver the best possible output.
          </p>

        </div>
      </div>{" "}
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

          <h1>THE RESULTS</h1>
          <p>
            The launch of the production plant kicked off on the auspicious
            occasion of Dussehra and they had a phenomenal response. Even before
            the dealerships were set, the first e- scooter was already sold at
            the plant. So far, EXER has received a total of 15+ enquiries for
            dealerships, and has reached 50,000+ people with 55% impressions
            from the latest promotions.
          </p>
        </div>
      </div>
    </>
  );
}
export default TechDogs;
