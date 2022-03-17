import { LOGIN} from '../actionTypes'

const initialState = {
    isLoggedIn:false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: action.payload
            }
        default:
            return {
                ...state
            }
    }
}