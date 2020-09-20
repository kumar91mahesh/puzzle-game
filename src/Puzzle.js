import React, {Component} from 'react';
import Tiles from './Tiles';
class Puzzle extends Component {
    render () {
      return (
        <Tiles rows={3} cols={3} hole={8}
          width={300} height={300}
        />
      )
    }
  }

  export default Puzzle;