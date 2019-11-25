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


const HeadphoneEarphones = () => {
  return <div>
  <Header/>
  <div className='container-fluid text-center'>
  <h1 className='e4'>Headphones & Earphones</h1>
  <div className='row justify-content-center text-center '>

  <div className=' col-md-2'>

  </div>

  <div className='row justify-content-center col-md-7 c28'>

  <div className='l1'>
        <FAB className='l1'/>
  </div>


          <Slide bottom>
            <NewPost
            link='/House-Of-Marley-Smile-Jamaica-EM-JE041-SB-in-ear'
            title='House Of Marley Smile Jamaica EM-JE041-SB in-ear'
            imgsrc='../../img/blog22.jpg'
            section='Headphones & Earphones' />
          </Slide>


          <Slide bottom>
          <NewPost
          link='/HeadphoneEarphones/TOP-5-GAMING-HEADPHONES'
          title='TOP 5 GAMING HEADPHONES'
          imgsrc='../../img/blog20two.png'
          section='Headphones & Earphone' />
          </Slide>

  </div>
  <div className='row justify-content-center col-md-3 c27 '>

  </div>

  </div>
    </div>
         </div>
}

export default HeadphoneEarphones;
