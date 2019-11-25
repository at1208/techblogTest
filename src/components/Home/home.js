import React, { Component } from 'react';
import './home.css'
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import ShowMore from '@tedconf/react-show-more';

import Header from '../Common/Header/header';
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



class Home extends Component{



   render(){


     return <div>

           <Header />

           <div className= 'c1'>



        <div className='container-fluid c4 text-center'>
                  <div className='row justify-content-center'>

         <div className='col-md-12 row justify-content-center container-fluid '>
        <LeaderBoard />
        </div>


<div className='col-md-12 row justify-content-center'>

                  <div className='row justify-content-center col-md-2 c27'>

                  </div>



                      <div className='row justify-content-center col-md-7 c28'>


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
                        link='/House-Of-Marley-Smile-Jamaica-EM-JE041-SB-in-ear'
                        title='House Of Marley Smile Jamaica EM-JE041-SB in-ear'
                        imgsrc='../../img/blog22.jpg'
                        section='Headphones & Earphones' />
                      </Slide>

                        <Slide bottom>
                          <NewPost
                          link='/Phones/REALME-5S-is-launching-on-November-20-2019-along-with-X2-pro'
                          title='REALME 5S is launching on November 20 2019 along with X2 pro!'
                          imgsrc='../../img/blog21.jpg'
                          section='Mobiles' />
                        </Slide>

                       <Slide bottom>
                          <NewPost
                          link='/HeadphoneEarphones/TOP-5-GAMING-HEADPHONES'
                          title='TOP 5 GAMING HEADPHONES'
                          imgsrc='../../img/blog20two.png'
                          section='Headphones' />
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
                          link='gaming-section/Redgear-Pro-Wireless-Gaming-Gamepad-“Best-Gaming-Controller-For-PC”'
                          title='Redgear Pro Wireless Gaming Gamepad “Best Gaming Controller For PC”'
                          imgsrc='../../img/blog16.jpg'
                          section='Games Section' />
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
                          link='/gaming-section/GTA-6-LAUNCH-DATE'
                          title='GTA 6 LAUNCH DATE'
                          imgsrc='../../img/blog14.png'
                          section='Gaming Section' />
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
                          link='/phones/miui-11-life-gets-easier-Features-and-rollout-dates'
                          title='MIUI 11 “Life Gets Easier” Features And Rollout Dates '
                          imgsrc='../../img/blog12.png'
                          section=' Mobiles' />
                        </Slide>

                       <Slide bottom>
                          <NewPost
                          link='/laptops/7-ways-to-speed-up-your-laptops'
                          title='7 Ways To speed up your laptop'
                          imgsrc='../../img/blog11.jpeg'
                          section='Laptop' />
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
                          link='gaming-section/death-stranding'
                          title='Death Stranding'
                          imgsrc='../../img/blog9.png'
                          section='Gaming Section' />
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
                          link='/phones/best-mobiles-under-5000'
                          title='Best Mobile Phones Under Rs.5000'
                          imgsrc='../../img/blog8.png'
                          section='Mobiles' />
                        </Slide>

                       <Slide bottom>
                          <NewPost
                          link='leaksrumors/Australian-based-start-up-wants-to-map-the-Oceans'
                          title='Australian-based start-up wants to map the Oceans'
                          imgsrc='../../img/blog5.jpg'
                          section='Leaks & Rumors' />
                        </Slide>


                       <Slide bottom>
                          <NewPost
                          link='/phones/realme-x2-pro'
                          title='Realme X2 Pro'
                          imgsrc='../../img/blog1.png'
                          section='Upcoming Phone' />
                        </Slide>

                       <Slide bottom>
                          <NewPost
                          link='laptops/top-5-gaming-laptops-under-rs60000'
                          title='Top 5 Gaming Laptops Under 60000'
                          imgsrc='../../img/blog2six.jpg'
                          section='Laptops' />
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
                          link='/gaming-section/overwatch-2'
                          title='OVERWATCH2'
                          imgsrc='../../img/blog3.png'
                          section='Games Section' />
                        </Slide>

 

               </div>
               <div className='row justify-content-center col-md-3 c27'>
             <WideScraper />
               </div>
  </div>

           </div>
        </div>
        <footer className='shadow c6 c10 text-center container-fluid'>
        <h1 className='c13'>Connect with us</h1>
      <a href='https://www.instagram.com/geekboy.tech/'>
        <Icon type="instagram" className='c9' />
      </a>
      <a href='https://www.facebook.com/GeekBoytech-102592467865382/?modal=admin_todo_tour'>
        <Icon type="facebook" className='c11'/>
      </a>

      <a href='https://twitter.com/GeekboyT'>
        <Icon type="twitter" className='c12'/>
      </a>


        </footer>
        </div>


  </div>
   }
}
export default Home;
