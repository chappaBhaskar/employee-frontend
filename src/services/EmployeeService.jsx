import axios from "axios"

const REST_API_BASE_URL='http://localhost:8080/employee/getAllEmployees'
const REST_API_BASE_URL_SAVE='http://localhost:8080/employee/saveEmployee'
const REST_API_BASE_URL_GETDATA='http://localhost:8080/employee/getEmployee'
const REST_API_BASE_URL_UPDATEMP='http://localhost:8080/employee/updateEmployee'
const REST_API_BASE_URL_DELETE='http://localhost:8080/employee/deleteEmployee'


export const listEmployees=()=>{
    return axios.get(REST_API_BASE_URL)
}
export const saveEmployeeData=(employeeData)=>{
    return axios.post(REST_API_BASE_URL_SAVE,employeeData);
}

export const gatApiData=(id)=>{
    //alert(id);
    return axios.get(REST_API_BASE_URL_GETDATA+'/'+id);
}

export const updateEmployee=(employeeData,id)=>{
    return axios.put(REST_API_BASE_URL_UPDATEMP+'/'+id,employeeData);
}

export const deleteEmployee=(id)=>{
    return axios.delete(REST_API_BASE_URL_DELETE+'/'+id);
}