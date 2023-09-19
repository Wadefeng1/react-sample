import { createStore, combineReducers, applyMiddleware } from "redux";
import languageReducer from "@/redux/language/languageReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  language: languageReducer,
});

export type RootState = ReturnType<typeof store.getState>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
