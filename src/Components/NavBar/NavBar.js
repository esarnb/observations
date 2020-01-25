import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import "./NavBar.css";

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { activeItem: 'home' };
	}

	componentDidMount() {
		// 
	}

	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name })
		console.log("PROPS: ", this.props)
		this.props.NavPage(name)
	}

	render() {
		const { activeItem } = this.state

		return (
			<div className="NavBar">
				<Menu secondary>
					<Menu.Item
						name='Home'
						active={activeItem === 'home'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name='Etext'
						active={activeItem === 'Etext'}
						onClick={this.handleItemClick}
					/>
					
					<Menu.Menu position='right'>
						
						<Menu.Item
							name='logout'
							active={activeItem === 'logout'}
							onClick={this.handleItemClick}
						/>
						
					</Menu.Menu>
				</Menu>
			</div>
		)
	}
}