import React from 'react'
import { Header, Image, Modal, List } from 'semantic-ui-react'

const ProductModal = (props) => {
  return (

    <Modal trigger={<List.Item className="modal-trigger">{props.product.title}</List.Item>} closeIcon>
      {/*<Modal.Header>Select a Photo</Modal.Header>*/}
      <Modal.Content image>
        <Image wrapped size='large' src={props.product.imageSrc} />
        <Modal.Description>
          <Header>{props.product.title}</Header>
          <p><strong>
            {props.product.price}
          </strong></p>
          <p className="disclaimer"><em>
          {props.product.disclaimer}
          </em></p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default ProductModal;
