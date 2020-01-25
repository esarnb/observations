import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

/**
 * Usage
 * 
 * <Modal modal={{
    text: "text",
    header: "header",
    title: "title",
    img: "https://www.some.image.com/img.png",
    imgHeight: "300",
    imgWidth: "300",
    content: [component contents],
  }}/>
 */

export default class ModalScroll extends React.Component {

  constructor(props) {
		super(props);
		this.state = { modalOpen: false }; 
	}

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal 
        trigger={<a onClick={this.handleOpen}>{this.props.modal.text}</a>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>{this.props.modal.header}</Modal.Header>
        <Modal.Content image>
        <Image wrapped/>
          <Modal.Description>
            <Header>{this.props.modal.title}</Header>
              <Image wrapped floated='left' src={this.props.modal.img} size={this.props.modal.imgSize}/>
              <p>{this.props.modal.content}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={this.handleClose}>
            Continue <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
