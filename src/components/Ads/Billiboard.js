import React, { Component } from 'react';

class Billiboard extends Component {

  componentDidMount(){
    try {
      window._mNHandle.queue.push(function (){
          window._mNDetails.loadTag("582323530", "970x250", "582323530");
      });
  }
  catch (error) {}
  }

  render(){
    return <div  id="582323530" className='c26'>
    </div>
  }
}

export default Billiboard;
