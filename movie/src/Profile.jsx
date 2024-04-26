import './App.css';
import Image from './bingebuddy.png';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';
function Profile() {
  return (
    <div className="Profile">
    <div className="profile-content">

      <div className="profile-info">
        <div className="profile-pic" style={{color:'#fff'}}> 
          <img src={Image} alt="profile pic" style={{width:'200px', height:'200px'}}/>
          <h2>User</h2>
        </div>
        <div className="profile-bio"style={{color:'#fff'}}>
          <h4>Bio</h4>
          <p>Lights, camera, Movie Geek! 🎬 The ultimate cinephile with a passion for every frame. From classics to cult hits, they're your go-to for all things cinematic. 🍿
          Lights, camera, Movie Geek! 🎬 The ultimate cinephile with a passion for every frame. From classics to cult hits, they're your go-to for all things cinematic. 🍿
          Lights, camera, Movie Geek! 🎬 The ultimate cinephile with a passion for every frame. From classics to cult hits, they're your go-to for all things cinematic. 🍿
          </p>

        </div>
      </div>
    </div>

  </div>
  );
}

export default Profile;
