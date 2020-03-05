import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

const HistoryItem = ({ name, id, historyHandlerId }) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      component={Link}
      to={`/historyRecipe/${id}`}
      onClick={() => historyHandlerId(id)}
    >
      <CardHeader title={name} />
    </Card>
  );
};

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginRight: 15,
    marginBottom: 30,
    cursor: "pointer",
    textDecoration: "none"
  }
});

export default HistoryItem;
