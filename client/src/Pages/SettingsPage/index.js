import React, { useEffect, useState } from "react";
import { Box } from '@mui/system';
import { Button, CircularProgress } from "@mui/material"
import { Navbar } from "../../components";
import { Categories } from '../../components';
import { Container, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const SettingsPage = () => {
  const [roundSettings, setRoundSettings] = useState([]);
  
  function handleSubmit(e) {
    return e.preventDefault();
  }
  const updateSettingsField = (index, propertyName) => e => {
    const settings = [...roundSettings];
    settings[index][propertyName] = parseInt(e.target.value);
    setRoundSettings(settings);
  };
  
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
            <Categories label="Category" onChange={updateSettingsField("category")} />
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
