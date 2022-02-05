
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


export function useUserHook(initialValues, userList) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [values, setValues] = useState({...initialValues})
    const [isSubmitting, setIsSubmitting] = useState(false)


    const updateStateValues = (e) => {
        const {id, value} = e.target;    
        setValues({...values, [id]: value});
    }

    const generateRandomNumber = () =>{
     const range = userList.length + 2
    
    return Math.floor(Math.random() * range) + 1;
    }


    // generate random ids check if Id is already in use in userList 
    const id =() => {
        for(let i = 0; i < userList.length + 1; i++) {
            let genratedId = generateRandomNumber()
            let isUnique = userList.filter( user => user.id === genratedId ).length > 0
            if (!isUnique) return genratedId
            }
    }

    const submitHandler =  (e, dispatchFunction, ) => {
        e.preventDefault();
        const userId = id() 
        const {name, username, email, city} = values;
        
    // create new user object
    const newUserObject = {
        id: userId,
        name,
        username,
        email,
        address : {
            city
        }
    }

    const result = dispatchFunction(newUserObject)(dispatch)
    e.target.reset()
    navigate('/')
        
    }

    const editHandler = (e, payload, dispatchFunction, userIndex, ) => {
        try {
        e.preventDefault()
       const result = dispatchFunction(payload, userList, userIndex)(dispatch)
        e.target.reset()
        navigate('/')
        } catch(e) {
            console.log('error ', e)
        }

    }
    return {
        updateStateValues,
        submitHandler,
        editHandler
    }
}