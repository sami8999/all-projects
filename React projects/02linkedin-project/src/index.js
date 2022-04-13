import React from 'react';
import ReactDOM from 'react-dom';
import Info from "./Info.js"
import About from "./About.js"
import Interests from "./Interests.js"
import Footer from "./Footer.js"
import "./style.css"


ReactDOM.render(
    
  <div className = "layout">
      <div className = "main-content">
          <Info/>
          <About/>
          <Interests/>
          <Footer />
      </div>
  </div>, 
  
  document.getElementById("root")
  
)


