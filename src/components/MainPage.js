import React from 'react';
import Home from './Home';
import Form from './Form';
import Confirmation from './ConfirmationPage'

const products = {
  alternativeContainer: {
    title: 'Alternative Container (2-000)',
    description: 'Cardboard Box',
    imageSrc: 'https://dazl12ygp0r17.cloudfront.net/douglassandzook/products/Alternative-Container.jpg?1542415893',
    price: '$58.00',
    disclaimer: 'The Law requires the use of a cremation container to encase the body during the cremation process. Our cremation container is a basic cardboard box.'
  },
  urn: {
    title: 'Basic Plastic Urn',
    description: 'Plastic Urn',
    imageSrc: 'https://dazl12ygp0r17.cloudfront.net/douglassandzook/products/Plastic-Urn.jpg?1551682610',
    price: '$34.00'
  }
}

class MainPage extends React.Component {
  state = {
    step: 1
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  render(){
    const {step} = this.state;
    switch(step) {
      case 1:
          return <Home
                  nextStep={this.nextStep}
                  getProducts={products}
                  />

      case 2:
          return <Form
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  />

      case 3:
          return <Confirmation getProducts={products}/>

      default:
          return
    }
  }
}

export default MainPage;
