import React from 'react';
import Header from '../Common/Header/header';
import { Link } from 'react-router-dom';

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
import LeaderBoard from '../Ads/Leaderboard'


const Laptops = () => {
  return <div>
            <Header/>
            <div className='container-fluid'>
            <h1 className='e4 text-center'>Laptops</h1>
                 <div className='container-fluid row justify-content-center'>

                 <div className=' col-md-2 '>

                 </div>


                   <div className='row justify-content-center col-md-7 c28 '>

                   <div className='l1'>
                         <FAB className='l1'/>
                   </div>



                  <Slide bottom>
                    <NewPost
                    link='/laptops/7-ways-to-speed-up-your-laptops'
                    title='7 Ways To speed up your laptop'
                    imgsrc='../../img/blog11.jpeg'
                    section='Laptop' />
                  </Slide>

                  <Slide bottom>
                    <NewPost
                    link='laptops/top-5-gaming-laptops-under-rs60000'
                    title='Top 5 Gaming Laptops Under 60000'
                    imgsrc='../../img/blog2six.jpg'
                    section='Laptops' />
                  </Slide>

                  </div>
                  <div className='row justify-content-center col-md-3 c27  '>

                  </div>



                 </div>
            </div>
         </div>
}

export default Laptops;
