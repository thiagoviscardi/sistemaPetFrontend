// reducers/rgReducer.js
const initialState = {
    rg: '',
  };
  
  const rgReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RG':
        return { ...state, rg: action.rg };
      default:
        return state;
    }
  };
  
  export default rgReducer;
  