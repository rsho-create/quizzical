import React from "react";
import { Box } from '@mui/system';
import { Navbar } from "../../components";
import { SelectField } from '../../components';
import { Container, Typography } from "@mui/material";
import { Button } from "@mui/material"
import TextFieldComp from "../../components/TextField";

const SettingsPage = () => {

  function handleSubmit(e) {
    return e.preventDefault();
  }

  var buttonStyles = {
    color: "#000a3c",
    height: "80px",
    fontWeight: 700,
    display: "block",
    border: "none",
    fontSize: "30px",
    cursor: "pointer",
    marginTop: "30px",
    backgroundColor: "#ffc107",
    fontFamily: "Poppins",
    textTransform: "none"
  }

  return (
    <>
      <Navbar />

      <Container maxWidth="sm">

        <Box textAlign="center" mt={5}>

          <Typography variant="h3" fontWeight="Bold">
            Quiz Settings
          </Typography>
          {"\n"}
          {"\n"}
          <Typography variant="h5">
            Rules
          </Typography>

          <form onSubmit={handleSubmit}>
            <SelectField label="Category" />
            <SelectField label="Difficulty" />
            <SelectField label="Total Questions" />
            <Button fullWidth variant="contained" type="submit" 
            style={buttonStyles}>
              Play
            </Button>

          </form>


        </Box>
      </Container>
    
    </>
  );
};

export default SettingsPage;
