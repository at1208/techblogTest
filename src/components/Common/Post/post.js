import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const Post = (prop) => {
  return <div>
     <Link to={prop.link}>
           <div className='c2 shadow card text-center container-fluid '>
               <h6 className='c17'>{prop.title}</h6>
               <img src={prop.imgsrc} className='card c16'/>
                   <span className='c20 e3'>
                   {prop.section}
                   <br />
                   <Link to={prop.link}>
                   <b className='e3'>Know More</b>
                   </Link>
                   </span>
           </div>
       </Link>
       </div>
}
export default Post;
