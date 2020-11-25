import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import Logo from "./unknown.png";
import Param from "./param.png";
import Dash from "./dash.png";
import Graph from "./components/Graph";
import "./App.css";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

var option = {
  legend: {
    display: false,
  },
};
var dataDep = {
  labels: ["Fourniture", "Salaires", "Autre"],

  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#C2BDEF", "#BDEAEF", "#EFC2BD"],
      hoverBackgroundColor: ["#C2BDEF", "#BDEAEF", "#EFC2BD"],
    },
  ],
};
var dataGain = {
  datasets: [
    {
      data: [10, 20],
    },
  ],
  backgroundColor: ["#C2BDEF", "#BDEAEF"],
  hoverBackgroundColor: ["#C2BDEF", "#BDEAEF"],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Gain", " "],
};
var data2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      label: "en k€",
      borderColor: "#BDEAEF",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#BDEAEF",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#BDEAEF",
      pointHoverBorderColor: "#BDEAEF",
      pointHoverBorderWidth: 5,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
></link>;

function App() {
  console.log(window.location.pathname); //si on peut voir l'url en haut
  var id =
    window.location.pathname[1] === undefined ? 0 : window.location.pathname[1];
  console.log(id);
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
                    <a style={{ margin: "auto", color: "#333" }}>
                      Entreprise A
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" style={{ marginTop: "40%" }}>
              <div class="col-sm-2">
                <img src={Dash}></img>
              </div>
              <div class="col-sm-10">
                <a style={{ color: "#FDE1DE" }}>Mon DashBoard</a>
              </div>
            </div>
            <div class="row" style={{ marginTop: "10%" }}>
              <div class="col-sm-2">
                <img src={Param}></img>
              </div>
              <div class="col-sm-10">
                <a style={{ color: "#333" }}> Mes Paramètres</a>
              </div>
            </div>
          </header>
        </div>

        <div class="col-sm-10" style={{ fontWeight: "bold" }}>
          <div class="row">
            <div class="col-sm-9">
              <div class="row">
                <div class="App-headerMilieu">
                  <div class="col-sm-1"></div>
                  <div class="col-sm-10">
                    <div class="row" style={{ marginTop: "1em" }}>
                      <titre>Bénéfices</titre>
                    </div>
                    <div class="row">
                      <Line data={data2} type="line" />
                    </div>
                  </div>
                  <div class="col-sm-1"></div>
                </div>
                
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="App-headerMilieu">
                    <div class="row">
                      <div class="col-sm-1"></div>
                      <div class="col-sm-10">
                        <titre>Gains</titre>
                        <div class="row">
                          <Doughnut data={dataGain} options={option} />
                        </div>
                      </div>
                      <div class="col-sm-1"></div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="App-headerMilieu">
                    <div class="row">
                      <div class="col-sm-1"></div>
                      <div class="col-sm-10">
                        <titre>Depense</titre>
                        <div class="row">
                          <Doughnut data={dataDep} options={option} />
                        </div>
                      </div>
                      <div class="col-sm-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="App-headerMilieu">
                  <titre>Commentaires</titre>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="row">
                <div class="App-header">
                  <div class="col-sm-1"></div>
                  <div class="col-sm-10">
                    <titre>Date</titre>
                    <div class="row">
                      <DayPicker />
                    </div>
                  </div>
                  <div class="col-sm-1"></div>
                </div>
              </div>
              <div class="row">
                <div class="App-header">
                  <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-10">
                      <titre>ToDo</titre>
                    </div>
                    <div class="col-sm-1"></div>
                  </div>
                  <div class="row">
                    <Graph />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
