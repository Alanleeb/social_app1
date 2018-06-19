import { combineReducers } from 'redux'
import posts from './posts'

const RootReducer = combineReducers({
	posts, 
})

export default RootReducer