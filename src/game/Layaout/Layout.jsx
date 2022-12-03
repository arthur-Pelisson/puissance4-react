import React from "react";
import Columns from "./Columns";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="gamegrid">{<Columns />}</div>;
  }
}
export default Layout;
