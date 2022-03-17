import { ADD_USER,DELETE_USER,EDIT_USER } from "../actionTypes";
export const addUser = (payload) => {
    return {
      type: ADD_USER,
      payload
    };
  };
  
  export const updateUser = (payload) => {
    return {
      type: EDIT_USER,
      payload
    };
  };

  export const deleteUser = (payload) => {
    return {
      type: DELETE_USER,
      payload
    };
  };