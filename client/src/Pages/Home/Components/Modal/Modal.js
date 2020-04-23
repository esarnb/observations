import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

export default class ModalScroll extends React.Component {

  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal trigger={<button style={{ textDecoration: "underline", backgroundColor: "transparent", borderColor: "transparent", color: "lightblue", padding: 0 }} onClick={this.handleOpen}>{this.props.modal.text}</button>} open={this.state.modalOpen} onClose={this.handleClose}>

        <Modal.Header>{this.props.modal.text}</Modal.Header>
        <Modal.Content image>
          <Image wrapped />
          <Modal.Description>
            <Header>{this.props.modal.title}</Header>
            <Image wrapped floated='left' src={this.props.modal.img} size={this.props.modal.imgSize} />
            <p>{this.props.modal.content}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <p style={{ float: "left", fontSize: "small" }}>Source: <a href={this.props.modal.src} target="_blank" rel="noopener noreferrer" >{this.props.modal.src}</a> </p>
          <Button primary onClick={this.handleClose}>
            Continue <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
