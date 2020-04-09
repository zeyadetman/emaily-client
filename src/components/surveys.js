import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSurveys } from "../actions";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Badge,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: "#e1e1e1",
    width: "70%",
    margin: "25px auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Surveys({ getSurveys, surveys }) {
  const classes = useStyles();

  useEffect(() => {
    getSurveys();
  }, [getSurveys]);

  console.log(surveys);
  const renderSurveys = () => {
    return surveys?.map(({ title, subject, body, yes, no }) => (
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant="h5" component="h2">
            {subject}
          </Typography>

          <Typography variant="body2" component="p">
            {body}
          </Typography>
        </CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "15px 0",
          }}
        >
          <Badge badgeContent={yes.toString()} color="primary">
            <Typography>Responded: Yes</Typography>
          </Badge>

          <Badge badgeContent={no.toString()} color="error">
            <Typography>Responded: No</Typography>
          </Badge>
        </div>
      </Card>
    ));
  };

  return (
    <div>
      <h1>Surveys</h1>

      <div>{surveys ? renderSurveys() : "Loading..."}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    surveys: state?.survey?.surveys,
  };
};

export default connect(mapStateToProps, { getSurveys })(Surveys);
