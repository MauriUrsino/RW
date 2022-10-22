import axios from "axios";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";

const NewPlaylist = () => {
  const navigate = useNavigate();
  const name = useInput();
  const description = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/playlists", {
        name: name.value,
        description: description.value,
      })
      .then((res) => res.data)
      .then((playlist) => {
        navigate(`/single/playlists/${playlist.id}`);
      })
      .catch(() => alert("Se ha producido un error al intentar crear la playlist."));
  };

  return (
    <div className="layout m-5">
      <h3 className="title is-3">New Playlist</h3>
      <form onSubmit={handleSubmit}>
        <label className="label my-3">Title</label>
        <input
          {...name}
          className="input my-3"
          type="text"
          placeholder="Title"
        />

        <label className="label my-3">Description</label>
        <input
          {...description}
          className="input my-3"
          type="text"
          placeholder="Description"
        />
        <button className="button is-link my-5">Submit</button>
      </form>
    </div>
  );
};

export default NewPlaylist;
