import React from 'react';
import NumberFormat from 'react-number-format'

class SubmittedContactInfo extends React.Component {
  render() {
    const client = this.props.data.client
    return (
      <div>
        <p><strong>Name: </strong> {client.firstName} {client.middleName} {client.lastName}</p>
        <p><strong>Phone: </strong><NumberFormat value={client.phone} displayType={'text'} format={'+1 (###) ### - ####'} /></p>
        <p><strong>Email: </strong> {client.email}</p>
      </div>
    )
  }
}

export default SubmittedContactInfo;
