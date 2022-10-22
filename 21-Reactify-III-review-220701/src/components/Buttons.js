import { Link, useMatch } from "react-router-dom";

const Buttons = () => {
  const isNew = useMatch("single/playlists/:id/add");
  if (isNew) {
    return (
      <Link to="">
        <button className="button is-warning is-small">Stop adding</button>
      </Link>
    );
  }

  return (
    <Link to="add">
      <button className="button is-link is-small">Add tracks</button>
    </Link>
  );
};

export default Buttons;
