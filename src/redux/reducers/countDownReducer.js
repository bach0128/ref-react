const initialState = {
  countDown: 7,
};

export const countDownReducer = (state = initialState, action) => {
  switch (action.type) {
    case "countDown/decrement": {
      return { ...state, countDown: state.countDown - 1 };
    }
    case "countDown/update": {
      return { ...state, countDown: action.payload.countDown };
    }
    default: {
      return state;
    }
  }
};
