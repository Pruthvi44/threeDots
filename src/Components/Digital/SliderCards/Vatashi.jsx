import "./Vatashi.css";
import image1 from "../../../Assets/images/Digial_img/Vatashi_img/1.jpg";
import image2 from "../../../Assets/images/Digial_img/Vatashi_img/2.jpg";
import image3 from "../../../Assets/images/Digial_img/Vatashi_img/3.jpg";
import image4 from "../../../Assets/images/Digial_img/Vatashi_img/4.jpg";
import image5 from "../../../Assets/images/Digial_img/Vatashi_img/5.jpg";
import image6 from "../../../Assets/images/Digial_img/Vatashi_img/6.jpg";
import image7 from "../../../Assets/images/Digial_img/Vatashi_img/7.jpg";
import image8 from "../../../Assets/images/Digial_img/Vatashi_img/vatashi.png";
import f1 from '../../../Assets/images/footer/f1.png'
import f2 from '../../../Assets/images/footer/f2.png'
import f3 from '../../../Assets/images/footer/f3.png'
function Vatashi() {
  return (
    <>
      <div className="CardVatashi-MainContent">
        <div className="CardVatashi-MidContent">
          <h1>Vatashi</h1>
          <h2>
            When the pandemic invaded our nation, there was an unprecedented
            surge in demand for masks. Reliable face masks, with high filtration
            efficiency, and of low cost were in huge demand. Pune Polymers took
            a strong resolute to help you breathe free of impurities. That’s how
            the inception, design and manufacturing of Vatashi began in India.
            The journey began when Vatashi collaborated with BARC to develop a
            HEPA filter based P100 face mask to protect the doctors & scientists
            working at BARC. A P100 face mask provides 99.97% filtration of
            particles greater than 0.1 micron in size. The goal was to make a
            cost effective but highly efficient face mask that can guarantee
            protection from viruses such as COVID-19.
          </h2>

          <img src={image8} alt="" id="Vatashi-img1" />

          <table>
            <tr>
              <td id="Border-align">Client: Vatashi</td>
              <td id="Border-align">
                Industry: Automobile <br /> Accessories
              </td>
              <td>Year: 2023</td>
            </tr>
          </table>
        </div>

        <div className="CardVatashi-BottomContent">
          <img src={image1} alt="" id="Vatashi-img2" />

          <h1>THE CHALLENGE</h1>
          <p>
            The product category already existed in the market and there were
            already many big players in the market with the same kind of
            product. It was indeed a challenge for us to make ours stand out
            from the rest. 3 Dots Digital took the stance of positioning this
            product as a brand that’s not for your car, but for you – to stay
            healthy inside the car as well as outside.
          </p>

          <div className="Vatashi-CardBottom">
            <div
              id="carouselExampleControls"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner ">
                <div className="carousel-item active">
                  <div className="card-wrapper container-sm d-flex  justify-content-around" >
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
          <p>When we introduced the brand into the market, it was initially an uphill task and the journey was tough. But, with some focused strategy, we were able to achieve it. Here are the numbers that reveal our journey.</p>
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
        </div></div>

    </>
  );
}
export default Vatashi;
