import React, { useEffect, useState } from 'react'
import { saveEmployeeData,updateEmployee,gatApiData,deleteEmployee } from '../services/EmployeeService'
import {useNavigate,useParams} from 'react-router-dom'


const CreateEmployee = () => {

    const navigator=useNavigate();
    const [data,setData]=useState({
        firstName:"",
        lastName:"",
        email:""
    });

    const [error,setError]=useState({
        firstName:"",
        lastName:"",
        email:""
    })

    const {id}=useParams();

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

    function button(){
        if(id){
            return  <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Update</button>
        }else{
            return  <button className='btn btn-success' onClick={saveOrUpdateEmployee}>submit</button>
        }
    }

   

    useEffect(()=>{
        // if(id){
        gatApiData(id).then((response)=>setData(response.data))
        .catch((error)=>console.log(error))
    // }
    },[id])

    

function changeData(e) {
    const { name, value } = e.target;

    // Update the data state with the new value
    setData((prevData) => ({
        ...prevData,
        [name]: value
    }));

    // Validate the firstName input immediately based on the value
    if (name === 'firstName') {
        if (value.trim() === "") {
            // Show error if firstName is empty or just spaces
            setError((prevError) => ({
                ...prevError,
                firstName: "First Name should not be empty or just spaces"
            }));
        } else {
            // Clear error if firstName is valid
            setError((prevError) => ({
                ...prevError,
                firstName: ""
            }));
        }
    }
    //Validate the email input immediately based on the value

    if (name === 'email') {
        // Define the email regex pattern for validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (value.trim() === "") {
            // Check if the email is empty
            setError((prevError) => ({
                ...prevError,
                email: "Email should not be empty or null"
            }));
        } else if (!emailPattern.test(value)) {
            // Check if the email doesn't match the pattern
            setError((prevError) => ({
                ...prevError,
                email: "Please enter a valid email"
            }));
        } else {
            // Clear the error if the email is valid
            setError((prevError) => ({
                ...prevError,
                email: ""
            }));
        }
    }

}

    function saveOrUpdateEmployee(e){
        e.preventDefault();

     const employeeData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email
        };

        if(id){
             updateEmployee(employeeData,id).then((response)=>console.log("Employee Data updated successfull In DataBase",response))
        }else{
        
        saveEmployeeData(employeeData).then((response)=>console.log("Employee Data successfully saved In DataBase",response))
        .catch((error)=>{
            console.log(error)
        })
    }
        navigator("/employee/getAllEmployees")

    }

   



  return (
    <div className='container'>
        <br/><br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}
                <div className='card-body'>
                    <form>
                        <div className='form-grop mb-2'>
                            <label className='form-label'>Employee FirstName:</label>
                            <input
                              type="text"
                              placeholder='Enter Employee Name'
                              name="firstName"
                              value={data.firstName}
                              onChange={changeData}
                               className='form-control'
                               autoComplete='off'/>
                        </div>
                        {error.firstName&&<span className='text-danger'>{error.firstName}</span>}
                        <div className='form-grop mb-2'>
                            <label className='form-label'>Employee LastName:</label>
                            <input
                              type="text"
                              placeholder='Enter Employee FirstName'
                              name="lastName"
                              value={data.lastName}
                              onChange={changeData}
                               className='form-control'
                               autoComplete='off'/>
                        </div>
                        <div className='form-grop mb-2'>
                            <label className='form-label'>Employee Email:</label>
                            <input
                              type="text"
                              placeholder='Enter Employee Email'
                              name="email"
                              value={data.email}
                              onChange={changeData}
                               className='form-control'
                               autoComplete='off'/>
                        </div>
                        {error.email&&<span className='text-danger'>{error.email}</span>}<br/><br/>
                       {button()}
                    </form>
                </div>

            </div>
        </div>
     
    </div>
  )
}

export default CreateEmployee
