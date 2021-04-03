import React from "react";
import ReactDOM from "react-dom";
// import components
import Header from "./components/Header";
import MainTop from "./components/MainTop";
import AboutMe from "./components/AboutMe";
import MyWorks from "./components/MyWorks";
import Contact from "./components/Contact";
// import stylesheet
import "./stylesheet/css/reset.css";
import "./stylesheet/css/index.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <MainTop />
          <AboutMe />
          <MyWorks />
          <Contact />
        </section>
      </main>
      <footer>
        <p>&copy; Keisuke Tanaka 2021</p>
      </footer>
    </div>
  );
};

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

window.onload = render;
