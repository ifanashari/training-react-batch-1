import React, { Component } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

import PostItems from "../../Components/PostItems";

export default class ListPosts extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      posts: [],
      loading: true
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({
      loading: false,
      posts: response.data
    });
  }

  render() {
    return (
      <div>
        <h3>List Posts</h3>

        {this.state.loading ? (
          <Spinner animation="grow" />
        ) : (
          <PostItems posts={this.state.posts} />
        )}
      </div>
    );
  }
}
