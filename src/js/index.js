//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";
//import your own components
import Home from "./component/home.jsx";
// import navbar from "./component/navbar";
// import footer from "./component/footer";

ReactDOM.render(<Home />, document.querySelector("#app"));