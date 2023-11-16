const initialState = {
  rangeNumber: 100,
};

export const rangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "range/change": {
      return { ...state, rangeNumber: action.payload.rangeNumber };
    }
    default: {
      return state;
    }
  }
};
