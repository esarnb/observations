import React, {Component} from "react";
import "./Etext.css";
import NavBar from "../../Components/NavBar/NavBar.js"
import Modal from "./Components/Modal/Modal.js";

class Etext extends Component {
	constructor(props) {
		super(props);
		this.state = {  }; 
	}

    componentDidMount() {
		// 
	}
	
	render() { 
		const lamb = {
			text: "lamb",
			header: "Lamb",
			title: "A young sheep",
			img: "https://i.pinimg.com/originals/6c/d4/0b/6cd40b02efc9d1291e616da3868108be.jpg",
			imgSize: "small",
			content: [
				<p>Sheep (Ovis aries) are quadrupedal, ruminant mammals typically kept as livestock. Like most ruminants, sheep are members of the order Artiodactyla, the even-toed ungulates. Although the name sheep applies to many species in the genus Ovis, in everyday usage it almost always refers to Ovis aries. Numbering a little over one billion, domestic sheep are also the most numerous species of sheep. An adult female is referred to as a ewe, an intact male as a ram, occasionally a tup, a castrated male as a wether, and a young sheep is a lamb.</p>, 
				<p>Sheep are most likely descended from the wild mouflon of Europe and Asia and one of the earliest animals to be domesticated for agricultural purposes, sheep are raised for fleeces, meat (lamb, hogget or mutton) and milk. A sheep's wool is the most widely used animal fiber, and is usually harvested by shearing. Ovine meat is called lamb when from younger animals and mutton when from older ones in Commonwealth countries, and lamb in the United States (including from adults). Sheep continue to be important for wool and meat today, and are also occasionally raised for pelts, as dairy animals, or as model organisms for science.</p>
			],
		},

		puppy = {
			text: "puppy",
			header: "Puppy",
			title: "A young dog",
			img: "https://i.ytimg.com/vi/Vp7nW2SP6H8/maxresdefault.jpg",
			imgSize: "small",
			content: [
				<p>A puppy is a juvenile dog. Some puppies can weigh 1-1.5 kg (1-3 lb), while larger ones can weigh up to 7–11 kg (15-23 lb). All healthy puppies grow quickly after birth. A puppy's coat color may change as the puppy grows older, as is commonly seen in breeds such as the Yorkshire Terrier. Puppy refers specifically to young dogs, while pup may be used for other animals such as wolves, seals, giraffes, guinea pigs, rats or sharks.</p>
			],
		},

		lorem = {
			text: "lorem",
			header: "Lorem",
			title: "Lorem Ipsum",
			img: "https://i.ytimg.com/vi/Vp7nW2SP6H8/maxresdefault.jpg",
			imgSize: "medium",
			imgWidth: "300",
			imgHeight: "300",
			content: [
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit orci, sodales sit amet sem at, consequat ultricies arcu. Curabitur in metus nulla. In fringilla lorem a tellus venenatis, sit amet vestibulum nunc congue. Sed dapibus ante quis consequat pretium. Nunc a eros dolor. Sed ullamcorper, ex ut suscipit porttitor, dolor massa vulputate odio, quis porttitor lacus ante vitae lacus. Vivamus id ligula fringilla, iaculis odio nec, tincidunt arcu. Donec tincidunt sodales nisl nec iaculis. Praesent odio nulla, ullamcorper eget sapien eu, euismod cursus felis. Integer fringilla ante nec ligula tincidunt pretium. Vestibulum risus mi, mollis quis nulla a, eleifend efficitur neque. Proin vitae ipsum nec quam accumsan elementum. Quisque lacus est, tempus sed ante at, tincidunt convallis est.</p>,
				<p>Curabitur interdum rutrum purus rhoncus pharetra. Quisque ut sapien vel tellus ultricies fermentum. Aliquam varius ut quam non scelerisque. Mauris iaculis porta mauris, eget convallis metus ullamcorper in. Vestibulum venenatis elit sit amet libero posuere varius. Donec auctor velit sit amet sapien dictum viverra. Suspendisse potenti. Etiam at nisi pretium, semper turpis a, ullamcorper elit. Donec sed sodales nunc, non molestie eros. Aliquam convallis suscipit rutrum. Etiam lacinia semper condimentum. Nulla rutrum lectus vitae libero auctor, id tempor elit rhoncus. Integer varius lacinia lorem, dictum scelerisque mauris suscipit eget. Mauris euismod tristique odio, id vulputate dolor tempus et. Nunc elementum odio a dolor efficitur bibendum.</p>,
				<p>Praesent id tristique neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque gravida, ex vel cursus sollicitudin, ipsum dui maximus metus, ac suscipit ex eros a mauris. Cras sollicitudin feugiat mi id convallis. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla pulvinar, erat vel pellentesque iaculis, ex dui porta quam, eu pharetra ante erat et risus. Etiam tempus nisi vel est iaculis lacinia. In suscipit, erat at imperdiet hendrerit, odio sapien tincidunt erat, quis commodo tortor felis a mauris. Aliquam faucibus fringilla ipsum, nec varius sapien facilisis vitae. Nam porttitor lectus nulla, ac fermentum dolor maximus vitae. In hac habitasse platea dictumst.</p>,
				<p>Donec mollis commodo lacus, sit amet auctor purus accumsan id. Curabitur aliquam aliquam ante, sed gravida enim sollicitudin non. Cras auctor tincidunt elementum. Proin faucibus, lacus at facilisis dictum, odio sem aliquet risus, eget eleifend risus eros quis purus. Integer scelerisque ipsum sed tellus consequat, at fermentum risus ultricies. Phasellus vel laoreet magna, vel tempus est. Suspendisse ultricies volutpat justo, posuere vestibulum dolor elementum sit amet. Suspendisse semper sem sit amet arcu placerat, vitae faucibus diam tincidunt. Vestibulum id lacinia sem. Praesent urna enim, sodales dapibus ultrices non, ornare a nunc. Integer id nisl non elit aliquet cursus. Curabitur non eros rhoncus, euismod odio eu, dignissim augue. Fusce tincidunt lacus nec bibendum facilisis. Donec sem massa, semper sed egestas vel, volutpat eget lacus.</p>,
				<p>Mauris volutpat diam non pellentesque fermentum. Donec at risus tempor, gravida libero molestie, facilisis ex. Nulla in massa in eros mollis condimentum ac non augue. Nunc pretium mauris a tristique mollis. Curabitur eu varius dui. Aenean nulla ipsum, viverra nec rutrum vel, sollicitudin ac lorem. Duis dictum fermentum vestibulum. Vestibulum interdum justo ac erat fringilla mollis. Nullam ut efficitur arcu, et accumsan ligula. Proin blandit ex vel nibh tempor efficitur. Aenean vestibulum odio lacus, ut convallis libero ultrices quis. Cras nec eros ipsum. Quisque ac justo a lacus luctus finibus. Sed dignissim lacus dictum, viverra erat ut, suscipit est. Nunc eget varius turpis. Proin porta arcu quis semper fermentum.</p>
			],
		}


		return ( 
			<div className="Etext"> 
				<NavBar NavPage={this.props.HomePage} /> 

				<div className="Etext-Title"> Etext </div> 


				Mary had a little <Modal modal={lamb}/>. Bob has a <Modal modal={puppy}/>. Esar bought a <Modal modal={lorem} />.
			</div> 
		)
	};
}

export default Etext;

/*
 
props = {
    text: "",
    header: "",
    title: "",
    img: "",
    content: "",
}
 */
