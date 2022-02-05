
import {combineReducers} from "redux";
import users from './user.reducer'


const createReducer = ({initialState, handlers}) =>
function reducer(state = initialState, action) {
    if(handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action);
    }
    return state;
};

export default combineReducers({
    users: createReducer(users)
})