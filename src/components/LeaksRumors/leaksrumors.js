import React from 'react';
import Header from '../Common/Header/header';
import './leaksrumors.css'
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
import MediumRectangle from '../Ads/MediumRectangle';




const LeakRumors = () => {
  return <div>
            <Header/>
            <div className='text-center container-fluid '>
            <h1 className='e4'>Leaks & Rumors</h1>
                 <div className='row justify-content-center text-center'>

                 <div className=' col-md-2'>

                 </div>


  <div className='row justify-content-center col-md-7 c28 '>

  <div className='l1'>
        <FAB className='l1'/>
  </div>



                <Slide bottom>
                  <NewPost
                  link='/Google-abandons-100000-chest-X-rays-release'
                  title='Google abandons 100,000 chest X-rays’ release'
                  imgsrc='../../img/blog23.jpg'
                  section='Leaks & Rumors' />
                </Slide>

                <Slide bottom>
                    <NewPost
                    link='/Qualcomm-Snapdragon-865-specs-leaked'
                    title='Qualcomm Snapdragon 865 specs leaked!!!'
                    imgsrc='../../img/blog18.jpg'
                    section='Leaks & Rumors' />
                </Slide>


                <Slide bottom>
                    <NewPost
                    link='/leaks-rumors/Google-announces-Project-Nightingale'
                    title='Google announces ‘Project Nightingale’'
                    imgsrc='../../img/blog17.jpg'
                    section='Leaks & Rumors' />
                </Slide>

                 <Slide bottom>
                     <NewPost
                     link='/leaksrumors/Apple-credit-card-under-investigation-for-discrimination'
                     title='Apple’s credit card under investigation for discrimination'
                     imgsrc='../../img/blog15.jpg'
                     section='Leaks & Rumors' />
                 </Slide>

                  <Slide bottom>
                    <NewPost
                    link='/leaks-rumors/PUBG-Mobile-0.16.0-Update-could-bring-Erangle-2.0'
                    title='PUBG Mobile 0.16.0 Update could bring Erangle 2.0'
                    imgsrc='../../img/blog13.jpg'
                    section='Leaks & Rumors' />
                  </Slide>

                  <Slide bottom>
                    <NewPost
                    link='/leaks-rumors/halo-tv-series-goes-into-production'
                    title="‘Halo’ TV Series goes into production"
                    imgsrc='../../img/blog10.jpg'
                    section='Leaks & Rumors' />
                  </Slide>

                  <Slide bottom>
                    <NewPost
                    link='leaksrumors/Brian-Acton-still-behind-the-idea-of-deleting-Facebook'
                    title='Brian Acton still behind the idea of deleting Facebook'
                    imgsrc='../../img/blog7.jpg'
                    section='Leaks & Rumors' />
                  </Slide>

                  <Slide bottom>
                    <NewPost
                    link='/leaksrumors/harley-davidson-electric-pedal-bikes'
                    title='Harley-Davidson’s Electric Pedal Bikes'
                    imgsrc='../../img/blog4.jpg'
                    section='Leaks & Rumors' />
                  </Slide>


                  <Slide bottom>
                  <NewPost
                    link='leaksrumors/Australian-based-start-up-wants-to-map-the-Oceans'
                    title='Australian-based start-up wants to map the Oceans'
                    imgsrc='../../img/blog5.jpg'
                    section='Leaks & Rumors' />
                  </Slide>

                  </div>
                  <div className='row justify-content-center col-md-3 c27'>

                  </div>

                 </div>
            </div>
         </div>
}

export default LeakRumors;
