import { authConstants } from '../actions/constants'

const initialState = {
  username: 'admin',
  password: 'admin',
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        ...action.payload,
      }
      break
    default:
      break
  }
  return state
}

export default authReducer
