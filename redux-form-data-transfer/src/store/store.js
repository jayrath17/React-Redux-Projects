import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

const Reducer = combineReducers({
  form: reduxFormReducer
  // if you have states then mention it here like below
  // ,reducer: 'reducerName'
});

const store = createStore(Reducer);

export default store;
