import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/gameSlice";
import categoriesReducer from "./reducers/categoriesSlice";
import questionsReducer from "./reducers/questionsSlice";

export default configureStore({
  reducer: {
    game: gameReducer,
    categories: categoriesReducer,
    questions: questionsReducer
  }
});