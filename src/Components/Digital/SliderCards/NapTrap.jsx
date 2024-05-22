import "./NapTrap.css";
import image1 from "../../../Assets/images/Digial_img/NapTrap_img/1.png";
import image2 from "../../../Assets/images/Digial_img/NapTrap_img/2.jpg";
import image3 from "../../../Assets/images/Digial_img/NapTrap_img/3.jpg";
import image4 from "../../../Assets/images/Digial_img/NapTrap_img/4.jpg";
import image5 from "../../../Assets/images/Digial_img/NapTrap_img/5.jpg";
import image6 from "../../../Assets/images/Digial_img/NapTrap_img/6.jpg";
import image7 from "../../../Assets/images/Digial_img/NapTrap_img/7.jpg";
import image8 from "../../../Assets/images/Digial_img/NapTrap_img/8.jpg";
import f1 from "../../../Assets/images/footer/f1.png";
import f2 from "../../../Assets/images/footer/f2.png";
import f3 from "../../../Assets/images/footer/f3.png";
function NapTrap() {
  return (
    <>
      <div className="CardNapTrap-MainContent">
        <div className="CardNapTrap-MidContent">
          <h1>NAPTRAP</h1>
          <h2>
            NapTrap is India’s first SBD (Specific Benefit Driven) mattresses
            and they are here for the ever-mobile, ever-moving Indian consumers.
            NapTrap has already invested in upcoming technologies to provide
            sound and healthy sleep so that the Indian customers are not
            sleep-deprived, spurring a cycle involving insomnia and anxiety
            disorder.
          </h2>

          <img src={image1} alt="" id="NapTrap-img1" />

          <table>
            <tr>
              <td id="Border-align">Client: NAPTRAP</td>
              <td id="Border-align">Industry: Home Furniture</td>
              <td>Year: 2021</td>
            </tr>
          </table>
        </div>

        <div className="CardNapTrap-BottomContent">
          <img src={image2} alt="" id="NapTrap-img2" />

          <h1>CAMPAIGN OVERVIEW</h1>
          <p>
            We often tend to ignore our health and sometimes even suffer in
            silence because of not being able to sleep at the right time or the
            right mattress due to various reasons. Through this campaign – AB
            INDIA SOYEGA SAHI, seemed like the ‘right’ preposition with the kind
            of technologies that we offered in our mattresses via India’s first
            online mattress exchange. This campaign was an initiative to spread
            good health, good sleep and well-being across the nation through an
            exchange offer that would change the way India sleeps. This exchange
            offer allowed the people to choose the right mattress for their body
            type, and give them the right kind of support in terms of firmness
            and softness with advanced technologies.
          </p>

          <div className="NapTrap-CardBottom">
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
            With the campaign up & running, the kind of response we got was
            tremendous. The kind of realistic problems that we highlighted
            through this campaign, people felt connected with the brand and 400+
            leads were generated from website as well as Facebook.
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
        </div>
      </div>
    </>
  );
}
export default NapTrap;
