
import React, { useEffect } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
 
} from 'mdb-react-ui-kit';
import { useUserHook } from '../hooks/useUserHook';
import { createUser, getUsers } from "../state/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'

const initialValues = {
  name: null,
  username: null,
  email: null,
  city: null
}

export default function CreateUserForm() {
  const userList = useSelector((state) => state.users.userList)
  const {updateStateValues, submitHandler} = useUserHook(initialValues, userList);
  

  // get userlist in order to push new user object to state since we are not calling any API
    const getUserList = async() => {
        try {
          const data =   await getUsers(userList)(dispatch)
        } catch(e) {
            console.log('error ', e)
        }
    }

    useEffect(() =>{
        getUserList()
    },[])
    const dispatch = useDispatch();
  
  return (
    <div className="mt-30">
       <MDBCol  className='shadow-2 p-30' >
      < div  >
         <div className='d-flex flex-row-reverse mb-30'>
         <MDBBtn outline color="danger"><Link to="/">Cancel</Link></MDBBtn>
         </div>
         </div>
    <form  onSubmit={(e) => submitHandler(e, createUser)}> 
    <MDBInput className='mb-4' required type='name' id='name' label='Name' onChange= {(e) => updateStateValues(e)} />
    <MDBInput className='mb-4' required type='username' id='username' label='Username' onChange= {(e) => updateStateValues(e)} />
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='email' required label='Email'  onChange= {(e) => updateStateValues(e)}/>
        </MDBCol>
        <MDBCol>
          <MDBInput id='city' required label='City' onChange= {(e) => updateStateValues(e)} />
        </MDBCol>
      </MDBRow>

      

     

      <MDBBtn type='submit'color='success' className='mb-4' block>
        Submit
      </MDBBtn>

      
    </form>
    </MDBCol>
    </div>
  );
}