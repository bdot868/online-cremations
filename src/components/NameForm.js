import React from 'react';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formControls: {
        firstName: {
          value: ''
        },
        middleName: {
          value: ''
        },
        lastName: {
          value: ''
        }
      },
      contactFor: this.props.whichContact
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
    }, () => this.props.dataToChild(this.state) );

  }



  render(){
    return (
        <div className="ui form">
          <h3>{this.state.contactFor}</h3>
          <div className="three fields">
            <div className="field">
              <label>First Name</label>
              <input type="text" name="firstName" placeholder="First Name" value={this.state.formControls.firstName.value} onChange={this.handleChange} />
            </div>
            <div className="field">
              <label>Middle Name</label>
              <input type="text" name="middleName" placeholder="Middle Name" value={this.state.formControls.middleName.value} onChange={this.handleChange} />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input type="text" name="lastName" placeholder="Last Name" value={this.state.formControls.lastName.value} onChange={this.handleChange} />
            </div>
          </div>
        </div>
    )
  }
}
