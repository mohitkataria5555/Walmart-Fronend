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
    MDBCardText,
    MDBCardLink,
  }
  from 'mdb-react-ui-kit';

function Login() {
  return (
    <div>
        <CustomNavbar/>
        <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
          <img
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Walmart_Spark.svg/1925px-Walmart_Spark.svg.png"
        style={{
          height: 40,
          width: 40
        }}
      />
            <span className="text-primary">Shop Anywhere Anytime!</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>

          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>
              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>


              <MDBBtn className='w-100 mb-4' size='md'>Sign in </MDBBtn>
              <MDBCardText>Don't have an Account ? Sign Up  </MDBCardText>
              <MDBCardLink href='/signup'> Sign Up</MDBCardLink>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  

    </div>
  )
}

export default Login
