import './BookStation.css'
import image1 from "../../../Assets/images/Digial_img/BookStation_img/1.png";
import image2 from "../../../Assets/images/Digial_img/BookStation_img/2.jpg";
import image3 from "../../../Assets/images/Digial_img/BookStation_img/3.jpg";
import image4 from "../../../Assets/images/Digial_img/BookStation_img/4.jpg";
import image5 from "../../../Assets/images/Digial_img/BookStation_img/5.jpg";
import image6 from "../../../Assets/images/Digial_img/BookStation_img/6.jpg";
import image7 from "../../../Assets/images/Digial_img/BookStation_img/7.jpg";
import image8 from "../../../Assets/images/Digial_img/BookStation_img/8.jpg";
import image9 from "../../../Assets/images/Digial_img/BookStation_img/9.png";
import image10 from "../../../Assets/images/Digial_img/BookStation_img/10.png";
import image11 from "../../../Assets/images/Digial_img/BookStation_img/11.png";
import image12 from "../../../Assets/images/Digial_img/BookStation_img/12.png";
import image13 from "../../../Assets/images/Digial_img/BookStation_img/13.png";
import image14 from "../../../Assets/images/Digial_img/BookStation_img/14.png";
import image16 from "../../../Assets/images/Digial_img/BookStation_img/16.png";
import image17 from "../../../Assets/images/Digial_img/BookStation_img/17.png";
import f1 from "../../../Assets/images/footer/f1.png";
import f2 from "../../../Assets/images/footer/f2.png";
import f3 from "../../../Assets/images/footer/f3.png";
function BookStation(){
    return(
        <>
        <div className="CardBookStation-MainContent">
        <div className="CardBookStation-MidContent">
          <h1>BOOKSTATION</h1>
          <h2>
          Getting a book from Appa Balwant Chowk in Pune is truly a tiresome task as the traffic in the area is always vexing. Bookstation is a brand that brings together all books, across all languages, all genres, from all authors, publications, academic and non-academic, on one single platform. Bookstation is your one-stop solution for all your book needs. With exclusive listings found only in the local markets, the wide range of books available via the app is a shortcut to the best of Appa Balwant Chowk’s bookstores in Pune.</h2>

          <img src={image1} alt="" id="BookStation-img1" />

          <table>
            <tr>
              <td id="Border-align">Client: Bookstation</td>
              <td id="Border-align">
                Industry: Retail Aggregator
              </td>
              <td>Year: 2022</td>
            </tr>
          </table>
        </div>

        <div className="CardBookStation-BottomContent">
          <img src={image2} alt="" id="NapTrap-img2" />

          <h1>THE CHALLENGE</h1>
          <p>
          At 3 Dots Design, we took this brand into our guardianship and became its brand custodian. The challenge was to make the name – Bookstation, synonymous with online book buying not only in Pune but all over India. With this focused approach, we created a digital strategy to penetrate the Pune market first with the brand strength deeply rooted in hyperlocal deliveries within 5 hours. We then expanded our vision to deliver PAN India in 3-4 days. The challenges were aplenty. Listing hundreds and thousands of books on the portal on a daily basis, getting the vendors ready with the inventories and streamlining the logistics. The entire process was a learning task and it prepared us to deliver our best.
          </p>

          <div className="BookStation-CardBottom">
            <div
              id="carouselExampleControls"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner ">
                <div className="carousel-item active">
                  <div className="card-wrapper container-sm d-flex  justify-content-around" >
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
          <p>When it was time, and Bookstation was launched, the results were exceptionally overwhelming. Within a month, the numbers were ticking like a scoreboard in the powerplay. Here are a few numbers to substantiate our claim.</p>
        </div>
      </div>{" "}

      <div className='BookStation-mid-gallery1'>

        <div className='Gallery-Card'>

          <img src={image9} alt="" />
          <h1>6k+</h1>
          <p>Total app Installs</p>

        </div>

        <div className='Gallery-Card'>

          <img src={image10} alt="" />
          <h1>INR 25/App Install</h1>
          <p>Cost per Installs</p>

        </div>

         <div className='Gallery-Card'>

          <img src={image11} alt="" />
          <h1>52,934 Unique Users</h1>
          <p>Total web Traffic</p>

        </div>

         <div className='Gallery-Card'>

          <img src={image12} alt="" />
          <h1>54.20%</h1>
          <p>Bounce Rate</p>

        </div>
      </div>

      <div className='BookStation-mid-gallery2'>
        <div className='Gallery-Card'>

          <img src={image13} alt="" />
          <h1>684</h1>
          <p>Organic FB Page Likes</p>

        </div>

         <div className='Gallery-Card'>

          <img src={image14} alt="" />
          <h1>3,75,776</h1>
          <p>Total Sales</p>

        </div>

         <div className='Gallery-Card'>

          <img src={image16} alt="" />
          <h1>1,483</h1>
          <p>Organic Insta Followers</p>

        </div>

         <div className='Gallery-Card'>

          <img src={image17} alt="" />
          <h1>1,246</h1>
          <p>Total Orders</p>

        </div>

      </div>


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
    )
}
export default BookStation;