import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, Typography, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: "0 auto",
    marginTop: theme.spacing(2),
  },
  post: {
    marginBottom: theme.spacing(2),
  },
  postContent: {
    marginBottom: theme.spacing(1),
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  const { userId } = useParams();

  // Dummy data for user profile and posts (you will replace this with actual data from your server)
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch user profile and posts by userId from your API
    // Replace the following with actual API calls
    // Example: api.getUserProfile(userId)
    setUser({
      id: userId,
      username: "john_doe",
      fullName: "John Doe",
      email: "john@example.com",
    });

    setPosts([
      {
        id: "1",
        content: "My first post!",
      },
      {
        id: "2",
        content: "Enjoying the day!",
      },
    ]);
  }, [userId]);

  return (
    <div>
      <Typography variant="h4" align="center">
        User Profile - {user.fullName}
      </Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h6" component="div">
            Username: {user.username}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Email: {user.email}
          </Typography>
        </CardContent>
      </Card>
      {posts.map((post) => (
        <Card key={post.id} className={classes.root}>
          <CardContent>
            <Typography className={classes.postContent} variant="body2" color="textSecondary">
              {post.content}
            </Typography>
            <Button variant="outlined" color="primary">
              Like
            </Button>
            <Button variant="outlined" color="secondary">
              Comment
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserProfile;
