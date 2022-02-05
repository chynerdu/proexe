import UserList from "../../pages/user/userList";
import userService from "../../services/userServices"
import * as types from './index';


export const getUsers = (prevUserList) => async(dispatch) => {
    try {
        dispatch({type: types.ISFETCHING, value: true})
        const data = await userService.getUsers();
        
        // update state only when we have new data length inorder not to overwrite new item  being created and saved in state
        // if (data.data.length > prevUserList.length )
        
        if (prevUserList.length == 0) 
        dispatch({type: types.GET_USERS_SUCCESS, userList: data.data})
        dispatch({type: types.ISFETCHING, value: false})
    } catch(e) {
        dispatch({type: types.GET_USERS_ERROR})
        dispatch({type: types.ISFETCHING, value: false})
        throw e
    }
}

export const createUser = (payload) => async(dispatch) => {
     try {
        dispatch({type: types.CREATE_USER_SUCCESS, userItem: payload})
     } catch (e) {
        console.log('error ',e)
     }
 }


 export const editUser = (payload, userIndex) => async(dispatch) => {
     try {  
        dispatch({type: types.EDIT_USER_SUCCESS, userItem: payload, userIndex: userIndex})
     } catch(e) {
        console.log('error ', e)
     }


 }


 export const deleteUserAction = (userId) => async(dispatch) => {
        try {
          
          dispatch({type: types.DELETE_USER_SUCCESS, userId: userId})
          return
        } catch (e) {
            console.log('error ', e)
        }


 }


 export const sortAscending = () => async(dispatch) => {
    dispatch({type: types.SORT_ASCENDING})
}


export const sortDescending = () => async(dispatch) => {
    dispatch({type: types.SORT_DESCENDING})
}