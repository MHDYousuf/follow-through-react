import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header Heading="Contact Manager" />
      <div className="container">
        <Contact name="John Doe" email="doe@gmail.com" phone="9523431230" />
        <Contact
          name="Yousuf"
          email="mohd4yousuf@gmail.com"
          phone="9512343242"
        />
      </div>
    </div>
  );
}

export default App;
