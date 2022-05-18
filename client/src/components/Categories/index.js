import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, categories } from "../../reducers/categoriesSlice";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
  Typography,
} from "@mui/material";

const Categories = (props) => {
  const { label } = props;
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleChange = () => {};

  const allCategories = useSelector(categories);
  const categoryStatus = useSelector((state) => state.categories.status);
  // if the default state is idle (which it is on load) - fetch categories from trivia
  useEffect(() => {
    if (categoryStatus === "idle") {
      dispatch(fetchCategories());
    }
  }, [categoryStatus, dispatch]);

  console.log(allCategories);

  // if the default state is idle (which it is on load) - fetch categories from trivia

  if (categoryStatus === "loading") {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (categoryStatus === "failed") {
    return (
      <Typography variant="h6" mt={20} color="red">
        Technical Difficulties! Refresh the Page and Take a Shot!
      </Typography>
    );
  }

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {allCategories.map(({ name }, id) => (
            <MenuItem key={id}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Categories;
