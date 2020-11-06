import userReducer from "./user.reducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;