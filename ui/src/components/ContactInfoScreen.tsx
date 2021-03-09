import React, { useState } from 'react'
import { Grid, Header, Form, Segment, Button } from 'semantic-ui-react'
import { deploymentMode, DeploymentMode } from '../config'

const ContactInfoScreen = () => {
  const [title, setTitle] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [pincode, setPincode] = useState('')
  const [typeOfId, setTypeOfId] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const handleDablLogin = () => {}
  const handleSubmit = () => {}

  const titles = [
    { key: 'mr', text: 'Mr', value: 'mr' },
    { key: 'mrs', text: 'Mrs', value: 'mrs' },
    { key: 'ms', text: 'Ms', value: 'ms' },
  ]
  const martialStatuss = [
    { key: 'married', text: 'Married', value: 'married' },
    { key: 'unmarried', text: 'Unmarried', value: 'unmarried' },
    { key: 'divorced', text: 'Divorced', value: 'divorced' },
  ]
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          as='h1'
          textAlign='center'
          size='huge'
          style={{ color: '#223668' }}
        >
          <Header.Content>De-Loan via</Header.Content>
        </Header>
        <Form size='large' className='test-select-login-screen'>
          <Segment>
            {deploymentMode !== DeploymentMode.PROD_DABL ? (
              <>
                {/* FORM_BEGIN */}
                <Form.Select
                  compact
                  options={titles}
                  fluid
                  icon='title'
                  iconPosition='left'
                  placeholder='Title'
                  value={title}
                  className='test-select-username-field'
                  onChange={(e, data) => setTitle(data.value?.toString() || '')}
                />
                <Form.Input
                  icon='first_name'
                  iconPosition='left'
                  placeholder='First Name'
                  value={firstName}
                  className='test-select-username-field'
                  onChange={(e) => setFirstName(e.currentTarget.value)}
                />
                <Form.Input
                  fluid
                  icon='last_name'
                  iconPosition='left'
                  placeholder='Last Name'
                  value={lastName}
                  className='test-select-username-field'
                  onChange={(e) => setLastName(e.currentTarget.value)}
                />
                <Form.Input
                  fluid
                  icon='birthdate'
                  iconPosition='left'
                  placeholder='Birthdate'
                  value={birthDate}
                  className='test-select-username-field'
                  onChange={(e) => setBirthDate(e.currentTarget.value)}
                />
                <Form.Select
                  options={martialStatuss}
                  fluid
                  icon='marital_status'
                  iconPosition='left'
                  placeholder='Marital Status'
                  value={maritalStatus}
                  className='test-select-username-field'
                  onChange={(e, data) =>
                    setMaritalStatus(data.value?.toString() || '')
                  }
                />
                <Form.Input
                  fluid
                  icon='email'
                  iconPosition='left'
                  placeholder='Email'
                  value={email}
                  className='test-select-username-field'
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <Form.Input
                  fluid
                  icon='phone_number'
                  iconPosition='left'
                  placeholder='Phone Number'
                  value={phoneNumber}
                  className='test-select-username-field'
                  onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                />
                <Form.Input
                  fluid
                  icon='city'
                  iconPosition='left'
                  placeholder='City'
                  value={city}
                  className='test-select-username-field'
                  onChange={(e) => setCity(e.currentTarget.value)}
                />
                <Form.Input
                  fluid
                  icon='state'
                  iconPosition='left'
                  placeholder='State'
                  value={state}
                  className='test-select-username-field'
                  onChange={(e) => setState(e.currentTarget.value)}
                />
                <Form.Input
                  fluid
                  icon='street_address'
                  iconPosition='left'
                  placeholder='Street Address'
                  value={streetAddress}
                  className='test-select-username-field'
                  onChange={(e) => setStreetAddress(e.currentTarget.value)}
                />
                <Form.Input
                  fluid
                  icon='pincode'
                  iconPosition='left'
                  placeholder='Pin Code'
                  value={pincode}
                  className='test-select-username-field'
                  onChange={(e) => setPincode(e.currentTarget.value)}
                />
                <Form.Input
                  fluid
                  icon='type_of_id'
                  iconPosition='left'
                  placeholder='Type of ID'
                  value={typeOfId}
                  className='test-select-username-field'
                  onChange={(e) => setTypeOfId(e.currentTarget.value)}
                />
                <Form.Input
                  fluid
                  icon='id_number'
                  iconPosition='left'
                  placeholder='ID Number'
                  value={idNumber}
                  className='test-select-username-field'
                  onChange={(e) => setIdNumber(e.currentTarget.value)}
                />
                <Button
                  primary
                  fluid
                  className='test-select-login-button'
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                {/* FORM_END */}
              </>
            ) : (
              <Button primary fluid onClick={handleDablLogin}>
                Log in with DABL
              </Button>
            )}
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default ContactInfoScreen
