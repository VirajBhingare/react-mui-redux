import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/index";
import { useSelector } from "react-redux";

// MUI
import { ButtonGroup, Container, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const MyComponent = () => {
  const dispatch = useDispatch();
  const { increment, decrement } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state) => state.amount);
  return (
    <>
      <Container>
        <Typography variant="h4">Amount = {amount}</Typography>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <IconButton onClick={() => decrement(1)}>
            <RemoveIcon />
          </IconButton>
          <IconButton onClick={() => increment(1)}>
            <AddIcon />
          </IconButton>
        </ButtonGroup>
      </Container>
    </>
  );
};

export default MyComponent;
