import React, {Component} from "react";
import "./Home.css";

import Modal from "../../Components/Modal/Modal.js";

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

		
		return ( 
			<div className="Home"> 
				<div className="Home-Title Center"> 
					Home 
					<br /> <br /> <br /> 
					<Modal modal={homeModal} />
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
