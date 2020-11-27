import React, { Component } from "react";
//import { Doughnut } from "react-chartjs-2";
import Doughnutt from "./components/Graphiques/Doughnutt.jsx";
import Linee from "./components/Graphiques/Linee.jsx";
import Graph from "./components/TodoList/Graph";
import DayPicker from "react-day-picker";
import Commentaire from "./components/Commentaire/Commentaire.jsx";
import Parameter from "./components/Parameter/Parameter.jsx";
import Form from "react-bootstrap/Form";
import Button from "./components/Bouton.jsx";

import {entreprise} from "./components/Entreprise/Entreprise.js"

import "./App.css";
import "react-day-picker/lib/style.css";

import Param from "./paramnoir.png";
import ParamA from "./paramvert.png";
import Dash from "./dashnoir.png";
import DashA from "./dashrose.png";

import Dashboard from "./Dashboard.jsx";


console.log(window.location.pathname); //si on peut voir l'url en haut
var id =
  window.location.pathname[1] === undefined ? 0 : window.location.pathname[1];
console.log(id);

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
></link>;
class App extends Component {
  constructor(props) {
    super(props);
    this.parameter = this.parameter.bind(this);
    this.dashboard = this.dashboard.bind(this);
    this.state = { page: 1 };
  }
  parameter() {
    this.setState({ page: 2 });
  }

  dashboard() {
    this.setState({ page: 1 });
  }

  render() {
    return (
      <div class="container" style={{ maxWidth: "2000px" }}>
        <div class="row">
          <div class="col-sm-2" style={{ fontWeight: "bold" }}>
            <header class="App-header">
              <div class="row">
                <img
                  src={entreprise[id].photo_prof}
                  style={{ margin: "auto", maxWidth: "75%" }}
                ></img>
              </div>
              <div class="row">
                <div class="choixEntre">
                  <div class="col-sm-12">
                    <div class="row">
                      <Button name="Entreprise 1" id="0" />
                    </div>
                    <div class="row">
                      <Button name="Entreprise 2" id="1" />
                    </div>
                  </div>
                </div>
              </div>

              {this.state.page === 1 ? (
                /* btn page 1*/
                <div>
                  <div
                    class="row"
                    onClick={this.dashboard}
                    style={{ marginTop: "40%", cursor: "pointer" }}
                  >
                    <div class="col-sm-2">
                      <img src={DashA}></img>
                    </div>
                    <div class="col-sm-10">
                      <a style={{ color: "#FDE1DE", fontSize: "100%" }}>
                        Mon DashBoard
                      </a>
                    </div>
                  </div>

                  <div
                    class="row"
                    onClick={this.parameter}
                    style={{ marginTop: "10%", cursor: "pointer" }}
                  >
                    <div class="col-sm-2">
                      <img src={Param}></img>
                    </div>
                    <div class="col-sm-10">
                      <a style={{ fontSize: "100%" }}> Mes Paramètres</a>
                    </div>
                  </div>
                </div>
              ) : (
                /*btn page 2 */
                <div>
                  <div
                    class="row"
                    onClick={this.dashboard}
                    style={{ marginTop: "40%", cursor: "pointer" }}
                  >
                    <div class="col-sm-2 col-xs-2">
                      <img src={Dash}></img>
                    </div>
                    <div class="col-sm-10 col-xs-10">
                      <a style={{ fontSize: "100%" }}>Mon DashBoard</a>
                    </div>
                  </div>
                  <div
                    class="row"
                    onClick={this.parameter}
                    style={{ marginTop: "10%", cursor: "pointer" }}
                  >
                    <div class="col-sm-2">
                      <img src={ParamA}></img>
                    </div>
                    <div class="col-sm-10">
                      <a style={{ color: "#78E6D0", fontSize: "100%" }}>
                        {" "}
                        Mes Paramètres
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </header>
          </div>

          {this.state.page === 1 ? (
            /* Page 1 */
            <div
              v-if="this.state.page == 1"
              class="col-sm-10"
              style={{ fontWeight: "bold" }}
            >
              <Dashboard user={entreprise[id]} />
            </div>
          ) : (
            /* Page 2 */
            <div class="col-sm-10">
              <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-9">
                  <div className="page2">
              
                <Parameter />
              </div>
                </div>
                
              </div>
            

              
            </div>
           
          )}
        </div>
      </div>
    );
  }
}

export default App;
