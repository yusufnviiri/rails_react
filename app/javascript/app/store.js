import { configureStore ,applyMiddleware} from '@reduxjs/toolkit'
import greetingsReducer from './components/greetingSlice'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    greetings: greetingsReducer,
  });

  const store = configureStore({
    reducer: rootReducer,
    middleware: [applyMiddleware(thunk)],
    middleware: [thunk],
  
  });
  export default store;
