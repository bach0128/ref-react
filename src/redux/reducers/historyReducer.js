const initialState = {
  numberList: [],
};

export const historyReducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "history/add": {
      return { ...state, numberList: [...state.numberList, action.payload] };
    }
    default: {
      return state;
    }
  }
};
