//import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import { useState, useEffect, Component } from "react";
import ColorPicker, { useColorPicker } from "react-best-gradient-color-picker";
import Login from "./Components/Login/login";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { ReactDOM } from "react";
import Player from "./Components/Player/Player";
import BackgroundVideo from "react-background-video-player";
import video from "./Components/Background/lofi-retro-disc-moewalls-com.mp4";
import Footer from "./Components/Footer";
import Sidear from "./Components/SideBar";
import { songs, sleep, indie } from "./Components/Music/songdata";
//import SideButton from "./Components/Player/Sidebutton";
import Button from "@mui/material/Button";


function App() {
  const header = "header";
  const [color, setColor] = useState(
    "linear-gradient(90deg, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)"
  );

  <ColorPicker value={color} onChange={setColor} />;

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [newmood, setMood] = useState("songs","indie","sleep");
  
  // const handleMoodChange = (newMood) => {
  //   setMood(newMood);
  // };


  useEffect(() => {
    setNextSongIndex(() => {
        if (currentSongIndex + 1 > songs.length - 1) {
          return 0;
        } else {
          return currentSongIndex + 1;
        }
    });
  }, [currentSongIndex]);
  

  // useEffect(() => {
  //   setNextSongIndex(() => {
  //     if (currentSongIndex + 1 > sleep.length - 1) {
  //       return 0;
  //     } else {
  //       return currentSongIndex + 1;
  //     }
  //   });
  // }, [currentSongIndex]);

  // useEffect(() => {
  //   setNextSongIndex(() => {
  //     if (currentSongIndex + 1 > indie.length - 1) {
  //       return 0;
  //     } else {
  //       return currentSongIndex + 1;
  //     }
  //   });
  // }, [currentSongIndex]);

  const fullscreenHandler = () => {
    if (!fullscreen) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  return (
    <>
      <div id="background-video">
        <BackgroundVideo src={video} autoPlay loop muted></BackgroundVideo>
        {/* <div/> */}
      </div>
      {/* <Header></Header> */}

      <div className="App">
        <h1 align="left">Advaya</h1>

        <div className='song-name'>
        {/* {newmood === 'songs' ? (
          <span> {songs[currentSongIndex].title}</span>
        ) : newmood === 'sleep' ? (
          <span> {sleep[currentSongIndex].title}</span>
        ) : (
          <span> {indie[currentSongIndex].title}</span>
        )} */}
      </div>
        <div className="controller">
          
            <Player
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              nextSongIndex={nextSongIndex}
              songs={songs}
            />
        </div>
        
      </div>
      <button onClick={fullscreenHandler} className="fullscreen-btn">
        <i className="fas fa-expand fa-lg"></i>
      </button>
      <div className="nav_options">
        {/* </div> */}
        {/* <Login /> */}
      
        {/* <div id="login"> */}
      </div>
      <Footer />
      {/* <Link to="/Components/login">Login</Link> */}
      {/* <a href="/Components/login">Login</a> */}
      {/* </div> */}
      
    </>
  );
}

export default App;

{/* <Button
        variant="contained"
        color="primary"
        onClick={() => handleMoodChange(songs)}
      >
        
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleMoodChange(sleep)}
      >
        Sleep
      </Button>
      
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleMoodChange(indie)}
      >
        Indie
      </Button> */}
      

        
        {/* <Sidear/> */}
