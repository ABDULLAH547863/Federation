import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: "0 auto",
    marginTop: theme.spacing(1),
  },
  likeContent: {
    marginBottom: theme.spacing(1),
  },
  likeCount: {
    fontWeight: "bold",
  },
}));

const Like = ({ likeCount }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.likeContent} variant="body2" color="textSecondary">
          {likeCount} {likeCount === 1 ? "Like" : "Likes"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Like;
