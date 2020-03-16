import React from "react";
import { useStyles } from "./RecipeItemStyle";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ButtonController from "./ButtonController";

const RecipeItem = ({
  description,
  name,
  rec,
  recipeReloading,
  recipeModify
}) => {
  const classes = useStyles();
  const date = rec.date.slice(0, 10);

  return (
    <Card className={classes.root} key={rec._id}>
      <CardHeader
        action={
          <ButtonController
            id={rec._id}
            recipeReloading={recipeReloading}
            recipeModify={recipeModify}
          />
        }
        title={name}
        subheader={date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeItem;
