import React from "react";

import Description from "./MyWorks.Description";
// images
import buddeImg from "../images/budde-kaffee.jpeg";
import coffeeRecipeImg from "../images/coffee-recipe-app.jpeg";
import myWebSiteImg from "../images/my-web-site.jpeg";
import typingGameImg from "../images/typing_game.jpg";
import slotMachineImg from "../images/slot_machine.jpg";
import newsAppImg from "../images/news-app.jpg";
import stopWatchImg from "../images/stop-watch.jpg";

const MyWorks: React.FC = () => {
  return (
    <section className="my-works" id="my-works">
      <h2>MY WORKS</h2>
      <div className="my-works-container">
        <Description
          className="nachrichten-heute"
          src={newsAppImg}
          alt="News App"
          link=""
          title="Nachrichten Heute"
          description="SPA that displays news from many different sources."
          usedTech={["TypeScript", "React", "HTML5", "SCSS"]}
        />
        <Description
          className="coffee-recipe-forum"
          src={coffeeRecipeImg}
          alt="Coffee Recipe Forum"
          link="https://coffee-app-252a4.web.app/"
          title="Coffee Recipe Forum"
          description="A forum which can be post and browse coffee recipes."
          usedTech={["TypeScript", "React", "Firebase", "HTML5", "CSS3"]}
        />
        <Description
          className="coffee-recipe-forum"
          src={myWebSiteImg}
          alt="my website"
          link="#main-top"
          title="My Website"
          description="The page witch you are currently visiting."
          usedTech={["TypeScript", "React", "HTML5", "SCSS"]}
        />
        <Description
          className="budde-kaffee"
          src={buddeImg}
          alt="Budde Kaffee Website"
          link="https://buddekaffee.de/"
          title="Budde Kaffee Website"
          description="Website for local coffee business."
          usedTech={["HTML5", "CSS3", "JavaScript"]}
        />
        <Description
          className="typing-name"
          src={typingGameImg}
          alt="Typing Game"
          link=""
          title="Typing Game"
          description="Simple typing game developed with vanilla JS."
          usedTech={["HTML5", "CSS3", "JavaScript"]}
        />
        <Description
          className="slot-machine"
          src={slotMachineImg}
          alt="Slot Machine"
          link=""
          title="Slot Machine"
          description="Slot Machine. Enjoy!"
          usedTech={["HTML5", "CSS3", "JavaScript"]}
        />
        <Description
          className="stop-watch"
          src={stopWatchImg}
          alt="Stop Watch"
          link=""
          title="Stop Watch"
          description='Stop Watch with "Start", "Stop" and "Reset" button. My very first project.'
          usedTech={["HTML5", "CSS3", "JavaScript"]}
        />
      </div>
    </section>
  );
};

export default MyWorks;
