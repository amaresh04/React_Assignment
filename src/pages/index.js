import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Login from './Login/Login'
import AddUser from './AddUser/AddUser'
import UserList from './UserList/UserList'
import EditUser from './EditUser/EditUser'
class Pages extends React.Component {
    render() {
      return (
            <Routes>
              <Route  path="/" element={<Login/>} ></Route>
              <Route  path="/adduser" element={<AddUser/>} ></Route>
              <Route  path="/userlist" element={<UserList/>}></Route>
              <Route  path="/edituser/:id" element={<EditUser/>} ></Route>
           </Routes>
      )
    }
  }
  export default Pages