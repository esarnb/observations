import React, {Component} from "react";
import "./Home.css";

import Modal from "../../Components/Modal/Modal.js";
// import Card from "../../Components/Card/Card.js";
import HomeCards from "./HomeCards/HomeCards.js"

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { page: <Home /> }; 
	}

	componentDidMount() {
		// 
	}
	
	render() { 
		const homeModal = {
			text: "Home Modal",
			header: "Home Header",
			title: "Home Title",
			img: "https://i.pinimg.com/originals/f5/44/16/f544169a4f8c9b7a1c4403547e714837.jpg",
			imgSize: "small",
			content: [<div>Some text content for a line.</div>, <div>Another set of content for the next line.</div>],
		}

		// const cardsData = [
		// 	{
		// 		hoverButton: {
		// 				name: "btn 1",
		// 				func: () => alert("Hello")
		// 		},
		// 		img: "https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/letter-x-icon-15-256.png",
		// 		header: "Header",
		// 		body: "Body",
		// 		footer: "Footer",
		// 		alt: "alt"
		// 	},
		// 	{
		// 		hoverButton: {
		// 				name: "btn 2",
		// 				func: () => alert("Hello")
		// 		},
		// 		img: "https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/letter-x-icon-15-256.png",
		// 		header: "Header",
		// 		body: "Body",
		// 		footer: "Footer",
		// 		alt: "alt"
		// 	},
		// 	{
		// 		hoverButton: {
		// 				name: "btn 3",
		// 				func: () => alert("Hello")
		// 		},
		// 		img: "https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/letter-x-icon-15-256.png",
		// 		header: "Header",
		// 		body: "Body",
		// 		footer: "Footer",
		// 		alt: "alt"
		// 	}
		// ]

		// $('.special.cards .image').dimmer({
		// 	on: 'hover'
		// });
		
		return ( 
			<div className="Home"> 
				<div className="Home-Title Center"> 
					Home 
					<br /> <br /> <br /> 
					<Modal modal={homeModal} />
				</div> 
				<div className="rowCardsHome">
					<HomeCards />
					{/* {cardsData.map((x,i) => <Card className="homeCards" data={x} key={"CardsHome#"+i} />)}	 */}
				</div>
			</div> 
		)
	};
}

export default Home;

/*
 
props = {
    text: "",
    header: "",
    title: "",
    img: "",
    content: "",
}
 */
