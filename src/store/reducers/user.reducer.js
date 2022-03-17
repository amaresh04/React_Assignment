import { ADD_USER, DELETE_USER, EDIT_USER } from '../actionTypes'

const initialState = {
    users: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_USER:
            return {
                ...state,
                users: state.users.concat(action.payload)
            }
        case EDIT_USER:
            return {
                ...state,
                users: action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user, index) => index !== action.payload)
            }
        default:
            return {
                ...state
            }
    }
}