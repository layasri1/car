import axios from 'axios';
import {message} from 'antd';

export const userLogin=(reqObj)=>async dispatch=>{
    dispatch({type:'LOADING', payload:true})
    try {
        const response=await axios.post('http://localhost:3004/api/users/login',reqObj)
        localStorage.setItem('user',JSON.stringify(response.data))
        message.success('Login Success')
        dispatch({type:'LOADING', payload:false})
    } catch (error) {
        console.log(error);
        message.error('Something went wrong')
        dispatch({type:'LOADING', payload:false})
    }
}



export const userRegister=(reqObj)=>async dispatch=>{
    dispatch({type:'LOADING', payload:true})
    try {
        console.log(reqObj.data);
        const response=await axios.post('http://localhost:3004/api/users/register',reqObj)
        // localStorage.setItem('user',JSON.stringify(response.data))
        dispatch({type:'LOADING', payload:false})
        message.success('Registration Successful')
    } catch (error) {
        console.log(error);
        message.error('Something went wrong')
        dispatch({type:'LOADING', payload:false})
    }
}