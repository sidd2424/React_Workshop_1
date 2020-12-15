import { combineReducers } from 'redux'
import NavigationReducer from './NavigationReducer'
import LoginReducer from './LoginReducer'


const reducer = combineReducers({
    navigate: NavigationReducer,
    login: LoginReducer,
})

export default reducer;