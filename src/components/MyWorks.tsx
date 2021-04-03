import React from "react";

import Description from "./MyWorks.Description";
// images
import buddeImg from "../images/budde-kaffee.jpeg";
import coffeeRecipeImg from "../images/coffee-recipe-app.jpeg";
import myWebSiteImg from "../images/my-web-site.jpeg";

const MyWorks: React.FC = () => {
  return (
    <section className="my-works" id="my-works">
      <h2>MY WORKS</h2>
      <div className="my-works-container">
        <Description
          className="coffee-recipe-forum"
          src={coffeeRecipeImg}
          alt="Coffee Recipe Forum"
          link="https://coffee-app-252a4.web.app/"
          title="Coffee Recipe Forum"
          description="this is a great tool"
          usedTech={["TypeScript", "React", "Firebase", "HTML5", "CSS3"]}
        />
        <Description
          className="coffee-recipe-forum"
          src={myWebSiteImg}
          alt="my website"
          link="#main-top"
          title="My Website"
          description="The page witch you are currently visiting"
          usedTech={["TypeScript", "React", "HTML5", "SCSS"]}
        />
        <Description
          className="budde-kaffee"
          src={buddeImg}
          alt="Budde Kaffee Website"
          link="https://buddekaffee.de/"
          title="Budde Kaffee Website"
          description="this is a great website!"
          usedTech={["HTML5", "CSS3", "JavaScript"]}
        />
      </div>
    </section>
  );
};

export default MyWorks;
