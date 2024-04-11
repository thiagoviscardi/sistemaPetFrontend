// reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer'; // Importe o reducer específico
import rgReducer from  './rgReducer';
const rootReducer = combineReducers({
  counter: counterReducer, // Defina como os reducers são combinados e nomeie-os de acordo
  rg: rgReducer, // Defina como os reducers são combinados e nomeie-os de acordo
});

export default rootReducer;
