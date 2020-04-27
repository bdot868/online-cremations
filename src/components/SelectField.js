import React from 'react';

class SelectField extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value, label: props.label, selectedValue: props.value[0]
    }
    this.sendToParent = this.sendToParent.bind(this);
  }

  sendToParent = () => {
      this.props.selectInfo(this.state.selectedValue)
  }



  render() {
    return(
        <div className="fields">
            <h3>  {this.state.label}</h3>
              <select className="ui fluid dropdown" onChange={(e) => { this.setState({ selectedValue: e.target.value}, this.sendToParent)}}>
                {this.state.value.map( (item, index) => {
                  return <option key={index} value={item}>{item}</option>
                })}
          </select>
    </div>
    )
  }
}

export default SelectField;
