import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../commons/Header";
import TrackListItem from "../commons/TrackListItem";

const Content = ({ playlist, artist, type }) => {
  const [singlePlaylist, setSinglePlaylist] = useState({});
  const [singleArtist, setSingleArtist] = useState({});

  useEffect(() => {
    if (!playlist.id) return;
    axios
      .get(`/api/playlists/${playlist.id}`)
      .then((res) => res.data)
      .then((pl) => setSinglePlaylist(pl))
      .catch(() => console.error("No se ha encontrado la playlist."));
  }, [playlist]);

  useEffect(() => {
    if (!artist.id) return;
    axios
      .get(`/api/artists/${artist.id}`)
      .then((res) => res.data)
      .then((artist) => setSingleArtist(artist))
      .catch(() => console.error("No se ha encontrado el artista."));
  }, [artist]);

  let data = type == "Artist" ? singleArtist : singlePlaylist;

  if (!data.id) return <h3>No hay datos</h3>;

  return (
    <section className="layout">
      <Header {...data} type={type} />
      <TrackListItem tracks={data.tracks || []} />
    </section>
  );
};

export default Content;
