import React, { Component } from "react";
//import { Doughnut } from "react-chartjs-2";
import DoughnuttGain from "./components/Graphiques/DoughnuttGain.jsx";
import DoughnuttDep from "./components/Graphiques/DoughnuttDep.jsx";

import Linee from "./components/Graphiques/Linee.jsx";
import Graph from "./components/TodoList/Graph";

import Commentaire from "./components/Commentaire/Commentaire.jsx";

import Agenda from "./components/Agenda/Agenda";

import MapChart from "./components/Map/MapChart.js";

import "./Dashboard.css";



//on a une etreprise en user
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.parameter = this.parameter.bind(this);
    this.dashboard = this.dashboard.bind(this);
  }
  parameter() {
    this.setState({ page: 2 });
  }

  dashboard() {
    this.setState({ page: 1 });
  }

  
  render() {
    return (
      <div className="contain">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-8">
          <div className="row">
            <div className="App-headerMilieu">
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <titre>Chiffre d'Affaire</titre>
                </div>
                <div className="col-sm-1"></div>
              </div>
              <div className="row">
                <Linee entreprise={this.props.entreprise} />
              </div>
              <br></br>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <div className="App-headerMilieu">
                  <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                      <titre>Gains</titre>
                    </div>
                    <div className="col-sm-1"></div>
                  </div>

                  <div className="row">
                    <DoughnuttGain gain={this.props.entreprise.donut.gain} entreprise={this.props.entreprise}/>
    </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="App-headerMilieu">
                  <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                      <titre>Dépenses</titre>
                    </div>
                    <div className="col-sm-1"></div>
                  </div>
                  <div className="row">
                    <DoughnuttDep dep={this.props.entreprise.donut.dep} entreprise={this.props.entreprise}/>
    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="App-headerMilieu">
                <div className="row">
                  <div className="col-sm-1"></div>
                  <div className="col-sm-10">
                    <titre>Commentaires</titre>
                  </div>
                  <div className="col-sm-1"></div>
                </div>

                <div className="row">
                  <Commentaire entreprise={this.props.entreprise} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 visible-lg-* hidden-md hidden-sm hidden-xs " > 
          <div className="row">
            <div className="App-headerMilieu">
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <titre>Emploi du temps</titre>
                </div>
                <div className="col-sm-1"></div>
              </div>
              <div className="row">
                    <Agenda entreprise={this.props.entreprise} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="App-headerMilieu">
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <titre>À Faire</titre>
                </div>
                <div className="col-sm-1"></div>
              </div>
              <div className="row">
                <Graph entreprise={this.props.entreprise} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="App-headerMilieu">
              <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-7">
                  <titre>Map</titre>
                </div>
              </div>
              <div className="row">
                <MapChart />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <br/>
      <br/>
      <br/>
      <div className="row">
      <div className="col-sm-8 hidden-lg col-md-12" > 
          <div className="row">
            <div className="App-headerMilieu">
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <titre>Emploi du temps</titre>
                </div>
                <div className="col-sm-1"></div>
              </div>
              <div className="row">
                    <Agenda entreprise={this.props.entreprise} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="App-headerMilieu">
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <titre>À Faire</titre>
                </div>
                <div className="col-sm-1"></div>
              </div>
              <div className="row">
                <Graph entreprise={this.props.entreprise} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="App-headerMilieu">
              <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-7">
                  <titre>Map</titre>
                </div>
              </div>
              <div className="row">
                <MapChart />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      </div>
    );
  }
}

export default Dashboard;
