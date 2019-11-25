import React, { Component } from 'react';

class WideScraper extends Component {

  componentDidMount(){
    try {
            window._mNHandle.queue.push(function (){
                window._mNDetails.loadTag("712981767", "160x600", "712981767");
            });
        }
        catch (error) {}
  }

  render(){
    return <div id="712981767" className='c26'>
    </div>
  }
}

export default WideScraper;
