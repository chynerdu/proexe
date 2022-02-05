
import React, { useEffect, useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
 
} from 'mdb-react-ui-kit';
import { useUserHook } from '../hooks/useUserHook';
import { editUser } from "../state/actions/userActions";
import {Link} from 'react-router-dom'


export default function EditUserForm(props) {

const {user, userIndex, userList} = props

const [name, setName] = useState(user.name)
const [username, setUsername] = useState(user.username)
const [email, setEmail] = useState(user.email)
const [city, setCity] = useState(user.address?.city)


useEffect(() => {
  setName(user.name)
  setUsername(user.username)
  setEmail(user.email)
  setCity(user.address?.city)

},[user])


console.log('user in component ', props.user.username)
console.log('user in username ', name)


  // const userList = useSelector((state) => state.users.userList)
  const {editHandler} = useUserHook({}, userList);
  

  function submit(e) {
    try {
   const payload = {...props.user, name,
    username,
    email,
    address: { 
      ...props.user.address, 
     city: city }}   
    editHandler(e, payload, editUser, userIndex)

  } catch(e) {
   console.log('error ', e)
  }
  }
  
  return (
    <div className="mt-30">
       <MDBCol  className='shadow-2 p-30' >
      < div  >
         <div className='d-flex flex-row-reverse mb-30'>
         <MDBBtn outline color="danger"><Link to="/">Cancel</Link></MDBBtn>
         </div>
         </div>
    <form  onSubmit={(e) => submit(e)}> 
    <MDBInput className='mb-4' required type='name' value={name} id='name' label='Name' onChange= {(e) => setName(e.target.value)} />
    <MDBInput className='mb-4' required type='username' value={username}  id='username' label='Username' onChange= {(e) => setUsername(e.target.value)} />
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='email' required label='Email' value={email}  onChange= {(e) => setEmail(e.target.value)}/>
        </MDBCol>
        <MDBCol>
          <MDBInput id='city' required label='City' value={city} onChange= {(e) => setCity(e.target.value)} />
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