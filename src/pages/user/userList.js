import React, { useEffect } from "react";
import UserTable from "../../components/userListTable"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../state/actions/userActions";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import Loader from "../../components/loader"

function UserList() {
    const userList = useSelector((state) => state.users.userList)
    const isFetching = useSelector((state) => state.isFetching)
    

    console.log('user list in state ', userList)
    const getUserList = async() => {
        try {
          const data =   await getUsers(userList)(dispatch)
        //   console.log('userrs 2 ', data);
          console.log('users from state 2 ', userList);
        } catch(e) {
            console.log('error ', e)
        }
    }

    useEffect(() =>{
        getUserList()
    },[])
    const dispatch = useDispatch();

    // if(isFetching) {
    //     return <div className="mt-72"><Loader/></div>
      
    // }

   
   
    
    return <div>
       <MDBContainer >
        <MDBRow className='g-5'>
       <MDBCol md="10" offsetMd="1" >
        <div className="mt-72 d-flex justify-content-between">
            <h3>User List</h3>
           <Link to="/create-user"> <MDBBtn>Create user</MDBBtn></Link>

        </div>
       
        < UserTable userList= {userList} />
       
        </MDBCol>
        </MDBRow>
        </MDBContainer>

       
    </div>
}

export default UserList