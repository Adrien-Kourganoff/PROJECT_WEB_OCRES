import { useEffect, useState } from "react";
import "./spotify.css";
import axios from "axios";

function Spotify() {
  const CLIENT_ID = "4758a41c44b8416b81efdb1e1f9a9ff5";
  const REDIRECT_URI = "http://localhost:3000/dashboard";
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      hearders: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    console.log(data);
  };

  return (
    <div className="spotify">
      <header className="spotify-header">
        <h1> Spotify </h1>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            {" "}
            Se connecter a Spotify
          </a>
        ) : (
          <button onClick={logout}> Se deconnecter</button>
        )}

        {token ? (
          <form onSubmit={searchArtists}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type="submit"> Recherche </button>
          </form>
        ) : (
          <h2> S'il vous plait connecter vous</h2>
        )}
      </header>
    </div>
  );
}

export default Spotify;
