import React from 'react';

export default class ContactInfo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formControls: {
        email: {
          value: ''
        },
        phone: {
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
    }, () => this.props.dataToChild(this.state) );

  }



  render(){
    return (
        <div className="ui form">
          <div className="two fields">
            <div className="field">
              <label>Email Address</label>
              <input type="text" name="email" placeholder="Email Address" value={this.state.formControls.email.value} onChange={this.handleChange} />
            </div>
            <div className="field">
              <label>Phone Number</label>
              <input type="text" name="phone" placeholder="Phone Number" value={this.state.formControls.phone.value} onChange={this.handleChange} />
            </div>
          </div>
        </div>
    )
  }
}
