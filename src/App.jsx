import React from "react";

import Rating from "./components/rating/rating.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import "./App.scss";

document.body.style = "background-image: url('assets/img/sw-background.png')";

function App() {
  return (
    <div className="App">
      <Header />
      <Rating />
      <Footer />
    </div>
  );
}

export default App;
