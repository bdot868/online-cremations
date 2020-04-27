import React from 'react'
import Cart from './Cart';
import FuneralHome from './FuneralHomeInfo';
import { Segment, Button, Image } from 'semantic-ui-react'

const ConfirmationModal = (props) => {
  console.log(props.getProducts);
  const products = props.getProducts;
  return (
  <div>
    <h1>Form Received!</h1>
    <p>
      Thank you for taking this important step to make cremation plans, in advance
      of need. One of our experienced and caring Advance Planning Advisors will be contacting
      you shortly. They will be able to guide you through the process and answer
      any of your questions to ensure your wishes are honored.
    </p>
    <Segment.Group horizontal>
      <Segment><Cart /></Segment>
      <Segment textAlign='center'>
        <h4>{products.urn.title}</h4>
        <Image wrapped size='small' src={products.urn.imageSrc} />
        <h4>{products.alternativeContainer.title}</h4>
        <Image wrapped size='small' src={products.alternativeContainer.imageSrc} />
      </Segment>
      <Segment><FuneralHome /></Segment>
    </Segment.Group>
    <p><em>
      Funeral planning is funded through the purchase of whole life insurance from
      National Guardian Life Insurance Company, Madison, WI (NGL). A qualified Forest Lawn®
      planning advisor, who has been both licensed by the state and appointed as an agent of
      NGL, can answer any questions. Forest Lawn Mortuary, licensed as
      Forest Lawn Memorial-Parks & Mortuaries and Douglass & Zook Funeral and Cremation Services,
      is an agent of NGL. National Guardian Life Insurance Company is not affiliated with
      The Guardian Life Insurance Company of America, aka The Guardian or Guardian Life.
    </em></p>
    <Button onClick={() => window.print()}>Print</Button>
  </div>
  )
}

export default ConfirmationModal;
