import React from "react";
import { Link } from "react-router-dom";
import { client } from "../services/api"; // Adjust the path to match your project structure
import { makeStyles } from "@mui/styles";
import { gql, useQuery } from "@apollo/client";
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

const GET_POSTS_QUERY = gql`
  query GetPosts {
    posts {
      id
      author
      content
      likes
      comments {
        id
        text
      }
    }
  }
`;

const Home = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_POSTS_QUERY, { client }); // Use the query without specifying a client

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const posts = data.posts;

  return (
    <div>
      <Typography variant="h4" align="center">
        Home
      </Typography>
      {posts.map((post) => (
        <Card key={post.id} className={classes.root}>
          <CardContent>
            <Typography variant="h6" component="div">
              {post.author}
            </Typography>
            <Typography className={classes.postContent} variant="body2" color="textSecondary">
              {post.content}
            </Typography>
            <Link to={`/user/${post.author}`} style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="primary">
                View Profile
              </Button>
            </Link>
            <Button variant="outlined" color="secondary">
              Comment
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Home;
