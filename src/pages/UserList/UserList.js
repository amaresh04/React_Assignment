import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteUser } from '../../store/actions'
import UserItem from '../../components/UserItem/UserItem';
import styles from './UserList.module.css'

const UserList = () => {
  const { users } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editHandler = (index) => {
     navigate('/edituser/' + index)
  }
  const deleteHandler = (index) => {
       dispatch(deleteUser(index))
  }

  let userListContent=<h5>User Not Found!!</h5>

  if(users.length>0){
    userListContent =<UserItem users={users} editUser={editHandler} deleteUser={deleteHandler}/>
  }

  return (
    <div>
      <h1>User List</h1>
        {userListContent}
    </div>
  )
}

export default UserList