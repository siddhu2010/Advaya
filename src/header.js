import React from "react";
import "./header.css";

class Header extends React.Component {
  state = {};
  render() {
    //const header="";
    //const Header = document.getElementById("header");
    //header.innerHTML = "Welcome!";
    return (
      <div>
        <div>
          <div className="header">
            <div className="header_logo"></div>
            <h1>Advaya</h1>
            <div>
              
            </div>
            <div className="header_nav">
              <div className="header_options">
                <span className="header_optionLineOne">Namaste</span>
                <span className="header_optionLineTwo">Sign In</span>
              </div>
              <div className="header_options">For Artist</div>
              <div className="header_options">About Us</div>
              <div className="header_options"></div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}
/*

function header(){
class header extends React.Component {
  
  state = {};
  render() 
  {
    return (
      
    );
  }*/

export default Header;


