// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Importe o rootReducer que combina todos os reducers da sua aplicação

const store = createStore(rootReducer); // Crie a store passando o rootReducer

export default store;
