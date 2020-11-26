import React, { Component } from "react";
//import { Doughnut } from "react-chartjs-2";
import Doughnutt from "./components/Graphiques/Doughnutt.jsx";
import Linee from "./components/Graphiques/Linee.jsx";
import Graph from "./components/TodoList/Graph";
import DayPicker from "react-day-picker";
import Commentaire from "./components/Commentaire/Commentaire.jsx";
import calendrier from "./components/Calendrier/calendrier.jsx";
import Parameter from "./components/Parameter/Parameter.jsx";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";


import MapChart from "./components/Map/MapChart.js";

import "./App.css";
import "react-day-picker/lib/style.css";

import Logo from "./unknown.png";
import Param from "./paramnoir.png";
import ParamA from "./paramvert.png";
import Dash from "./dashnoir.png";
import DashA from "./dashrose.png";
import Calend from "./components/Calendrier/calendrier.jsx";

var entreprise = [
  {
    nom: "Apple",
    benef: [65, 59, 80, 81, 56, 55, 40, 55, 62, 10, 1, 3],
    donut:[[300, 50, 100],[50,10, 100]],

    photo_prof: "https://picsum.photos/200",
    couleur: "red",
    jaime: 0,
  },
  {
    nom: "martine",
    benef: [65, 59, 80, 81, 56, 55, 40, 55, 62, 10, 1, 66],
    donut:[[300, 50, 100], [300,10,  100]],
    photo_prof: "https://picsum.photos/200",
    couleur: "blue",
    jaime: 0,
  },
];

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
    this.changeentrepriseJade = this.changeentrepriseJade.bind(this);
    this.changeentrepriseMathilde = this.changeentrepriseMathilde.bind(this);
    this.state = {
      page: 1,
      entreprise: "Jade",
    };
  }
  parameter() {
    this.setState({ page: 2 });
  }

  dashboard() {
    this.setState({ page: 1 });
  }

  changeentrepriseJade() {
    this.setState({ entreprise: "Jade" });
  }
  changeentrepriseMathilde() {
    this.setState({ entreprise: "Mathilde" });
  }

  render() {
    return (
      
      <div class="container" style={{ maxWidth: "2000px" }}>
        <div class="row">
          <div class="col-sm-2" style={{ fontWeight: "bold" }}>
            <header class="App-header">
              <div class="row">
                <img src={Logo} style={{ margin: "auto" }}></img>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="choixEntre">
                    <div class="row">
                      {/* je sais c'est trop cheum */}

                      <Form>
                        <Form.Check
                          onClick={this.changeentrepriseJade}
                          type="radio"
                          label="Jade"
                          name="Jade"
                          id="Jade"
                        />
                        <Form.Check
                          onClick={this.changeentrepriseMathilde}
                          type="radio"
                          label="Mathilde"
                          name="Mathilde"
                          id="Mathilde"
                        />
                      </Form>
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
              <div class="row">
                <div class="col-sm-9">
                  <div class="row">
                    <div class="App-headerMilieu">
                      <div class="row">
                        <div class="col-sm-1"></div>
                        <div class="col-sm-10">
                          <titre>Bénéfices</titre>
                        </div>
                        <div class="col-sm-1"></div>
                      </div>
                      <div class="row">
                        <Linee user={entreprise[id]} />
                      </div>
                      <br></br>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="row">
                        <div class="App-headerMilieu">
                          <div class="row">
                            <div class="col-sm-1"></div>
                            <div class="col-sm-10">
                              <titre>Gains</titre>
                            </div>
                            <div class="col-sm-1"></div>
                          </div>

                          <div class="row">
                            <Doughnutt user={entreprise[id].donut[0]} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="row">
                        <div class="App-headerMilieu">
                          <div class="row">
                            <div class="col-sm-1"></div>
                            <div class="col-sm-10">
                              <titre>Dépenses</titre>
                            </div>
                            <div class="col-sm-1"></div>
                          </div>

                          <div class="row">
                            <Doughnutt user={entreprise[id].donut[1]} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="App-headerMilieu">
                        <div class="row">
                          <div class="col-sm-1"></div>
                          <div class="col-sm-10">
                            <titre>Commentaire</titre>
                          </div>
                          <div class="col-sm-1"></div>
                        </div>

                        <div class="row">
                          <Commentaire />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="row">
                    <div class="App-headerMilieu">
                      <div class="row">
                        <div class="col-sm-1"></div>
                        <div class="col-sm-10">
                          <titre>Date</titre>
                        </div>
                        <div class="col-sm-1"></div>
                      </div>
                      <div class="row" style={{ margin: "auto" }}>
                        <div class="col-sm-1 col-xs-1"></div>
                        <div class="col-sm-10 col-xs-10">
                          <div class="row">
                            <DayPicker />
                          </div>
                          <div class="col-sm-1 col-xs-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="App-headerMilieu">
                      <div class="row">
                        <div class="col-sm-1"></div>
                        <div class="col-sm-10">
                          <titre>À Faire</titre>
                        </div>
                        <div class="col-sm-1"></div>
                      </div>
                      <div class="row">
                        <Graph />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="App-headerMilieu">
                      <div class="row">
                        <div class="col-sm-3"></div>
                        <div class="col-sm-7">
                          <titre>Map</titre>
                        </div>
                      </div>
                      <div class="row">
                         <MapChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Page 2 */
            <div className="page2">
              <Parameter />
            </div>
          )}
        </div>
      </div>
      
      
     );
    
  }

}

export default App;
