import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import "./NavBar.css";

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { activeItem: 'Home', userLogin: "Login" };
	}

	componentDidMount() {
		// 
	}

	handleItemClick = (e, { name }) => {
		// <Redirect><Link /></Redirect>
		return window.location.reload();
	}

	render() {
		const { activeItem } = this.state
		const navBtnColor = "#bbb"
		return (
			<div className="NavBar">
				<Menu secondary>
					{/* <Menu.Item
						name='Home'
						active={activeItem === 'Home'}
						// onClick={this.handleItemClick}
						inverted color='teal'
						style={{color: navBtnColor}}

					/> */}
					<Menu.Item
						name='Etext'
						active={activeItem === 'Etext'}
						onClick={this.handleItemClick}
						inverted color='teal'
						style={{color: navBtnColor}}

					/>
					
					{/* <Menu.Menu position='right'>
						
						<Menu.Item
							name={this.state.userLogin}
							active={activeItem === this.state.userLogin}
							onClick={this.handleItemClick}
							style={{color: navBtnColor}}
						/>
						
					</Menu.Menu> */}
				</Menu>
			</div>
		)
	}
}