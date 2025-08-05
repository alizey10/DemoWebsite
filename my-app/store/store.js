

import { configureStore , combineReducers  } from '@reduxjs/toolkit';
import {userReducer} from './reducers/user';
// import {cartReducer} from './reducers/cart';







let rootReducer = combineReducers({
    userReducer: userReducer.reducer, 
    // cart: cartReducer.reducer,

});

export let myStore = configureStore({
  reducer: rootReducer
});









