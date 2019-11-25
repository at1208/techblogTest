import React, { Component } from 'react';

class Leaderboard extends Component {

  componentDidMount(){
    try {
              window._mNHandle.queue.push(function (){
                  window._mNDetails.loadTag("925165617", "728x90", "925165617");
              });
          }
          catch (error) {}
  }

  render(){
    return <div  id="925165617" className='c26'>
    </div>
  }
}

export default Leaderboard;
