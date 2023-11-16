import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { rangeReducer } from "./reducers/rangeReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { countDownReducer } from "./reducers/countDownReducer";
import { historyReducer } from "./reducers/historyReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  range: rangeReducer,
  countDown: countDownReducer,
  history: historyReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
