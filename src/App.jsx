import 'bootstrap/dist/css/bootstrap.min.css'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import HeaderComponent from './components/HeaderComponent'
import './App.css'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CreateEmployee from './components/CreateEmployee'



function App() {
 

  return (
    <>
       <BrowserRouter>
       <HeaderComponent/>
        <Routes>
          <Route path='/employee' element={<ListEmployeeComponents/>}/>
          <Route path='/employee/getAllEmployees' element={<ListEmployeeComponents/>}/>
          <Route path='/add-employee' element={<CreateEmployee/>}/>
          <Route path='/employee/getEmployee/:id' element={<CreateEmployee/>}></Route>
        </Routes>
        <FooterComponent/>
       </BrowserRouter>
    </>
  )
}

export default App
