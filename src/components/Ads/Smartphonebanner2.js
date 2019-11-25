import React, { Component } from 'react';

class SmartphoneBanner2 extends Component {

  componentDidMount(){
    try {
             window._mNHandle.queue.push(function (){
                 window._mNDetails.loadTag("646605334", "320x50", "646605334");
             });
         }
         catch (error) {}
  }

  render(){
    return <div  id="646605334" className='c26'>
    </div>
  }
}

export default SmartphoneBanner2;
