import React from "react";
import Rows from "./Rows";
class Columns extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.columns = [];
  }

  addColumns() {
    let columns = [];
    for (let i = 0; i < this.columns.length; i++) {
      columns.push(
        <div key={i} className="columns">
          {<Rows />}
        </div>
      );
    }
    return columns;
  }

  render() {
    return <div className="gamegrid">{this.addColumns}</div>;
  }

  componentDidMount() {
    for (let i = 0; i < this.props.columns; i++) {
      const column = {
        id: i,
      };

      this.columns.push(column);
    }
  }
}

export default Columns;
