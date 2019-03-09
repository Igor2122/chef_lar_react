import React from 'react';
// import classes from './Home.css';
// import { videoTagString, VideoTag } from 'react-video-tag'
import ImgGrid from '../../ImgGrid/ImgGrid';
import AboutComponent from '../../../components/Landing/backgroundVideoDiv/backgroundVideoDiv';
import PersonalStatementDiv from '../../../components/Landing/personalStatementDiv/PersonalStatementDiv';
import Navigation from '../../Navigation/Navigation';


const home = () => {

   
   return (
      <div>
         <Navigation />
         <AboutComponent />
         <PersonalStatementDiv />
         <ImgGrid />
      </div>
   );
};



export default home;
