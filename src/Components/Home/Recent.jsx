import "./Recent.css";

function Recent() {
  return (
    <>
      <div className="recent-main">
        <div className="recent-title">
          <h1>RECENTLY RELEASED</h1>
          <hr />
        </div>
        <div className="utube-vdo">
          <iframe
            src="https://www.youtube.com/embed/pkgsPYdaJ4Q"
            title="Pyramid Atlante Walkthrough Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h3>Pyramid Atlante Walkthrough Video by 3 Dots Design</h3>
          <p>
            Apart from doing some of the most creative works, we also deliver
            some tactical and product-specific videos that enhance the brand's
            reach in ways more than one. 3 Dots Design did exactly that with
            Atlante. The video focused on the location and highlighted the
            prominence of the project by emphasizing the landmarks nearby and
            this was in a way, quite refreshing to work. The video was
            conceptualized by 3 Dots Design.
          </p>
         
        </div>
        <button id="recent-btn">VIEW MORE</button>
      </div>
    </>
  );
}

export default Recent;
