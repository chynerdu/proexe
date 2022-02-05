import {GET_USERS_SUCCESS, CREATE_USER_SUCCESS, EDIT_USER_SUCCESS, DELETE_USER_SUCCESS, ISFETCHING} from "../actions"

const initialState = {
    userList: [],
    isFetching: false
}

const handlers = {
    [GET_USERS_SUCCESS] : (state, {userList}) => ({...state, userList}),
    [CREATE_USER_SUCCESS] : (state, {userItem}) => {
       
        return ({...state, userList: state.userList.concat(userItem)})},
    [EDIT_USER_SUCCESS] : (state, {userItem, userIndex}) => {
       
        let userClone = [...state.userList]
        userClone[userIndex] = userItem
       return {...state, userList: userClone}
    },
    [DELETE_USER_SUCCESS] : (state, {userId}) => {
        
         const filteredList = state.userList.filter((value, index) => value.id != userId
            )
            
       return {...state, userList: filteredList}
    },
    [ISFETCHING]:  (state, {value})=> ({...state, isFetching: value})

    }
    

export default {initialState, handlers}