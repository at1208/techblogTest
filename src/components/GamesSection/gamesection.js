import React from 'react';
import Header from '../Common/Header/header';
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


const GamesSection = () => {
  return <div>
         <Header/>

  <div className='text-center container-fluid'>
  <h1 className='e4'>Games Section</h1>
  <div className='row justify-content-center text-center '>

  <div className=' col-md-2'>

  </div>

  <div className='row justify-content-center col-md-7 c28'>

  <div className='l1'>
        <FAB className='l1'/>
  </div>


          <Slide bottom>
            <NewPost
            link='gaming-section/Redgear-Pro-Wireless-Gaming-Gamepad-“Best-Gaming-Controller-For-PC”'
            title='Redgear Pro Wireless Gaming Gamepad “Best Gaming Controller For PC”'
            imgsrc='../../img/blog16.jpg'
            section='Games Section' />
          </Slide>


          <Slide bottom>
          <NewPost
          link='/gaming-section/GTA-6-LAUNCH-DATE'
          title='GTA 6 LAUNCH DATE'
          imgsrc='../../img/blog14.png'
          section='Gaming Section' />
          </Slide>


          <Slide bottom>
          <NewPost
          link='gaming-section/death-stranding'
          title='Death Stranding'
          imgsrc='../../img/blog9.png'
          section='Gaming Section' />
          </Slide>


          <Slide bottom>
          <NewPost
          link='/gaming-section/overwatch-2'
          title='OVERWATCH2'
          imgsrc='../../img/blog3.png'
          section='Games Section' />
          </Slide>

  </div>
  <div className='row justify-content-center col-md-3 c27 '>

  </div>


  </div>
    </div>
         </div>
}

export default GamesSection;
