import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card.jsx"
import Button from "./button.jsx";
import Footer from "./footer.jsx";

//create your first component


const Home = () => {
	return (
		<div className="containter-fluid text-center">
			<div className="row  mt-5 justify-content-center">
					<Card image={"https://miro.medium.com/v2/resize:fit:800/1*8X19bupfY3zD6eXIv1UigQ.jpeg"} title={"Learn React"} text={"Aprender React te permite crear aplicaciones web modernas y dinámicas que pueden mejorar la experiencia del usuario."} url={"https://es.react.dev/"} type={"primary"}/>
					<Card image={"https://oraclejet.org/wp-content/uploads/2022/07/Free-Courses-to-learn-JavaScript-1-800x500.jpg"} title={"Learn JavaScript"} text={"Aprender JavaScript te permite agregar interactividad y dinamismo a tus sitios web y aplicaciones web."} url={"https://developer.mozilla.org/es/docs/Web/JavaScript"} type={"warning"}/>
					<Card image={"https://blog.sinapsis.agency/wp-content/uploads/2021/03/DEFINICIONES-42-HTML-800x500.jpg"} title={"Learn HTML"} text={"Aprender HTML te permite crear la estructura y el contenido de tus sitios web."} url={"https://developer.mozilla.org/es/docs/Web/HTML"}  type={"danger"}/>
					<Card image={"https://i0.wp.com/fahmidasclassroom.com/wp-content/uploads/2020/02/css.jpg?fit=800%2C500&ssl=1"} title={"Learn CSS"} text={"Aprender CSS te permite dar estilo y diseño a tus sitios web."} url={"https://developer.mozilla.org/es/docs/Web/CSS"} type={"info"}/>
			</div>
			
			<div className="footer mt-5 bg-dark" style={{height: "10rem"}}>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
