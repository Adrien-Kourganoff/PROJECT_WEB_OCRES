import React from "react";
import { useNavigate } from "react-router-dom";

import "./welcome.css";

import image from "./image.png";

const Welcome = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  // To redirect to /horloge we have to use useNavigate hook
  const navigate = useNavigate();

  const onSubmit = () => {
    console.log("name", name);
    navigate("/dashboard");
  };

  return (
    <div>
      <img className="image" src={image} />
      <h1 className="Welcome">Bienvenue sur SongBox</h1>

      <form onSubmit={onSubmit}>
        {/* formulaire nom d'artiste  */}
        <div className="formulaire">
          <label>
            <input
              type="text"
              className="artiste"
              onChange={(e) => setName(e.target.value)}
              size="15"
              placeholder="   Nom d'artiste"
              value={name}
              required
            />
          </label>

          {/* formulaire mot de passe   */}

          <label>
            <p>
              <input
                type="password"
                className="mdp"
                onChange={(e) => setPassword(e.target.value)}
                size="15"
                placeholder="    Mot de passe"
                value={password}
                required
              />{" "}
            </p>
          </label>
          <input
            className="form-submit-button"
            type="submit"
            value="Se connecter"
          />
        </div>
      </form>
    </div>
  );
};

export default Welcome;
