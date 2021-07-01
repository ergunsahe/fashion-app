export const reducer = (state, action) => {
    switch (action.type) {
      
      case 'SET_SORTED_PRICE':
          state.sortedPrice = action.payload.sortedPrice;
          return {...state}
      case 'SET_PRODUCT_LIST':
          state.productList =  action.payload.productList;
          return {...state}
      case 'SET_FILTER_LIST':
          state.filterSizes =  [...state.filterSizes, action.payload.filterSizes];
          return {...state}
      case 'SET_FILTER_CLEAR':
          state.filterSizes =  action.payload.filterSizes
          return {...state}
      default:
        return state;
    }
  }