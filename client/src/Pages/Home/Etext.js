import React, { Component } from "react";
import Book from "./Book/pages"
import "./Etext.css";
import { Container, Header, Icon, Pagination } from 'semantic-ui-react'

class Etext extends Component {
	constructor(props) {
		super(props);
		this.state = { activePage: 1 };
	}

	handlePaginationChange = (e, { activePage }) => { this.setState({ activePage }) }

	render() {

		return (
			<div className="Etext">
				{this.state.activePage > 1 ? <Header as="h2" className="Headers center"> Day {parseInt(this.state.activePage) - 1} - <a href="https://tourbuilder.withgoogle.com/tour/ahJzfmd3ZWItdG91cmJ1aWxkZXJyEQsSBFRvdXIYgIDgmOCh0QoM">Tour</a> <h2 className="center Etext-Title">Observations made by John Bartram.</h2> </Header> : <br />}
				<Container fluid className="Contents"> {Book[this.state.activePage]} </Container>

				<div className="centerDiv">
					<Pagination defaultActivePage={this.state.activePage}
						ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
						firstItem={{ content: <Icon name='angle double left' />, icon: true }}
						lastItem={{ content: <Icon name='angle double right' />, icon: true }}
						prevItem={{ content: <Icon name='angle left' />, icon: true }}
						nextItem={{ content: <Icon name='angle right' />, icon: true }}
						totalPages={Book.length - 1}
						onPageChange={this.handlePaginationChange}
						className="paging" />
				</div>
			</div>
		)
	};
}

export default Etext;
