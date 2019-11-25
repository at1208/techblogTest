import React, { Component } from 'react';

class HalfPageAd extends Component {

  componentDidMount(){
    try {
           window._mNHandle.queue.push(function (){
               window._mNDetails.loadTag("234708012", "300x600", "234708012");
           });
       }
       catch (error) {}
  }

  render(){
    return <div   id="234708012" className='c26'>
    </div>
  }
}

export default HalfPageAd;
