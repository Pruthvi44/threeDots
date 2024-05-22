import "./ExerEnergy.css";
import image1 from "../../../Assets/images/Digial_img/Exer_img/1.png";
import image2 from "../../../Assets/images/Digial_img/Exer_img/2.jpg";
import image3 from "../../../Assets/images/Digial_img/Exer_img/3.jpg";
import image4 from "../../../Assets/images/Digial_img/Exer_img/4.jpg";
import image5 from "../../../Assets/images/Digial_img/Exer_img/5.jpg";
import image6 from "../../../Assets/images/Digial_img/Exer_img/6.jpg";
import image7 from "../../../Assets/images/Digial_img/Exer_img/7.jpg";
import image8 from "../../../Assets/images/Digial_img/Exer_img/8.jpg";
import f1 from "../../../Assets/images/footer/f1.png";
import f2 from "../../../Assets/images/footer/f2.png";
import f3 from "../../../Assets/images/footer/f3.png";
function ExerEnergy() {
  return (
    <>
      <div className="CardExer-MainContent">
        <div className="CardExer-MidContent">
          <h1>EXER ENERGY</h1>
          <h2>
            With e-scooters raking the automobile market share, one
            technological innovation at a time, EXER ENERGY emerged as a player
            to disrupt the market with the models of its own. The production
            plant was set up in record-time of 45 days and this itself shows
            that EXER is here to stay and to give a tough competition to the big
            shots.
          </h2>

          <img src={image1} alt="" id="Exer-img1" />

          <table>
            <tr>
              <td id="Border-align">Client: Exer Energy</td>
              <td id="Border-align">Industry: Automobile</td>
              <td>Year: 2021</td>
            </tr>
          </table>
        </div>

        <div className="CardExer-BottomContent">
          <img src={image2} alt="" id="Exer-img2" />

          <h1>CAMPAIGN OVERVIEW</h1>
          <p>
            When we were briefed about the product, it was clear that we were
            not supposed to dwell too much into the performance of the product,
            rather focus on how riding these e- scooters would make you feel.
            That’s how we arrived at the statement – ‘The Sleek God’ (just like,
            The Greek God). Also, this positioning perfectly fit with the sleek
            design and aesthetics of the products. Our creative campaign
            revolved around this very concept of ‘The Sleek God’ while the brand
            possessed an attitude of a playful heart and an intelligent mind.
          </p>

          <h1>LAUNCH CAMPAIGN</h1>
          <p>
            The campaign began with a set of teasers, followed by launch where
            we revealed the concept of “The Sleek God” and follow-up creatives
            where we focused on the individual aspect of the e-scooter. Social
            Media: The social media creatives were designed to engage the
            audience with meaningful, yet fun content.
          </p>

          <div className="Exer-CardBottom">
            <div
              id="carouselExampleControls"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner ">
                <div className="carousel-item active">
                  <div className="card-wrapper container-sm d-flex  justify-content-around">
                    <div className="card border-0 ">
                      <img src={image3} alt="..." id="card-align" />
                    </div>
                    <div className="card border-0">
                      <img src={image4} alt="..." id="card-align" />
                    </div>
                    <div className="card border-0">
                      <img src={image5} alt="..." id="card-align" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card-wrapper container-sm d-flex  justify-content-around">
                    <div className="card border-0">
                      <img src={image6} alt="..." id="card-align" />
                    </div>
                    <div className="card border-0">
                      <img src={image7} alt="..." id="card-align" />
                    </div>
                    <div className="card border-0">
                      <img src={image8} alt="..." id="card-align" />
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
            When we introduced the brand into the market, it was initially an
            uphill task and the journey was tough. But, with some focused
            strategy, we were able to achieve it. Here are the numbers that
            reveal our journey.
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
export default ExerEnergy;
