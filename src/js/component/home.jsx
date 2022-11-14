import React from "react";

//import your own components
import NavBar from "./navbar.jsx";
import JumboTron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<NavBar />
		<div className="container">
			<div className="row">
				<JumboTron />
			</div>
		
			<br></br>

			<div className="row justify-content-around" id="cards">
				<Card/>
				<Card/>
				<Card/>
				<Card/>	
			</div>
		</div>
		<Footer/>	
		</>
	);
};

export default Home;
