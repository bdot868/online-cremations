import React from 'react';

export default class AddressFields extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formControls: {
        facilityName: {
          value: ''
        },
        streetAddress: {
          value: ''
        },
        city: {
          value: ''
        },
        stateField: {
          value: ''
        },
        phoneNumber: {
          value: ''
        }
      }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value
        }
      }
    }, () => this.props.dataFromAddress(this.state) );
  }



  render(){
    let facility = this.props.facility;

    return (
      <div className="ui equal width form">
        <div className="fields">
          {facility !== 'Residence' && <div className="field">
             <label>Facility Name</label>
            <input type="text" name="facilityName" placeholder="Name of Facility" value={this.state.formControls.facilityName.value} onChange={this.handleChange}/>
          </div>}
          <div className="field">
            <label>Street Address</label>
            <input type="text" name="streetAddress" placeholder="Street" value={this.state.formControls.streetAddress.value} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="fields">
          <div className="field">
            <label>City</label>
            <input type="text" name="city" placeholder="City" value={this.state.formControls.city.value} onChange={this.handleChange}/>
          </div>
          <div className="field">
            <label>State</label>
            <input type="text" name="stateField" placeholder="State" value={this.state.formControls.stateField.value} onChange={this.handleChange}/>
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input type="text" name="phoneNumber" placeholder="Phone Number" value={this.state.formControls.phoneNumber.value} onChange={this.handleChange}/>
          </div>
        </div>
      </div>
    )
  }
}
