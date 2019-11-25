import React, { Component } from 'react';

class MediumRectangle extends Component {

  componentDidMount(){
    try {
           window._mNHandle.queue.push(function (){
               window._mNDetails.loadTag("257844712", "300x250", "257844712");
           });
       }
       catch (error) {}
  }

  render(){
    return <div  id="257844712" className='c26'>
    </div>
  }
}

export default MediumRectangle;
