import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: props.label, changeHandler: props.onChange, value: props.value, name: props.name }
  }

  render(){
    let label = this.state.label
    return (
      <div className="ui form">
        <div className="grouped fields">
          <div className="field">
            <div className="ui checkbox">
            <input
              type="radio"
              name={this.state.name}
              onChange={this.state.changeHandler}
               />
            <label>{label}</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Checkbox;
