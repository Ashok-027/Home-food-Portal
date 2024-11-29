import React from "react";
import moment from "moment";
import './FooterButton.css';
const FooterBottom = () => {
  const formatDate = moment().format("MMM Do YY");

  return (
    
      <div className="footer">
      <span style={{color:"white"}}>  &copy; {new Date().getFullYear()} Copyright: <a href="http://localhost:3000/" >Home Food </a><h5>{formatDate}</h5>
      </span>
    </div>

  );
};

export default FooterBottom;
