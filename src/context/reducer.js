export const reducer = (state, action) => {
    switch (action.type) {
      
      case 'SET_TOKEN':
          state.token = action.payload.token;
          return {...state}
      case 'SET_PRODUCT_LIST':
          state.productList =  action.payload.productList;
          return {...state}
      default:
        return state;
    }
  }