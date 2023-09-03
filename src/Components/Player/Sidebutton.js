import React from "react";
import Button from "@mui/material/Button";
import { indie, sleep, songs } from "../Music/songdata";
import { useState, useEffect, Component } from "react";

// function FunctionalButton({ text, onClick }) {
//     const handleClick = () => {
//       onClick(text); // Pass the button text to the onClick handler
//     };
// const{mood}=



function SideButton() {
  const [mood, setMood] = useState("songs","indie","sleep");
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const handleMoodChange = (newMood) => {
    setMood(newMood);
  };

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  
  return (
    <div
      classname="sidebutton"
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      {mood === "songs" ? (
        <span>{songs[currentSongIndex].name}</span>
      ) : mood === "indie" ? (
        <span>{indie[currentSongIndex].name}</span>
      ) : (
        <span>{sleep[currentSongIndex].name}</span>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleMoodChange("indie")}
      >
        Indie
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleMoodChange("sleep")}
      >
        Sleep
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleMoodChange("songs")}
      >
        Songs
      </Button>
    </div>
  );
}

export default SideButton;


