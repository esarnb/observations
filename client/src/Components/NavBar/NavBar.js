import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import "./NavBar.css";

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { activeItem: 'Home', userLogin: "Login" };
	}

	handleItemClick = () => { return window.location.reload() }

	render() {
		const { activeItem } = this.state
		const navBtnColor = "#bbb"
		return (
			<div className="NavBar">
				<Menu secondary>
					<Menu.Item
						name='Etext'
						active={activeItem === 'Etext'}
						onClick={this.handleItemClick}
						inverted color='teal'
						style={{color: navBtnColor}}
					/>
				</Menu>
			</div>
		)
	}
}