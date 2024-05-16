import "./Location.css";

function Location() {
  return (
    <>
    <div className="newlocation">
      <div className="newLoc">
      <h1>Location Map -</h1>
        <div className="on-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30265.909306656617!2d73.82103!3d18.518114!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf7a87a07bb1%3A0x6414e0b5cabe5161!2s3%20Dots%20Design!5e0!3m2!1sen!2sus!4v1715772470941!5m2!1sen!2sus"
            allowFullScree=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0813752685685!2d73.82575697279395!3d18.525224469036765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf7a87a07bb1%3A0x6414e0b5cabe5161!2s3%20Dots%20Design!5e0!3m2!1sen!2sus!4v1715772734127!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      </div>
    </>
  );
}

export default Location;
