import React, {useEffect, useState} from "react";
import EditUserForm from "../../components/editUserForm"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { useParams } from "react-router-dom";
import {  useSelector } from "react-redux";


function EditUser() {
    const userList = useSelector((state) => state.users.userList)
    const [userItem, setUserItem] = useState({})
    const [userIndex, setUserIndex] = useState()
    const { id } = useParams();
    
       
    useEffect(() =>{
        getUser()
    },[])

    function getUser() {  
        const selectedUser =  userList.find((user, index) =>{
             if (user.id == parseInt(id)) setUserIndex(index)
           return user.id == parseInt(id)});
        setUserItem(selectedUser)
        
        console.log('user item ', selectedUser) 
    }
    
    return <div>
        <MDBContainer className="mt-72" >
        <MDBRow className='g-5'>
        <MDBCol md="8" offsetMd="2"  >
        <div className="mt-30 d-flex justify-content-between">
            <h3>Edit User</h3>
            

        </div>
        < EditUserForm  user={userItem} userIndex={userIndex} userList= {userList} />
        </MDBCol>
        </MDBRow>
        </MDBContainer>
    </div>
}

export default EditUser