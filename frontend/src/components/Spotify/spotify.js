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
  const [artists, setArtists] = useState([]);

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
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    setArtists(data.artists.items[0]);
    console.log(artists);
  };

  const renderArtists = () => {
    if (artists.length === 0) {
      return <div>{""}</div>;
    }
    return (
      <div>
        {artists.images.length ? (
          <div>
            <img width={"25%"} src={artists.images[0].url} alt="" />
          </div>
        ) : (
          <div>No Image</div>
        )}
        {artists.name}
      </div>
    );
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
        {console.log("token", token)}
        {token ? (
          <div>
            <form onSubmit={searchArtists}>
              <input
                type="text"
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <button type="submit"> Rechercher </button>
            </form>
            {renderArtists()}
          </div>
        ) : (
          <h2> Connectez vous</h2>
        )}
      </header>
    </div>
  );
}

export default Spotify;
