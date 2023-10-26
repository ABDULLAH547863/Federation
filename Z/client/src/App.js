import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/user/:userId" component={UserProfile} />
          <Route path="/post/:postId" component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
