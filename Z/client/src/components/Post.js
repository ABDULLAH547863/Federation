import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, Typography, Button } from "@mui/material";
import Comment from "./Comment"; // Import the Comment component
import Like from "./Like"; // Import the Like component

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: "0 auto",
    marginTop: theme.spacing(2),
  },
  postContent: {
    marginBottom: theme.spacing(1),
  },
  likes: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  likeButton: {
    marginRight: theme.spacing(2),
  },
  comments: {
    marginTop: theme.spacing(1),
  },
  comment: {
    marginBottom: theme.spacing(1),
  },
}));

const Post = ({ postId }) => {
  const classes = useStyles();

  // Dummy data for the post and comments (you will replace this with actual data from your server)
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Fetch post and comments by postId from your API
    // Replace the following with actual API calls
    // Example: api.getPost(postId)
    setPost({
      id: postId,
      content: "This is an example post.",
      author: "John Doe",
    });

    setComments([
      {
        id: "1",
        text: "Great post!",
        author: "Jane Smith",
      },
      {
        id: "2",
        text: "I agree!",
        author: "Bob Johnson",
      },
    ]);
  }, [postId]);

  const handleLike = () => {
    // Implement the logic to like/unlike the post using your GraphQL API
    // Update the 'liked' state accordingly
    setLiked(!liked);
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h6" component="div">
            {post.author}
          </Typography>
          <Typography className={classes.postContent} variant="body2" color="textSecondary">
            {post.content}
          </Typography>
          <div className={classes.likes}>
            <Button variant="outlined" color={liked ? "primary" : "default"} onClick={handleLike} className={classes.likeButton}>
              Like
            </Button>
            <Like likeCount={42} /> {/* Pass the number of likes as a prop to the Like component */}
          </div>
        </CardContent>
      </Card>
      <div className={classes.comments}>
        <Typography variant="h6" gutterBottom>
          Comments
        </Typography>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      {/* Pass the comment data as a prop to the Comment component */}
    </div>
  );
};

export default Post;
