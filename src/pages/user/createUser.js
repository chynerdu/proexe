import React from "react";
import CreateUserForm from "../../components/createUserForm"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';


function CreateUser() {
    return <div>
        <MDBContainer className="mt-72" >
        <MDBRow className='g-5'>
       <MDBCol md="8" offsetMd="2"  >
        <div className="mt-30 d-flex justify-content-between">
            <h3>Create User</h3>
            

        </div>
        < CreateUserForm  />
        </MDBCol>
        </MDBRow>
        </MDBContainer>
    </div>
}

export default CreateUser