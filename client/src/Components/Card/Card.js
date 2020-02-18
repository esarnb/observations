import React from "react";
// import "./Frame.css";

function Card(props) {
    return (
        <React.Fragment>
        <div class="ui special cards">
        <div class="card">
            <div class="blurring dimmable image">
            <div class="ui dimmer">
                <div class="content">
                <div class="center">
                    <div class={`ui inverted button onClick=${() => props.data.hoverButton.func}`}>{props.data.hoverButton.name}</div>
                </div>
                </div>
            </div>
            <img src={props.data.img} alt={props.data.alt}/>
            </div>
            <div class="content">
            <a href="/#" class="header">{props.data.header}</a>
            <div class="meta">
                <span class="date">{props.data.body}</span>
            </div>
            </div>
            <div class="extra content">
                <a href="/#"><i class="">{props.data.footer}</i></a>
            </div>
        </div>
        </div>
        </React.Fragment>
    )
}

export default Card;

/*


class Frame extends Component {
	constructor(props) {
		super(props);
		this.state = {  }; 
	}

    componentDidMount() {
		// 
	}
	
	render() {
		return (
            <div className="Frame">
                <div className="Frame-Title">
                    Frame
                </div>
            </div>
		)
	};
}

*/