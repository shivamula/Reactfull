import React, { Component } from "react";
import axios from "axios";
class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      Title: "",
      body: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts/1/comments", this.state)
      .then((response) => {
        console.log(response);
      });
  };
  render() {
    const { userId, Title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1>Post api form</h1>
            <label>UserId</label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>title</label>

            <input
              type="text"
              name="Title"
              value={Title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Body</label>

            <input
              type="text"
              name="body"
              value={body}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
