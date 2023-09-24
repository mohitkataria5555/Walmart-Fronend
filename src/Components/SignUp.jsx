import React from 'react'
import CustomNavbar from './CustomNavbar'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio
}
from 'mdb-react-ui-kit';
import { useState } from 'react';


function SignUp() {

  const [user , setUser] = useState('');
  const onFieldNameChange=(event)=>{
    console.log(event.target.value)
  }

  const onFieldEmailChange=(event)=>{
    console.log(event.target.value)
  }
  return (
    <div>
    <CustomNavbar/>
    <MDBContainer fluid>

<MDBRow className='justify-content-center align-items-center m-5'>

  <MDBCard>
    <MDBCardBody className='px-4'>

      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

      <MDBRow>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Name' onChange={onFieldNameChange} size='lg' id='form1' type='text'/>
        </MDBCol>
        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form1' type='text'/>
        </MDBCol>
        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='About' size='lg' id='form1' type='text'/>
        </MDBCol>
        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='form1' type='text'/>
        </MDBCol>

      </MDBRow>

      <MDBRow>

        <MDBCol md='6' className='mb-4'>
          <h6 className="fw-bold">Gender: </h6>
          <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
          <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
          <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
        </MDBCol>

      </MDBRow>

      <MDBRow>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Email' onChange={onFieldEmailChange} size='lg' id='form4' type='email'/>
        </MDBCol>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel'/>
        </MDBCol>

      </MDBRow>

     
      <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>

    </MDBCardBody>
  </MDBCard>

</MDBRow>
</MDBContainer>
  
    </div>
  )
}

export default SignUp
