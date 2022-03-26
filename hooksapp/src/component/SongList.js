import React, { useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";
const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "almost meormy", id: 2 },
    { title: "almoshome wastson", id: 3 },
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuid() }]);
  };

  useEffect(() => {
    console.log("useEffectt", songs);
  });
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
