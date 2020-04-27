import React from 'react';
import NameForm from './NameForm';
import SelectField from './SelectField';


class Relationship extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: this.props, livingStatus: false,
    }
    this.isLiving = this.isLiving.bind(this)
  }

  dataFromNameForm = (data) => {
    console.log(data);
    this.props.dataToChild(data)
  }

  lovedOneLocation = (data) => {
    this.props.location(data)
  }

  lovedOneRelation = (data) => {
    this.props.relationTo(data)
  }

  isLiving = () => {
    let alive = this.state.livingStatus;
    this.props.isLiving(alive)
  }


  render () {
    return (
      <div>
        <NameForm whichContact="Please share with us the legal name of your loved one." dataToChild={this.lovedOneName} />
        <SelectField
          label='How are you related to your loved one'
          value={this.state.info.selectData.relationship}
          selectInfo={this.lovedOneRelation}
        />
        <SelectField
          label='Where is your loved one currently'
          value={this.state.info.selectData.location}
          selectInfo={this.lovedOneLocation}
        />
      </div>
    )
  }
}

export default Relationship;
