import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from 'react-floating-button-menu';
import { Icon } from 'antd';
import MdAdd from '@material-ui/icons/Add';
import MdClose from '@material-ui/icons/Clear';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FaMobile, FaLaptop } from 'react-icons/fa';
 import { DiCodeigniter } from "react-icons/di";

class FAB extends Component {

  state = {
    isOpen: false,
  }

  render(){
     return <FloatingMenu
       slideSpeed={500}
       direction="up"
       spacing={6}
       isOpen={this.state.isOpen}

     >
       <MainButton
         className='l2'
         iconResting={<Icon  type="deployment-unit" style={{ fontSize:25, color: "white"}} />}
         iconActive={<Icon  type="deployment-unit" style={{ fontSize: 25, color: "white" }}  />}
         onClick={() => this.setState({ isOpen: !this.state.isOpen })}
         size={65}

       />

        <ChildButton
        className='l4'
         icon={<Link to='/phones' className='l3'><FaMobile   className='  z2 z3'/> </Link>}
         backgroundColor="white"
         size={50}
         onClick={() => console.log('First button clicked')}
       />

       <ChildButton
              className='l4'
         icon={<Link to='/gaming-section' className='l3'><i className="fa fa-gamepad z2 z4" aria-hidden="true" /></Link>}
         backgroundColor="white"
         size={50}
       />
       <ChildButton
              className='l4'
         icon={<Link to='/headphone-earphones' className='l3'><i className="fa fa-headphones z2 z5" aria-hidden="true"></i></Link>}
         backgroundColor="white"
         size={50}
       />
       <ChildButton
              className='l4'
         icon={  <Link to='/laptops' className='l3'><FaLaptop   className='  z2 z6'/></Link>}
         backgroundColor="white"
         size={50}
       />
       <ChildButton
              className='l4'
         icon={  <Link to='/leaks-rumors' className='l3'><DiCodeigniter   className='  z2 z7'/></Link>}
         backgroundColor="white"
         size={50}
       />
     </FloatingMenu>

  }
}
export default FAB;
