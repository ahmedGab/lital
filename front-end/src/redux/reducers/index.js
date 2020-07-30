import {combineReducers} from 'redux'
import {usersReducer,NumberusersReducer} from "./reducersAdmin"
import {articlesReducer,ab} from './reducersArticles'
import {historiqueReducer} from './reducerHistorique'
import {userExistReducer} from './userExist'


 const allReducers =combineReducers({
    users:usersReducer,
    nbrUsers:NumberusersReducer,
    articles:articlesReducer,
    historique:historiqueReducer,
    userExist:userExistReducer,

})
export default allReducers