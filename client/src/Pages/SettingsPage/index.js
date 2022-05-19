import { Box } from '@mui/system';
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { gameId, updateRoundSettings } from "../../reducers/gameSlice";
import { fetchCategories, categories } from "../../reducers/categoriesSlice";
import { fetchQuestions } from "../../reducers/questionsSlice";
import { FormControl, InputLabel, MenuItem, Button, Select, CircularProgress, Typography, TextField, Container } from '@mui/material';
import { Categories, SelectField, difficultyOptions, TextFieldComp, timerOptions, questionsOptions, settingsButtonStyles } from '../../components';

const SettingsPage = () => {
  // hooks 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // declaring values for the form
  const [form, setFormValue] = useState({
    category: "",
    difficulty: "easy",
    numOfQuestions: 10,
    timer: 30,
    player1: "",
    player2: ""
  })

  // each time something changes in the form it will find the key by name and set the value 
  const changeHandler = e => {
    setFormValue({...form, [e.target.name]: e.target.value})
 }

  // form input values
  function handleSubmit(e) {
    return e.preventDefault();
  };

  //getting categories from redux
  const allCategories = useSelector(categories);
  const categoriesSliced = allCategories.slice(24);
  console.log(categoriesSliced)
  console.log(form)
  const categoryStatus = useSelector(state => state.categories.status);

  // fetching categories and loading form
  useEffect(() => {
    if (categoryStatus === "idle") {
      dispatch(fetchCategories());
    }

    if (categoryStatus === "loading") {
      <Box mt={20}>
        <CircularProgress size={150} />
      </Box>
    }

    if (categoryStatus === "failed") {
        <Typography variant="h6" mt={20} color="red">
          Technical Difficulties! Refresh the Page and Take a Shot!
        </Typography>
    };
  }, [categoryStatus, dispatch]);
  

  const startGame = () => {
    dispatch(updateRoundSettings(form));
    dispatch(fetchQuestions(form))
    navigate("/game");
  };

  return (
    <>
      <Navbar />

      <Container maxWidth="md" style={{backgroundColor:"white"}}>

        <Box textAlign="center" mt={5} >

          <h1 className="quiz-settings">Quiz Settings</h1>
          {"\n"}
          {"\n"}
          <h4 className="rules">How to Play</h4>

          <form onSubmit={handleSubmit}>

          <Box mt={3} width="100%">
            <FormControl  fullWidth >
              <InputLabel>Categories</InputLabel>
              <Select value={form.category} name="category" label="Categories" 
              onChange={changeHandler} >

                {categoriesSliced.map(({name, id}) => (
                  <MenuItem value={id} key={id}>{name}</MenuItem>
                ))}

              </Select>
            </FormControl>
          </Box>
            
          <Box mt={3} width="100%">
              <FormControl  fullWidth  >
                <InputLabel>Difficulty</InputLabel>
                <Select value={form.difficulty} name="difficulty" label="Difficulty" 
                onChange={changeHandler}>
                  {difficultyOptions.map(({ id, name }) => (
                      <MenuItem value={id} key={id}>
                        {name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
          </Box>

          <Box mt={3} width="100%">
              <FormControl  fullWidth  >
                <InputLabel>Total Questions</InputLabel>
                <Select value={form.numOfQuestions} name="numOfQuestions" label="Total Questions" 
                onChange={changeHandler}>
                  {questionsOptions.map(({ id, name }) => (
                      <MenuItem value={id} key={id}>
                        {name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
          </Box>

          <Box mt={3} width="100%">
              <FormControl  fullWidth >
                <InputLabel>Timer</InputLabel>
                <Select value={form.timer} name="timer" label="Timer" 
                onChange={changeHandler}>
                  {timerOptions.map(({ id, name }) => (
                      <MenuItem value={id} key={id}>
                        {name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
          </Box>

          <Box mt={3} width="100%">
            <FormControl fullWidth>
                <TextField
                  variant="outlined"
                  type='text'

                  label="Player 1 Name"
                  name="player1"
                  onChange={changeHandler}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
            </FormControl>
        </Box>

        <Box mt={3} width="100%">
            <FormControl fullWidth>
                <TextField
                  variant="outlined"
                  type='text'

                  label="Player 2 Name"
                  name="player2"
                  onChange={changeHandler}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
            </FormControl>
        </Box>

            <Button fullWidth variant="contained" type="submit" 
            style={settingsButtonStyles} onClick={startGame}> 
              Play
            </Button>

          </form>

        </Box>
      </Container>
    
    </>
  );
};

export default SettingsPage;