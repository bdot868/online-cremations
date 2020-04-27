import React from 'react';
import axios from 'axios';
import FormPartB from './FormPartB';
import Checkbox from './Checkbox';
import NameForm from './NameForm';
import ContactInfo from './ContactInfo';
import Cart from './Cart';
import SubmittedContactInfo from './SubmittedContactInfo';
import FuneralHome from './FuneralHomeInfo'
import { Button } from 'semantic-ui-react'


const validEmailRegex =
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

export default class Form extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        selectedBox: null,
        client: {
          firstName: '',
          middleName: '',
          lastName: '',
          email: '',
          phone: ''
        },
        errors: {
          client: {
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            phone: ''
          }
        },
        lovedOne: {
          firstName: '',
          middleName: '',
          lastName: '',
          passedAway: '',
          location: '',
          address: {
            facility: '',
            streetAddress: '',
            city: '',
            stateField: '',
            phoneNumber: ''
          },
          relationTo: ''
        }
      };
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  dataFromNameForm = (data) => {
    this.setState({
      client: {
        firstName: data.formControls.firstName.value,
        middleName: data.formControls.middleName.value,
        lastName: data.formControls.lastName.value,
      }
    })
  }

  dataFromContactInfo = (data) => {
    this.setState({
      client: {
        ...this.state.client,
        email: data.formControls.email.value,
        phone: data.formControls.phone.value,
      }
    })
  }

  lovedOneName = (data) => {
    this.setState({
      lovedOne: {
        firstName: data.formControls.firstName.value,
        middleName: data.formControls.middleName.value,
        lastName: data.formControls.lastName.value,
      }
    })
  }

  isAlive = (status) => {
    this.setState({
      lovedOne: {
        ...this.state.lovedOne,
        passedAway: status
      }
    })
  }

  locationOf = (data) => {
    this.setState({
      lovedOne: {
        ...this.state.lovedOne,
        location: data
      }
    })
  }

  lovedOneAddress = (data) => {
    this.setState({
      lovedOne: {
        ...this.state.lovedOne,
        address: {
          facilityName: data.formControls.facilityName.value,
          streetAddress: data.formControls.streetAddress.value,
          city: data.formControls.city.value,
          stateField: data.formControls.stateField.value,
          phoneNumber: data.formControls.phoneNumber.value
        }
      }
    })
  }

  relation = (data) => {
    this.setState({
      lovedOne: {
        ...this.state.lovedOne,
        relationTo: data
      }
    })
  }

  resetForm = () => {
        this.setState({
          selectedBox: null,
          client: {
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            phone: ''
          },
          lovedOne: {
            firstName: '',
            middleName: '',
            lastName: '',
            passedAway: '',
            location: '',
            address: {
              facility: '',
              streetAddress: '',
              city: '',
              stateField: '',
              phoneNumber: ''
            },
            relationTo: ''
          }
        });
    }

  handleSubmit = async (event) => {
    event.preventDefault()
    console.log(this.state);
    const form = await axios.post('/api/form', {
        clientFname: this.state.client.firstName,
        clientMname: this.state.client.middleName,
        clientLname: this.state.client.lastName,
        email: this.state.client.email,
        phone: this.state.client.phone,
        lovedOneFname: this.state.lovedOne.firstName,
        lovedOneLname: this.state.lovedOne.lastName,
        passed: this.state.lovedOne.passedAway,
        facility: this.state.lovedOne.address.facility,
        address: this.state.lovedOne.address.streetAddress,
        city: this.state.lovedOne.address.city,
        state: this.state.lovedOne.address.stateField,
        phoneNumber: this.state.lovedOne.address.phoneNumber,
        relation: this.state.lovedOne.relationTo,
      })
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = (e) =>{
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const selectedBox = this.state.selectedBox;
    let name = this.state.client.firstName;
    let display;
    if(selectedBox === 'self') {
      display = <div>
          <NameForm whichContact="Please share with us your full legal name." dataToChild={this.dataFromNameForm} />
          <ContactInfo dataToChild={this.dataFromContactInfo}/>
        </div>
    } else if (selectedBox === 'lovedOne') {
      display =
      <FormPartB locatedType={this.locationOf} address={this.lovedOneAddress} relationship={this.relation} isAlive={this.isAlive} lovedOneInfo={this.lovedOneName} dataToChild={this.dataFromNameForm} contactData={this.dataFromContactInfo} />
    }

    return (
      <div className="ui internally celled grid">
        <div className="ten wide column">
          <div>
          <p>
            Following are a few questions to help guide you through the arrangement process.
            If, at any time, you have any questions, please call (855)-852-9505, and one of our caring and professional Counselors
            will assist you.
          </p>
          <p>
            We also provide full cremation services. If you are interested in holding a memorial service after the cremation, or if you wish to have a Funeral
            service prior to the cremation, we can help you to plan the way that you wish to celebrate your loved one, exactly as you wish to celebrate them.
            To see the other options we offer, please call (855)-852-9505 and speak with one of our Counselors.
          </p>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="">
              <p><strong>Today, I would like to make arrangements for:</strong></p>
              <Checkbox
                value="lovedOne"
                name="clientSelect"
                label="Someone I love and/or care for."
                onChange={() => { this.setState({ selectedBox: 'lovedOne' })}}
              />
              <Checkbox
                value="self"
                name="clientSelect"
                label="Myself"
                onChange={() => { this.setState({ selectedBox: 'self' })}}
              />
              {display}
            </div>
            <div>
              <Button className="ui left floated" onClick={this.back}>Back</Button>
              {name !== '' && <Button className="ui right floated" onClick={this.saveAndContinue} type="submit">Submit</Button>}
            </div>
          </form>
        </div>
        <div className="six wide column">
          <div className="ui sticky">
            <div className="ui segment">
              <h3>SUMMARY OF CART AND SERVICES</h3>
              <div className="ui divider"></div>
              <Cart />
            </div>
            <div className="ui segment">
              <h3>FUNERAL HOME DETAILS</h3>
              <div className="ui divider"></div>
              <FuneralHome />
            </div>
            {}
            <div className="ui segment">
              <h3>CONTACT INFORMATION AS SUBMITTED</h3>
              <div className="ui divider"></div>
              <SubmittedContactInfo data={this.state}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
