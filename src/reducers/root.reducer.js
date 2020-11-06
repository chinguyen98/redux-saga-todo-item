import todoReducer from "./todo.reducer";
import userReducer from "./user.reducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

export default rootReducer;