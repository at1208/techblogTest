import React from 'react';
import Header from '../Common/Header/header';
import { Link } from 'react-router-dom'
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import Slide from 'react-reveal/Slide';

import NewPost from '../Common/Post/post';
import FAB from '../Common/FloatingButton/floatingButton'

import SmartphoneBanner1 from '../Ads/SmartphoneBanner1'
import Billiboard from '../Ads/Billiboard'
import HalfPageAd from '../Ads/HalfPageAd'
import Smartphonebanner2 from '../Ads/Smartphonebanner2'
import SuperLeaderboard from '../Ads/SuperLeaderboard';
import WideScraper from '../Ads/WideScraper'
import MediumRectangle from '../Ads/MediumRectangle'



const Phones = () => {
  return <div>
         <Header/>
         <div className='text-center container-fluid '>
         <h1 className='e4'>Mobiles</h1>
         <div className='row justify-content-center text-center'>


         <div className=' col-md-2'>

         </div>



  <div className='row justify-content-center col-md-7 c28'>

  <div className='l1'>
        <FAB className='l1'/>
  </div>



          <Slide bottom>
          <NewPost
          link='/Phones/REALME-5S-is-launching-on-November-20-2019-along-with-X2-pro'
          title='REALME 5S is launching on November 20 2019 along with X2 pro!'
          imgsrc='../../img/blog21.jpg'
          section='Mobiles' />
          </Slide>

          <Slide bottom>
          <NewPost
          link='/Phones/MI-Note-10-Dream-Big'
          title='MI Note 10 “ Dream Big “'
          imgsrc='../../img/blog19.png'
          section='Mobiles' />
          </Slide>


          <Slide bottom>
          <NewPost
          link='/phones/miui-11-life-gets-easier-Features-and-rollout-dates'
          title='MIUI 11 “Life Gets Easier” Features And Rollout Dates '
          imgsrc='../../img/blog12.png'
          section=' Mobiles' />
          </Slide>

          <Slide bottom>
          <NewPost
          link='/phones/best-mobiles-under-5000'
          title='Best Mobile Phones Under Rs.5000'
          imgsrc='../../img/blog8.png'
          section='Mobiles' />
          </Slide>

          <Slide bottom>
          <NewPost
          link='/phones/realme-x2-pro'
          title='Realme X2 Pro'
          imgsrc='../../img/blog1.png'
          section='Upcoming Phone' />
          </Slide>

          </div>
          <div className='row justify-content-center col-md-3 c27 '>

          </div>

           </div>
         </div>
         </div>

}

export default Phones;
