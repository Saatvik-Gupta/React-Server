
import React from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

function Mainbar({ state }) {

  if (state === "none") {
    return (
      <div className="mainbar">
        <h1>This is a MainPanel Component</h1>
      </div>
    );
  }
  else if (state === "home") {
    return <Home />;
  }
  else if (state === "about") {
    return <About />;
  }
  else if (state === "contact") {
    return <Contact />;
  }
  else {
    return (
      <>
        <h1>Oops! 404 Error Occurred</h1>
        <p>You forgot to pass a valid state.</p>
      </>
    );
  }
}

export default Mainbar;
