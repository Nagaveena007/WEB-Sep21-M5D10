import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import homeReducer from "../reducers/homeReducer";
import userReducer from "../reducers/userReducer";
import searchReducer from "../reducers/searchReducer";
const aComposeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const initialState = {
  mainHomeContent: {
    details: {},
    content: [],
  },
  search: {
    content: [],
  },
  user: {
    name: "",
  },
};
const bigReducer = combineReducers({
  mainHomeContent: homeReducer,
  search: searchReducer,
  user: userReducer,
});
export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);
