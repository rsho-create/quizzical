import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { getQuestions } from "../actions";

export const fetchQuestions = createAsyncThunk(
  "reducers/fetchQuestions",
  async (query) => {
    const {numOfQs, catId, difficulty} = query
    const res = await getQuestions(numOfQs, catId, difficulty);
    return res;
  }
);

export const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    answers: [],
    correctAnswer: null
  },
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
    setAnswers: (state, action) => {
      state.answers = action.payload;
    },
    setCorrectAnswer: (state, action) => {
      state.correctAnswer = action.payload;
    }
  }
});

export const {
  setQuestion,
  setAnswers,
  setCorrectAnswer
} = questionsSlice.actions;

export const currentQuestion = state => state.questions.questions;
export const allAnswers = state => state.questions.answers;
export const correctAns = state => state.questions.correctAnswer;

export default questionsSlice.reducer;