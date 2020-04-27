import React from 'react';
import Checkbox from './Checkbox';
import Relationship from './Relationship';
import SelectField from './SelectField';
import NameForm from './NameForm';
import Address from './Address';
import ContactInfo from './ContactInfo';


const data = {
  location: ['Hospital', 'Residence', 'Nursing Home', 'Morgue', 'Another Funeral Home'],
  relationship: ['Spouse','Domestic partner', 'Adult Child', 'Parent','Adult Sibling', 'Grandparent', 'Adult grandchild','Adult niece/nephew', 'Adult aunt/uncle', 'Adult great grandchild','Great grandparent', 'Adult first cousin', 'Agent with Power of Attorney (Healthcare)', 'Conservator of the person', 'Conservator of the estate', 'Public Administrator', 'other'],
  timeOfServices: ['Immediate Need', 'Anticipate needing your services within 30 days', 'Preplan for future needs']
}

class FormPartB extends React.Component {
  constructor(props) {
    super(props)
    this.state = { timeOfNeed: null, locatedAt: data.location[0]}
  }

  dataFromNameForm = (data) => {
    this.props.dataToChild(data)
  }

  dataFromContactInfo = (data) => {
    this.props.contactData(data)
  }

  locationFromSelect = (data) => {
    this.setState({
      locatedAt: data
    }, this.props.locatedType(data))
  }

  addressFields = data => {
    this.props.address(data)
  }

  relationFromSelect = (data) => {
    //sending relation to info back to Form
    this.props.relationship(data)
  }

  lovedOneName = (data) => {
    //sending loved one full name back to Form
    this.props.lovedOneInfo(data)
  }

  livingStatus = (status) => {
    this.props.isAlive(status)
  }


  render () {
    const timeOfNeed = this.state.timeOfNeed;
    let display;
    let address = <Address facility={this.state.locatedAt} dataFromAddress={this.addressFields}/>;


    if(timeOfNeed === 'now') {
      display = <div>
        <Relationship isLiving={this.livingStatus} selectData={data} dataToChild={this.dataFromNameForm} location={this.locationFromSelect} relationTo={this.relationFromSelect}/>
        {address}
      </div>
    }
     else if (timeOfNeed === '30days') {
      display = <div>
        <NameForm whichContact="Please share with us the legal name of your loved one." dataToChild={this.lovedOneName} />
        <SelectField
          label='How are you related to your loved one?'
          value={data.relationship}
          selectInfo={this.lovedOneRelation}
        />
        <SelectField
          label='Where is your loved one currently?'
          value={data.location.slice(0,3)}
          selectInfo={this.locationFromSelect}
        />
        {address}
      </div>
    }
     else if (timeOfNeed === 'later') {
      display = <div>
      <NameForm whichContact="Please share with us the legal name of your loved one." dataToChild={this.lovedOneName} />
      <SelectField
        label='How are you related to your loved one'
        value={data.relationship}
        selectInfo={this.relationFromSelect}
      />
      </div>
    }


    return (
      <div>
        <p><strong>Do you have an immediate need, anticipate needing our services within 30 days, or wish to preplan for future needs?</strong></p>
        <div className="ui checkbox">
          <Checkbox
            value=""
            name="needSelect"
            label="Immediate need"
            onChange={() => { this.setState({ timeOfNeed: 'now' })}}
          />
          <Checkbox
            value=""
            name="needSelect"
            label="Anticipate needing your services within 30 days."
            onChange={() => { this.setState({ timeOfNeed: '30days' })}}
          />
          <Checkbox
            value=""
            name="needSelect"
            label="Preplan for future needs"
            onChange={() => { this.setState({ timeOfNeed: 'later' })}}
          />
          {/*<SelectField
            value={data.timeOfServices}
            selectInfo={this.relationFromSelect}
          />*/}
        </div>
        {timeOfNeed !== null &&
          <div>
            <NameForm whichContact="What is your legal name?" dataToChild={this.dataFromNameForm} />
            <ContactInfo dataToChild={this.dataFromContactInfo} />
          </div>
         }
        {display}
        {/* {display && <input type="submit" onClick={this.submitForm} /> }*/}
      </div>
    )
  }
}

export default FormPartB;
