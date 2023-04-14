import React, { Fragment } from 'react';
import Columns from './Columns';
class Layout extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      columns: []
    };
  }


  render() {
    return <Fragment>{this.state.columns}</Fragment>
  }

  componentDidMount() {
    for (let i = 0; i < this.props.x; i++) {
      // console.log("columns");
      this.setState({Columns: this.state.columns.push(<div key={"x-"+i} id={"x-"+i}  className="columns"><Columns play={this.props.play} y={this.props.y}/></div>)});
    } 
  }
}

export default Layout;
