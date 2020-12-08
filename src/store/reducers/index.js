const initialState = {
 filters: {
  all: true,
  new: false,
  keno: false,
  table: false,
  lottery: false,
  popular: false,
 },
};

function reducer(state = initialState, action) {
  switch (action.type) {

    case 'SET_ACTIVE':
      const prevActive = Object.keys(state.filters).find((key) => state.filters[key])
      console.log(prevActive)
      return {
        ...state, 
        filters: {
          ...state.filters,
          [prevActive]: false,
          [action.payload]: true,
        }
      }

    default:
      return state;
  }
}

export default reducer;