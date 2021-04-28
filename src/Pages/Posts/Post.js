import React, { Component } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

export default class Post extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      post: {}
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
    );
    this.setState({
      post: response.data
    });
  }

  render() {
    return this.state.post ? (
      <div>
        <h3>{this.state.post.title}</h3>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <Spinner animation="grow" />
    );
  }
}
