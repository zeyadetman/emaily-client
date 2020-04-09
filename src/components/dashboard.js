import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

function Dashboard() {
  const useStyles = makeStyles((theme) => ({
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <h1>Welcome to Emaily App</h1>
      <Link to="/surveys">Click here to view your surveys</Link>
      <Link to="/surveys/new">
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
}

export default Dashboard;
