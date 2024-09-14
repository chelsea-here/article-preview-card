import "./App.css";
import React from "react";
import { useState } from "react";
import Attribution from "./components/Attribution.js";
import ShareButton from "./components/ShareButton.js";
import SharePopup from "./components/SharePopup.js";

function App() {
  const [isActive, setIsActive] = useState(false); //lifted state from the shareButton to the parent to utilize relative positioning for mobile sharing styling

  const onShare = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="app">
      <main className="main">
        <img src="/drawers.jpg" className="hero" alt="green dresser" />

        <article className="article">
          <section className="textContent">
            <h1 className="heading">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="description">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </section>

          <div id="creationContent" className="row">
            <div className="avatarCropper">
              <img src="/avatar-michelle.jpg" className="avatar" alt="author" />
            </div>
            <div className="stackedText">
              <p className="name">Michelle Appleton</p>
              <p className="date">28 Jun 2020</p>
            </div>
            <div className="share">
              <ShareButton isActive={isActive} onShare={onShare}>
                <SharePopup isActive={isActive} className="desktop" />
              </ShareButton>
              {/* for desktop view, relative position to share button */}
            </div>
          </div>
        </article>
        <SharePopup isActive={isActive} className="mobile" />
        {/* for mobile view, relative position to container */}
      </main>
      <Attribution />
    </div>
  );
}

export default App;
