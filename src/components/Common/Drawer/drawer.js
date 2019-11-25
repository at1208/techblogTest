import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button, Radio } from 'antd';
import './drawer.css'
import { Icon } from 'antd';
import { Link } from 'react-router-dom'
import { FaMobile, FaLaptop } from 'react-icons/fa';
import { SelfBuildingSquareSpinner } from 'react-epic-spinners'
import { DiCodeigniter } from "react-icons/di";


import GoogleSVG from '../SVGs/googleSVG';
import FBSVG from '../SVGs/facebookSVG'

class SideDrawer extends Component {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };



  render() {
    return (
      <div  className='b2 text-center'>
 <SelfBuildingSquareSpinner color="#1fa2ff" onClick={this.showDrawer} className='b1 float-left' />
        <Drawer
          title="Geeks Content"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          >

          <>
          <div>
          <button className='b14'><GoogleSVG /><span className='b15'>Login with Google</span></button>
                                    <br />
                                   <h6 className='text-center'>Or</h6>
          <button className='b14'><FBSVG /><span className='b15'>Login with Facebook</span></button>
         </div>

          <Link to='/phones'>
          <button className='  btn   b3 b13'><FaMobile className='  b4'/>Mobiles</button>
          </Link>

          <Link to='/gaming-section'>
          <button className='  btn  b3'><i className="fa fa-gamepad b7  " aria-hidden="true" />Games</button>
          </Link>

          <Link to='/headphone-earphones'>
          <button className='  btn   b3'><i className="fa fa-headphones b8  " aria-hidden="true"></i>Headphones</button>
          </Link>

          <Link to='/laptops'>
          <button className='  btn    b3'><FaLaptop   className='  b9'/>Laptops</button>
          </Link>

          <Link to='/leaks-rumors'>
          <button className='  btn     b3'><DiCodeigniter   className='  b10'/>Leaks & Rumors</button>
          </Link>


          </>

        </Drawer>
      </div>
    );
  }
}

export default SideDrawer;
