import {
    USER_COMPLETE_PROFILE_FAILED,
    USER_COMPLETE_PROFILE_REQUEST,
    USER_COMPLETE_PROFILE_SUCCESS,
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAILED,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_FAILED,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    SET_USER,
} from '../constants/userAuth'

import { completeProfileApi, loginUserApi, validateCredentials } from '../apis/registerUser';

export const userRegisterRequest = () => {
    return {
        type: USER_REGISTER_REQUEST,
    }
} 

export const userRegisterSuccess = (payload) => {
    console.log('User Info:',payload);
    return {
        type: USER_REGISTER_SUCCESS,
        payload,
    }
}

export const userRegisterFailed = (payload) => {
    return {
        type: USER_REGISTER_FAILED,
        payload,
    }
}

export const completeProfileRequest = () => {
    return {
        type: USER_COMPLETE_PROFILE_REQUEST,
    }
}

export const completeProfileSuccess = (payload) => {
    return {
        type: USER_COMPLETE_PROFILE_SUCCESS,
        payload,
    }
}

export const completeProfileFailed = (payload) => {
    return {
        type: USER_COMPLETE_PROFILE_FAILED,
        payload,
    }
}

export const completeProfile = (userInfo) => async (dispatch) => {
    dispatch(completeProfileRequest())
    try {
        console.log('New User Info: ',userInfo);
        const res = await completeProfileApi(userInfo)
        console.log('res: ',res);
        dispatch(completeProfileSuccess(res))
    } catch (error) {
        dispatch(completeProfileFailed(error.response.data.error))
        console.log(error.response.data.error);
        throw new Error(error.response.data.error)
    }
}

export const registerUser = (userInfo) => async (dispatch) => {
    dispatch(userRegisterRequest())
    try {
        const res = await validateCredentials(userInfo)
        dispatch(userRegisterSuccess(userInfo))
    } catch (error) {
        dispatch(userRegisterFailed(error.message))
        console.log(error.response.data.error);
        throw new Error(error.response.data.error)
    }
}

export const userUpdateRequest = () => {
    return {
        type: USER_UPDATE_REQUEST,
    }
} 

export const userUpdateSuccess = (payload) => {
    console.log('User Info:',payload);
    localStorage.setItem('userInfo', JSON.stringify({...payload,password:null}))
    return {
        type: USER_UPDATE_SUCCESS,
        payload,
    }
}

export const userUpdateFailed = (payload) => {
    return {
        type: USER_UPDATE_FAILED,
        payload,
    }
}
export const updateUser = (userInfo) => async (dispatch) => {
    dispatch(userUpdateRequest())
    try {
        dispatch(userUpdateSuccess(userInfo))
    } catch (error) {
        dispatch(userUpdateFailed(error.message))
    }
}

export const userLogout = () => {
    localStorage.removeItem('userInfo')
    return {
        type: USER_LOGOUT,
    }
}

export const setUser = () => {
    return{
        type: SET_USER,
        payload: JSON.parse(localStorage.getItem('userInfo')),
    }
}

export const userLoginRequest = () => {
    return {
        type: USER_LOGIN_REQUEST,
    }
}

export const userLoginSuccess = (payload) => {
    localStorage.setItem('userInfo', JSON.stringify({...payload,password:null}))
    return {
        type: USER_LOGIN_SUCCESS,
        payload,
    }
}

export const userLoginFailed = (payload) => {
    return {
        type: USER_LOGIN_FAILED,
        payload,
    }
}



export const loginUser = (userInfo) => async (dispatch) => {
    dispatch(userLoginRequest())
    try {
        const user = await loginUserApi(userInfo)
        console.log(user);
        dispatch(userLoginSuccess(user))
    } catch (error) {
        dispatch(userLoginFailed(error.response.data.error))
        throw new Error(error.message)
    }
}