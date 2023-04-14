import React, { Fragment } from 'react';
import Rows from './Rows';
class Columns extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      rows: []
    };
    
  }


  render() {
    return <Fragment>{this.state.rows}</Fragment>;
  }

  componentDidMount() {
    for (let i = 0; i < this.props.y; i++) {
      // console.log("rows");
      this.setState({Rows: this.state.rows.push(<div className='row' id={"y-"+i} key={"y-"+i}  onClick={() => this.props.play(i)}><Rows/></div>)});
    }
  }
}

export default Columns;
