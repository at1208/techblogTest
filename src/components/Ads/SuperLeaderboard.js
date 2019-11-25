import React, { Component } from 'react';

class SuperLeaderBoard extends Component {

  componentDidMount(){
    try {
          window._mNHandle.queue.push(function (){
              window._mNDetails.loadTag("865157136", "970x90", "865157136");
          });
      }
      catch (error) {}
  }

  render(){
    return <div id="865157136" className='c26'>
    </div>
  }
}

export default SuperLeaderBoard;
