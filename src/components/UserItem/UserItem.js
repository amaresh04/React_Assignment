import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ users, editUser, deleteUser }) => {
  const returnUserList = (user, index) => {
    return <tr key={index}>
      <td><p>{user.firstName}</p></td>
      <td><p>{user.lastName}</p></td>
      <td><p>{user.email}</p></td>
      <td><p>{user.contactNumber}</p></td>
      <td><p>{user.address}</p></td>
      <td>
        <button onClick={() => editUser(index)}>Edit</button>
        <button className="delete" onClick={() => deleteUser(index)}>Delete</button>
      </td>

    </tr>

  }
  return (
    <React.Fragment>
      <div className='addNewUser'><Link className='link' to='/adduser'>Add New User</Link></div>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Moble</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, index) => {
            return returnUserList(user, index)
          })}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default UserItem