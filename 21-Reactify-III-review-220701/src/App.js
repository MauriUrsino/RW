import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import axios from "axios";
import { Navigate, Route, Routes } from "react-router";
import Grid from "./components/Grid";
import NotFound from "./commons/NotFound";
import NewPlaylist from "./components/NewPlaylist";

const App = () => {
  const [playlists, setPlaylists] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

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
    axios
      .get("/api/albums")
      .then((res) => res.data)
      .then((albums) => setAlbums(albums.items))
      .catch(() => console.error("Necesitas loguearte con Spotify para obtener tus álbumes."));
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
        <Routes>
          <Route path="/" element={<p>¡Bienvenidos a Reactify!</p>} />
          <Route path="404" element={<NotFound />} />
          <Route
            path="collection/:type"
            element={
              <Grid albums={albums} artists={artists} playlists={playlists} />
            }
          />
          <Route path="single/:type/:id/*" element={<Content />} />
          <Route path="new-playlist" element={<NewPlaylist />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
