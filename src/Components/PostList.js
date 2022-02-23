import React, { Component } from "react";
import axios from "axios";
export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
        console.log(response.data);
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>List of posts</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.name}</h1>
            <h6>{post.email}</h6>
          </div>
        ))}
      </div>
    );
  }
}

export default PostList;
