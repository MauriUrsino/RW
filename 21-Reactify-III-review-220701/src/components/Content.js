import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router";
import axios from "axios";

import Header from "../commons/Header";
import TrackListItem from "../commons/TrackListItem";
import { capitalize } from "../utils/functions";
import useInput from "../hooks/useInput";

const Content = () => {
  const navigate = useNavigate();
  const { type, id } = useParams();
  const [data, setData] = useState({});
  const [searchedTracks, setSearchedTracks] = useState([]);
  const search = useInput();

  const fetchPlaylist = () => {
    axios
      .get(`/api/${type}/${id}`)
      .then((res) => res.data)
      .then((data) => setData(data))
      .catch(() => {
        navigate("/404");
      });
  };

  useEffect(() => {
    fetchPlaylist();
  }, [id]);

  if (!data.id) return <p>No hay datos</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`/api/tracks/search?q=${search.value}`)
      .then((res) => res.data)
      .then((matches) => {
        setSearchedTracks(matches.items);
      })
      .catch(() => alert("Se ha producido un error al intentar buscar la canción."));
  };

  const addToPlaylist = (track) => {
    axios
      .post(`/api/playlists/${id}/tracks`, { uri: track.uri })
      .then(() => {
        alert("Track agregado exitosamente");
        return axios.get(`/api/${type}/${id}`);
      })
      .then((res) => res.data)
      .then((data) => setData(data))
      .catch(() => alert("Se ha producido un error al intentar agregar la canción."));
  };

  return (
    <section className="layout">
      <Header {...data} type={capitalize(type)} />
      <Routes>
        <Route
          path="add"
          element={
            <>
              <form onSubmit={handleSubmit}>
                <label className="label my-3">Search</label>
                <input
                  {...search}
                  className="input my-3"
                  type="text"
                  placeholder="Search tracks"
                />
              </form>
              <TrackListItem
                tracks={searchedTracks || []}
                addToPlaylist={addToPlaylist}
              />
            </>
          }
        />
        <Route path="" element={<TrackListItem tracks={data.tracks || []} />} />
      </Routes>
    </section>
  );
};

export default Content;
