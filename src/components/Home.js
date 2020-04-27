import React from 'react';
import { List, Button } from 'semantic-ui-react'
import ProductModal from './ProductModal';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: props.getProducts
    }
  }

  saveAndContinue = (e) =>{
    e.preventDefault()
    this.props.nextStep()
  }

  render (){
    const { products } = this.state
    return (
          <div className="cremation-package">
            <div className="cremation-package-title">
              <div className="package-title">Essential Cremation Package</div>
              <div className="package-price">$1,995</div>
            </div>
            <div className="package-features">
              <p>This package features:</p>
              <List bulleted>
                <List.Item>Basic use of facilities & services</List.Item>
                <List.Item>Transfer of deceased into our care</List.Item>
                <List.Item>Refrigeration</List.Item>
                <List.Item>Crematory Fee</List.Item>
                <ProductModal product={products.alternativeContainer}/>
                <ProductModal product={products.urn}/>
                <List.Item>Death Certificate Processing</List.Item>
                <List.Item>Death Certificate (1)</List.Item>
                <List.Item>Permit (1)</List.Item>
              </List>
            </div>
            <div>
              <Button className="ui right floated" onClick={this.saveAndContinue}>Continue</Button>
            </div>
          </div>
    );
  }
}

export default Home;
