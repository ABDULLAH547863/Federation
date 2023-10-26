import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: "0 auto",
    marginTop: theme.spacing(1),
  },
  commentContent: {
    marginBottom: theme.spacing(1),
  },
}));

const Comment = ({ comment }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.commentContent} variant="body2" color="textSecondary">
          {comment.text}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Commented by {comment.author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;
