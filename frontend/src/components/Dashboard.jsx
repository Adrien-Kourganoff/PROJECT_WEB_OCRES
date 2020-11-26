import React, { Component } from "react";
//import { Doughnut } from "react-chartjs-2";
import Doughnutt from "./Graphiques/Doughnutt.jsx";
import Linee from "./Graphiques/Linee.jsx";
import Graph from "./TodoList/Graph";
import DayPicker from "react-day-picker";
import Commentaire from "./Commentaire/Commentaire.jsx";
import calendrier from "./Calendrier/calendrier.jsx";
import Parameter from "./Parameter/Parameter.jsx";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

//import MapChart from "./components/Map/MapChart.js";

import "./Dashboard.css";
import "react-day-picker/lib/style.css";

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
                <Linee user={this.props.user} />
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
                    <Doughnutt user={this.props.user.donut[0]} />
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
                    <Doughnutt user={this.props.user.donut[1]} />
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
                {/*<MapChart />*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
