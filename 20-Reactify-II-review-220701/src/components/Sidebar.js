import { Link } from "react-router-dom";

const Sidebar = ({ playlists, artists, handlePlaylistSelect, handleArtistSelect }) => {

  return (
    <aside className="menu column is-one-quarter">
      <p className="menu-label">Playlists</p>
      <ul className="menu-list">
        {playlists.map((playlist, i) => (
          <li key={i}>
            <Link to={`single/playlists/${playlist.id}`}>{playlist.name}</Link>
          </li>
        ))}
      </ul>
      <p className="menu-label">Artists</p>
      <ul className="menu-list">
        {artists.map((artist, i) => (
          <li key={i}>
            <Link to={`single/artists/${artist.id}`}>{artist.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
