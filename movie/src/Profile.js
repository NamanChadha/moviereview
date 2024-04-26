import './App.css';
import Image from './bingebuddy.png';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';





function Profile() {




  const API_URL ="https://api.themoviedb.org/3/movie/popular?api_key=fa1192549721df01a1fb28a7788e6608"
  const API_SEARCH ="https://api.themoviedb.org/3/search/movie?api_key=fa1192549721df01a1fb28a7788e6608&query="
  
  
  const [movies, setMovies]= useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
  useEffect(() => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results)
    } )
  },[])
  
  
  
    console.log(movies)
   
    
    const handleSubmit = (e) =>{
      e.preventDefault();
  
      fetch(API_SEARCH+searchTerm)
        .then((res) => res.json())
        .then(data => {
        setMovies(data.results)
      })
    }
  
      console.log(searchTerm)




  return (
    <div className="App">
      <header className="header">
      <div className="logo">
        <img src={Image} style={{width:'80px', height:'50px'}}alt="Logo" />
      </div>
      <div className="navigation">
        <button>Home</button>
        <button >Watchlist</button>
        <button>Profile</button>
        <button style={{ backgroundColor: '#d35400' }} >Logout</button>
      </div>
      <div className='form'>
        <form>
          <input  />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </header>

    <div className="profile-content">

      <div className="profile-info">
        <div className="profile-pic" style={{color:'#fff'}}> 
          <img src={Image} alt="profile pic" style={{width:'200px', height:'200px'}}/>
          <h2>Praghathi</h2>
        </div>
        <div className="profile-bio"style={{color:'#fff'}}>
          <h4>Bio</h4>
          <p>Lights, camera, Movie Geek! 🎬 The ultimate cinephile with a passion for every frame. From classics to cult hits, they're your go-to for all things cinematic. 🍿
          Lights, camera, Movie Geek! 🎬 The ultimate cinephile with a passion for every frame. From classics to cult hits, they're your go-to for all things cinematic. 🍿
          Lights, camera, Movie Geek! 🎬 The ultimate cinephile with a passion for every frame. From classics to cult hits, they're your go-to for all things cinematic. 🍿
          </p>

        </div>
      </div>
        <h4 id='moviewatched'>My movies</h4>
        <div className="movies-watched">
        
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            {...movie}

            
          />
        ))}
      

        </div>
    

        </div>

    </div>
    
  );
}

export default Profile;
