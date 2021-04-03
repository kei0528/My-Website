import React, { useState } from "react";
import aboutImg from "../images/about.jpg";

const AboutMe: React.FC = () => {
  // state
  const [IsActive, setIsActive] = useState(false);
  // function
  const readMoreBtnHandler = () => {
    setIsActive(true);
  };
  const readLessBtnHandler = () => {
    setIsActive(false);
  };
  // render
  return (
    <section className="about-me" id="about-me">
      <div className="about-me-container">
        <h2>ABOUT ME</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          molestie, eros ut rutrum pulvinar, nunc risus finibus nisi, vitae
          vehicula elit nulla sit amet lorem. Vestibulum efficitur justo ut
          pharetra iaculis. Praesent tristique non nisi at vulputate. Proin sit
          amet dolor feugiat, porttitor velit non, semper ipsum. vehicula elit
          nulla sit amet lorem. Vestibulum efficitur justo ut pharetra iaculis.
          Praesent tristique non nisi at vulputate. Proin sit amet dolor
          feugiat, porttitor velit non, semper ipsum.
        </p>
        {!IsActive && (
          <div className="read-more">
            <div className="read-more-border"></div>
            <button className="read-more-button" onClick={readMoreBtnHandler}>
              interested more?
            </button>
          </div>
        )}
        {IsActive && (
          <div className="about-me-full-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              molestie, eros ut rutrum pulvinar, nunc risus finibus nisi, vitae
              vehicula elit nulla sit amet lorem. Vestibulum efficitur justo ut
              pharetra iaculis. Praesent tristique non nisi at vulputate. Proin
              sit amet dolor feugiat, porttitor velit non, semper ipsum.
              Curabitur vel ex sit amet eros rutrum hendrerit eget ut velit. Nam
              quis risus nisi. Integer eu ante ac tellus fringilla elementum vel
              sed nunc. Nunc suscipit lorem ac risus aliquet, eu malesuada arcu
              ullamcorper. Ut condimentum arcu neque, ut congue orci ullamcorper
              id. Donec at velit nulla. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Vestibulum
              ultricies lacinia orci, in viverra tellus vehicula at. In urna
              tellus, scelerisque vitae urna eu, vulputate vestibulum lacus. Ut
              purus erat, euismod vel erat et, finibus ullamcorper ex. Integer
              euismod ante nec leo aliquam tempus. Ut varius velit in venenatis
              interdum. Curabitur finibus a odio vel elementum. Duis dignissim,
              elit ut pellentesque luctus, orci urna sodales orci, at rutrum
              libero mi sed arcu. Integer sit amet velit quis turpis consequat
              pharetra vitae at sapien. Sed posuere at dui dignissim aliquam. In
              condimentum fermentum maximus. Quisque luctus lectus nec tellus
              fringilla, sed feugiat erat semper. Maecenas libero mi, feugiat ac
              dapibus nec, mattis et odio. Aliquam felis enim, porta dignissim
              purus quis, ultrices dapibus risus.
            </p>
            <div className="read-less">
              <div className="read-less-border"></div>
              <a href="#about-me">
                <button
                  className="read-less-button"
                  onClick={readLessBtnHandler}
                >
                  show less
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
      <div
        className={
          "about-me-img-background" + " " + (IsActive ? "do-fixed" : "")
        }
      >
        <img src={aboutImg} alt="about me" />
      </div>
    </section>
  );
};
export default AboutMe;
