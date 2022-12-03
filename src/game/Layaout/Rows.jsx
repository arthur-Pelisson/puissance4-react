import React from "react";

class Rows extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    console.log(props);
  }
}

export default Rows;
