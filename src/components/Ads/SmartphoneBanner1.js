import React, { Component } from 'react';

class SmartphoneBanner extends Component {

  componentDidMount(){
    try {
              window._mNHandle.queue.push(function (){
                  window._mNDetails.loadTag("452487595", "300x50", "452487595");
              });
          }
          catch (error) {}
  }

  render(){
    return <div id="452487595" className='c26'>
    </div>
  }
}

export default SmartphoneBanner;
