import { combineReducers } from 'redux'
import authReducer from './auth.reducers'

const initialState = {
  sidebarShow: true,
  // sidebarShow: 'responsive',
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  nav: changeState,
  auth: authReducer,
})

export default rootReducer
