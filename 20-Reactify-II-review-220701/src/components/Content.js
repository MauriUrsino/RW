import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../commons/Header";
import TrackListItem from "../commons/TrackListItem";
import { useParams, useNavigate } from "react-router";

const Content = () => {
  const navigate = useNavigate();
  const { type, id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`/api/${type}/${id}`)
      .then((res) => res.data)
      .then((data) => setData(data))
      .catch(() => {
        navigate("/404");
      });
  }, [id]);

  if (!data.id) return <h3>No hay datos</h3>;

  return (
    <section className="layout">
      <Header {...data} type={type} />
      <TrackListItem tracks={data.tracks || []} />
    </section>
  );
};

export default Content;
