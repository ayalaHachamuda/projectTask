
import { createStore, combineReducers, applyMiddleware} from 'redux';
//import {createStore,combineReducers,applyMiddleware} from 'redux';
import usere from './reducers/usere';
import taske from './reducers/taske';
const logAction = (store) => (next) => (action) => {
    if(action.type==='ADD_USER')
    {
        alert("ADD_USER")
        console.log(store.getState().usere.usersList);
    }
    return next(action)
    }  
const reducer=combineReducers({usere,taske});
//const store=configureStore({reducer:{taske}});
const store = createStore(reducer ,applyMiddleware(logAction));
window.store=store;
export default store; 