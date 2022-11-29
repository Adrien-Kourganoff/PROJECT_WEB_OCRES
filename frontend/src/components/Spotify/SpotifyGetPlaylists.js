import React, { useEffect, useState } from "react";
import axios from "axios";

const SpotifyGetPlaylists = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("acces_token")) {
      setToken(localStorage.getItem("acess_token"));
    }
  }, []);

  const handleGetPlaylists = () => {
    axios.get("https");
  };

  return <button> Obtenir la Playlist </button>;
};

export default SpotifyGetPlaylists;
