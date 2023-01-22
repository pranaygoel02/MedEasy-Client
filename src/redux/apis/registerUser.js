import axios from '../../axios/axiosInstance'
const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

export const validateCredentials = async (userInfo) => {
    const response = await axios.post('/users/validate', userInfo, config);
    console.log(response.data);
    return response.data;
}
  
export const completeProfileApi = async (userInfo) => {
    const response = await axios.post('/users/register', userInfo, config);
    console.log(response.data);
    return response.data;
}

export const updateUserApi = async (userInfo) => {
    const response = await axios.post('/users/update', userInfo, config);
    console.log(response.data);
    return response.data;
}
export const loginUserApi = async (userInfo) => {
    const response = await axios.post('/users/login', userInfo, config);
    console.log('res: ',response.data);
    return response.data;
}

export const getDoctorsApi = async () => {
    const response = await axios.get('/users/doctor');
    console.log(response.data);
    return response.data;
}

export const getDoctorsBySpecialityApi = async (speciality) => {
    const response = await axios.post('/users/doctor', {speciality});
    console.log(response.data);
    return response.data;
}

export const getDoctorByIdApi = async (id) => {
    const response = await axios.get(`/users/doctor/${id}`);
    console.log(response.data);
    return response.data;
}