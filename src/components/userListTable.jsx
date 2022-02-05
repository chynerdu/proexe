import React, {useState} from 'react';
import { MDBTable, MDBTableHead, MDBBtn, MDBTableBody, MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter, } from 'mdb-react-ui-kit';
  import { useNavigate } from "react-router-dom";
  import { useDispatch } from 'react-redux';
  import { deleteUserAction } from "../state/actions/userActions";

export default function UserTable(props) {
  const dispatch = useDispatch()
  const [basicModal, setBasicModal] = useState(false);
  const navigate = useNavigate();
  const [userId, setUserId] = useState()

  const toggleShow = (userId) =>{
     setBasicModal(!basicModal)
     setUserId(userId)
  };
  console.log('users here ', props.userList)
  const userLists  = props.userList;

  function deleteUser() {
    // let index = userLists.findIndex((user) => user.id == parseInt(userId))
   const result =  deleteUserAction(userId)(dispatch)
   toggleShow(userId)
    
  }

  return (
    <div className="mt-30">

 
    <MDBTable className='table-bordered' >
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Username</th>
          <th scope='col'>email</th>
          <th scope='col'>City</th>
          <th scope='col'>Edit</th>
          <th scope='col'>Delete</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
     { userLists.map((user, index) => 
        <tr>
          <th scope='row'>{user.id}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.address.city}</td>
          <td> <MDBBtn color='warning' size='sm' onClick={() => navigate(`/edit-user/${user.id}`)}>Edit</MDBBtn></td>
          <td> <MDBBtn  onClick={() => toggleShow(user.id)} color='danger' size='sm'>Delete</MDBBtn></td>
        </tr>
     )}
       
       
      </MDBTableBody>
    </MDBTable>

     {/* modal */}
     <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Confirm action</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={() =>toggleShow(userId)}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>Are you sure you want to delete this user?</MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color='dark' onClick={()=>toggleShow(userId)}>
              Cancel
            </MDBBtn>
            <MDBBtn color="danger" onClick={() => deleteUser(userId)}>Yes, Proceed</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </div>
  );
}