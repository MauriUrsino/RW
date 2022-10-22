import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import axios from "axios";

const App = () => {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState({});
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState({});
  const [type, setType] = useState("");

  useEffect(() => {
    axios
      .get("/api/playlists")
      .then((res) => res.data)
      .then((playlists) => setPlaylists(playlists.items))
      .catch(() => console.error("Necesitas loguearte con Spotify para obtener tus playlists."));
    axios
      .get("/api/artists")
      .then((res) => res.data)
      .then((artists) => setArtists(artists.items))
      .catch(() => console.error("Necesitas loguearte con Spotify para obtener tus artistas."));
  }, []);

  const handlePlaylistSelect = (pl) => {
    setSelectedPlaylist(pl);
    setType("Playlist");
  };

  const handleArtistSelect = (artist) => {
    setSelectedArtist(artist);
    setType("Artist");
  };

  return (
    <div>
      <Navbar />
      <div className="container is-fluid columns">
        <Sidebar
          playlists={playlists}
          artists={artists}
          handlePlaylistSelect={handlePlaylistSelect}
          handleArtistSelect={handleArtistSelect}
        />
        <Content
          playlist={selectedPlaylist}
          artist={selectedArtist}
          type={type}
        />
      </div>
    </div>
  );
};

export default App;
