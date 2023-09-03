import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { useRef } from "react";
import useSound from "use-sound";
import { FaHeart } from 'react-icons/fa';
import "./control.css";



function Controls(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const currentAudio = useRef();
  const [play, { pause, duration, sound }] = useSound();
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  const LikeSong = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);

    setShowPopup(!showPopup);

  }

  const hidePopup = () => {
    setShowPopup(false);
  };

  


  const Popup = ({message,duration,onHide}) => {
    useEffect(() => {
      const timeout = setTimeout(() => {
        onHide();
      }, duration);
  
      return () => clearTimeout(timeout);
    }, [duration, onHide]);
    return (
      <div className="popup">
        <p align="left" marginLeft='20px' >
           Added to Liked Songs
          </p>
      </div>
    );
  };

  


  return (
    <div className="c-player--controls">
     
      {/* <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </button> */}
      <button className="playButton" onClick={() => props.SkipSong(false)}>
        <IconContext.Provider value={{ size: "3em", color: "#6699FF" }}>
          <BiSkipPrevious />
        </IconContext.Provider>
      </button>
      {!isPlaying ? (
        <button className="playButton" onClick={() => props.setIsPlaying(!props.isPlaying)}>
          <IconContext.Provider value={{ size: "3em", color: "#6699FF" }}>
            <AiFillPlayCircle />
          </IconContext.Provider>
        </button>
      ) : (
        <button className="playButton" onClick={() => props.setIsPlaying()}>
          <IconContext.Provider value={{ size: "3em", color: "#6699FF" }}>
            <AiFillPauseCircle />
          </IconContext.Provider>
        </button>
      )}
      <button className="playButton" onClick={() => props.SkipSong()}>
        <IconContext.Provider value={{ size: "3em", color: "#6699FF" }}>
          <BiSkipNext />
        </IconContext.Provider>
        {/* <SkipSong /> */}
      </button>
      <button className="likeSong" onClick={LikeSong} >
      <FaHeart size={20} color={isLiked ? '#6699FF' : 'grey'} />
      <span style={{ marginRight: '4px' }}>{likeCount}</span>
      </button>
      {showPopup  && <Popup duration={3500} onHide={hidePopup}  />}
    </div>
    
  );
}

export default Controls;
