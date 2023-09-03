import React, { useState, useEffect } from "react";
import axios from "axios";
import Details from "./Player/Details";



const LikedSongsComponent = (props) => {
  const [likedSongs, setLikedSongs] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [currentSongIndex, setcurrentSongIndex ]= useState(0);
  const handleLikeSong = (LikeSongs) => {
    // Add the liked LikeSongs to the state
    setLikedSongs([...likedSongs, LikeSongs]);
  };

  return (
    <div>
      <h1>Liked Songs</h1>
      <ul>
        {likedSongs.map((LikeSongs) => (
          <li key={LikeSongs.id}>{LikeSongs.title}</li>
        ))}
      </ul>
      <button onClick={() => handleLikeSong({ })}>
        {/* <h3 className="details-title">{props.LikeSongs.title}</h3> */}
        {/* <h6 className="details-artist">{props.LikeSongs.artist}</h6> */}
      </button>
    </div>
  );
};

//   useEffect(() => {
//     fetchLikedSongs();
//   }, []);

//   const fetchLikedSongs = () => {
//     axios.get('https://api.example.com/liked-LikeSongs', {
//       // Include any necessary headers or authentication tokens
//     })
//       .then(response => {
//         setLikedSongs(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching liked LikeSongs:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Liked LikeSongs</h1>
//       <ul>
//         {likedSongs.map(LikeSongs => (
//           <li key={LikeSongs.id}>
//             {LikeSongs.title} - {LikeSongs.artist}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default LikedSongsComponent;

// import React, { useState } from 'react';

// const LikedSongsComponent = () => {
//   const [likedSongs, setLikedSongs] = useState([]);

//   const handleLikeSong = (LikeSongs) => {
//     // Add the liked LikeSongs to the state
//     setLikedSongs([...likedSongs, LikeSongs]);
//   };

//   return (
//     <div>
//       <h1>Liked LikeSongs</h1>
//       <ul>
//         {likedSongs.map((LikeSongs) => (
//           <li key={LikeSongs.id}>{LikeSongs.title}</li>
//         ))}
//       </ul>
//       <button onClick={() => handleLikeSong({ id: 1, title: 'LikeSongs Title' })}>
//         Like LikeSongs
//       </button>
//     </div>
//   );
// };

// export default LikedSongsComponent;
