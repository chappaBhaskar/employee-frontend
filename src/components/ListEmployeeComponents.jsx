import React, { useEffect, useState } from 'react'
import { listEmployees,deleteEmployee } from '../services/EmployeeService';
import {useNavigate} from 'react-router-dom'

const ListEmployeeComponents = () => {
    const [employee,setEmployee]=useState([]);

    useEffect(()=>{
       
       getAllEmployees();
    },[])

    function getAllEmployees(){
      listEmployees().then((response)=>setEmployee(response.data)
    ).catch((error)=>console.log(error))
    }

    const navigate=useNavigate();

    function addEmployee(){
             navigate("/add-employee")
    }
    function updateEmployee(id){
      navigate(`/employee/getEmployee/${id}`)
    }

    function DeleteEmployee(id){
      //alert(id)
      deleteEmployee(id).then((response)=>getAllEmployees());

      
      
  }

    

  return (
    <div className='container'>
        <h2 className='text-center'>List Of Employees </h2>
        <button className='btn btn-primary mb-2'onClick={addEmployee}>ADD EMPLOYEE</button>
      <table className='table table-striped table-bordered'>
        <thead >
            <tr>
                <th>Employee Id</th>
                <th>Employee FirstName</th>
                <th>Employee LastName</th>
                <th>Employee Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                employee.map((employee)=>{
                  return(  <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td><button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button><br/><br/>
                        <button className='btn btn-info bg-danger' onClick={()=>DeleteEmployee(employee.id)}>Delete</button></td>
                    </tr>)
                })

            }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponents
