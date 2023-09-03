import { useEffect, useState } from "react";
import { useRef } from "react";
import useSound from "use-sound";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./player.css";
import Details from "./Details";
import Controls from "../Controls/Controls";
import { changeVolume } from "../VolumeButton";
import { songs,indie,sleep } from "../Music/songdata";

export default function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const currentAudio = useRef();
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });
  const [seconds, setSeconds] = useState();
  const [play, { pause, duration, sound }] = useSound();
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [isPlaying]);
  // useEffect(() => {
  //   const sec = duration / 1000;
  //   const min = Math.floor(sec / 60);
  //   const secRemain = Math.floor(sec % 60);
  //   const time = {
  //     min: min,
  //     sec: secRemain
  //   };
  // )

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  // const playingButton = () => {
  //   if (isPlaying) {
  //     pause();
  //     setIsPlaying(false);
  //   } else {
  //     play();
  //     setIsPlaying(true);
  //   }
  // };

  const SkipSong = (forwards = true) => {
    props.setCurrentSongIndex(() => {
      let temp = props.currentSongIndex;
  
      if (forwards) {
        temp = getRandomIndex(props.songs.length);
    } else {
      temp = getRandomIndex(props.songs.length);
    }
  
    return temp;
  });
};

const getRandomIndex = (min) => {
  return Math.floor(Math.random() * min);
};

  const LikeSong = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="component">
      <div></div>
      <h2>Now Playing</h2>
      <img className="musicCover" src="https://picsum.photos/200/200" />
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
        autoPlay 
      ></audio>
      <div className="music-Container">
        <p></p>
        <Details song={props.songs[props.currentSongIndex]}/>
      </div>
      <div>
        <div className="time">
          {/* <p>
            {currTime.min}:{currTime.sec}
          </p>
          <p>
            {time.min}:{time.sec}
          </p> */}
        </div>
        {/* <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline"
          onChange={(e) => {
            sound.seek([e.currentAudio]);
          }}
        /> */}
      </div>
      <div>
        <Controls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={() => SkipSong(true)}
          LikeSong={LikeSong}
        />
        <br></br>
        {/* <p> Next up<br></br><span>{ props.songs[props.currentSongIndex + 1].title }  by  {props.songs[props.currentSongIndex + 1].artist}</span></p> */}
      </div>
    </div>
  );
}

// const handleNextSong = ()=>{
//   if (musicIndex >= musicAPI.length - 1) {
//     let setNumber = 0;
//     setMusicIndex(setNumber);
//     updateCurrentMusicDetails(setNumber);
//   }else{
//     let setNumber = musicIndex + 1;
//     setMusicIndex(setNumber)
//     updateCurrentMusicDetails(setNumber);
//   }
// }

// const handlePrevSong = ()=>{
//   if (musicIndex === 0) {
//     let setNumber = musicAPI.length - 1;
//     setMusicIndex(setNumber);
//     updateCurrentMusicDetails(setNumber);
//   }else{
//     let setNumber = musicIndex - 1;
//     setMusicIndex(setNumber)
//     updateCurrentMusicDetails(setNumber);
//   }
// }

// const updateCurrentMusicDetails = (number)=>{
//   let musicObject = musicAPI[number];
//   currentAudio.current.src = musicObject.songSrc;
//   currentAudio.current.play();
//   updateCurrentMusicDetails({
//     songName: musicObject.songName,
//     songArtist: musicObject.songArtist,
//     songSrc: musicObject.songSrc,
//     songAvatar: musicObject.songAvatar
//   })
//   setIsAudioPlaying(true);
// }

/*<button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#6699FF" }}>
            <BiSkipPrevious />
          </IconContext.Provider>

        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#6699FF" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#6699FF" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#6699FF" }}>
            <BiSkipNext />
          </IconContext.Provider>
         {/* <SkipSong /> 
        </button>
         */
