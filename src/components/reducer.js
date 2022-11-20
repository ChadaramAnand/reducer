export const Reducer = (state,action) =>{
switch (action.type) {
  case 'Increment':
    return {num:action.payload}
    case 'Decrement':
      return {num:state.num -1}
      case 'Reset':
        return{num:0};

  default:
    return state;
}
}