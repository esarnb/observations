import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import "./NavBar.css";

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { activeItem: 'home', userLogin: "Login" };
	}

	componentDidMount() {
		// 
	}

	handleItemClick = (e, { name }) => {
		
		console.log("PROPS: ", this.props)
		this.props.NavPage(name)

		name == "Login" ? this.setState({userLogin: "Logout"}) : name == "Logout" ? this.setState({userLogin: "Login"}) : this.setState({ activeItem: name })
	}

	render() {
		const { activeItem } = this.state

		return (
			<div className="NavBar">
				<Menu secondary>
					<Menu.Item
						name='Home'
						active={activeItem === 'Home'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name='Etext'
						active={activeItem === 'Etext'}
						onClick={this.handleItemClick}
					/>
					
					<Menu.Menu position='right'>
						
						<Menu.Item
							name={this.state.userLogin}
							active={activeItem === this.state.userLogin}
							onClick={this.handleItemClick}
						/>
						
					</Menu.Menu>
				</Menu>
			</div>
		)
	}
}