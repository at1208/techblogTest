import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

//Genre Section
import Home from './components/Home/home'
import Phones from './components/Phones/phones'
import HeadphoneEarphones from './components/HeadphoneEarphones/headphoneearphones'
import LeakRumors from './components/LeaksRumors/leaksrumors'
import Laptops from './components/Laptops/laptops'
import GamesSection from './components/GamesSection/gamesection'




//Blogs
import Realmex2pro from './components/Phones/realmex2proDetail'
import Top5Under60000 from './components/Laptops/top5under60000Detail';
import Overwatch2 from './components/GamesSection/overwatch2Detail';
import HarleyDavidsonBikes from './components/LeaksRumors/harleydavidsonbikesDetail';
import WantsToMapOcean from './components/LeaksRumors/wantstomapoceanDetail';
import DeleteFacebook from './components/LeaksRumors/deletingfbDetail';
import MobileUnder5000 from './components/Phones/mobileunder5000Detail';
import DeathStranding from './components/GamesSection/deathstrandingDetail';
import Halo from './components/LeaksRumors/haloDetail';
import SpeedLaptopDetail from './components/Laptops/speedlaptopDetail';
import MIUI11Detail from './components/Phones/miui11Detail';
import PubgmobileDetail from './components/LeaksRumors/pubgmobileDetail';
import GTA6 from './components/GamesSection/gta6Detail';
import AppleCard from './components/LeaksRumors/applecreditcardDetail';
import RedgearPro from './components/GamesSection/redgearproDetail';
import Nightangle from './components/LeaksRumors/nightangleDetail';
import SD865 from './components/LeaksRumors/sd865Detail';
import MINOTE10 from './components/Phones/minote10Detail'
import Top5GamingHeadphone from './components/HeadphoneEarphones/top5gamingheadphoneDetail';
import Realme5Detail from './components/Phones/realme5Detail';
import GoogleXray from './components/LeaksRumors/googlexrayDetail';
import Jamaica from './components/HeadphoneEarphones/jamaicaDetail'



const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};


ReactDOM.render(
  <BrowserRouter>
   <Route component={ScrollToTop} />
   <Route path='/' exact component={Home} />
   <Route path='/phones' exact component={Phones} />
   <Route path='/gaming-section' exact component={GamesSection} />
   <Route path='/headphone-earphones' exact component={HeadphoneEarphones} />
   <Route path='/laptops' exact component={Laptops} />
   <Route path='/leaks-rumors' exact component={LeakRumors} />
   <Route path='/trendingnews' exact component={Laptops} />
   <Route path='/phones/realme-x2-pro' exact component={Realmex2pro} />
   <Route path='/laptops/top-5-gaming-laptops-under-rs60000' exact component={Top5Under60000} />
   <Route path='/gaming-section/overwatch-2' exact component={Overwatch2} />
   <Route path='/leaksrumors/harley-davidson-electric-pedal-bikes' exact component={HarleyDavidsonBikes} />
   <Route path='/leaksrumors/Australian-based-start-up-wants-to-map-the-Oceans' exact component={WantsToMapOcean} />
   <Route path='/leaksrumors/Brian-Acton-still-behind-the-idea-of-deleting-Facebook' exact component={DeleteFacebook} />
   <Route path='/phones/best-mobiles-under-5000' exact component={MobileUnder5000} />
   <Route path='/gaming-section/death-stranding' exact component={DeathStranding} />
   <Route path='/leaks-rumors/halo-tv-series-goes-into-production' exact component={Halo} />
   <Route path='/laptops/7-ways-to-speed-up-your-laptops' exact component={SpeedLaptopDetail} />
   <Route path='/phones/miui-11-life-gets-easier-Features-and-rollout-dates' exact component={MIUI11Detail} />
   <Route path='/leaks-rumors/PUBG-Mobile-0.16.0-Update-could-bring-Erangle-2.0' exact component={PubgmobileDetail} />
   <Route path='/gaming-section/GTA-6-LAUNCH-DATE' exact component={GTA6} />
   <Route path='/leaksrumors/Apple-credit-card-under-investigation-for-discrimination' exact component={AppleCard} />
   <Route path='/gaming-section/Redgear-Pro-Wireless-Gaming-Gamepad-“Best-Gaming-Controller-For-PC”' exact component={RedgearPro} />
   <Route path='/leaks-rumors/Google-announces-Project-Nightingale' exact component={Nightangle} />
   <Route path='/Qualcomm-Snapdragon-865-specs-leaked' exact component={SD865} />
   <Route path='/Phones/MI-Note-10-Dream-Big' exact component={MINOTE10} />
   <Route path='/HeadphoneEarphones/TOP-5-GAMING-HEADPHONES' exact component={Top5GamingHeadphone} />
   <Route path='/Phones/REALME-5S-is-launching-on-November-20-2019-along-with-X2-pro' exact component={Realme5Detail} />
   <Route path='/Google-abandons-100000-chest-X-rays-release' exact component={GoogleXray} />
   <Route path='/House-Of-Marley-Smile-Jamaica-EM-JE041-SB-in-ear' exact component={Jamaica} />



  </BrowserRouter>
  ,document.getElementById('root'));
