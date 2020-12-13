import React, { Component } from "react";
//import { Doughnut } from "react-chartjs-2";

import Parameter from "./components/Parameter/Parameter.jsx";
import Form from "react-bootstrap/Form";
import Button from "./components/Bouton.jsx";


import Logo1 from "./components/Entreprise/unknown.png";


import "./App.css";
import "react-day-picker/lib/style.css";

import Param from "./paramnoir.png";
import ParamA from "./paramvert.png";
import Dash from "./dashnoir.png";
import DashA from "./dashrose.png";

import Dashboard from "./Dashboard.jsx";
import API from './api';


console.log(window.location.pathname); //si on peut voir l'url en haut
var id =
  window.location.pathname[1] === undefined ? 0 : window.location.pathname[1];
console.log("id: ", id);

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
></link>;
class App extends Component {
  constructor(props) {
    super(props);
    this.parameter = this.parameter.bind(this);
    this.dashboard = this.dashboard.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.handleBuisness = this.handleBuisness.bind(this);
    
    this.state = { counter : 0, page: 1, buisness: id, entreprise: null, loading: true};
    
  }
  parameter() {
    this.setState({ page: 2 });
  }

  dashboard() {
    this.setState({ page: 1 });
  }
  handleBuisness(e) {
    window.location.href = "/"+e.target.value;
  }

  incrementCounter() {
    const { counter } = this.state.counter;
    this.setState({ counter: counter + 1 });
  }
  async componentDidMount() {
    const thisBoundedIncrementer = this.incrementCounter.bind(this);
    
    const response = await API.get(`/entreprises/${id || 1}`);
    //console.log(response);
    this.setState({ entreprise: response.data.entreprise, loading: false});
    setInterval(thisBoundedIncrementer, 1000);
  };


  render() {
    if (this.state.loading) return <p>loading...</p>
    return (
      <div class="container" style={{ maxWidth: "2000px" }}>
        <div class="row">
          <div class="col-sm-2" style={{ fontWeight: "bold" }}>
            <header class="App-header">
              <div class="row">
                <img
                  src={Logo1}
                  style={{ margin: "auto", maxWidth: "75%" }}
                ></img>
                
              </div>
              <br />
              <br />
              <div class="row">
                <div class="choixEntre">
                  <div class="col-sm-12">
                    <div class="row">
                    
                      <Form.Control as="select" size="lg" value={this.state.buisness} onChange={this.handleBuisness} >
                        <option value="1">Mathilde</option>
                        <option value="2">Jade</option>
                      </Form.Control>
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
                      <img  src={DashA}></img>
                    </div>
                    <div class="col-sm-9 visible-lg-* hidden-md hidden-sm hidden-xs">
                      
                      <a style={{ color: "#FDE1DE", fontSize: "125%" }}>
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
                      <img  src={Param}></img>
                    </div>
                    <div class="col-sm-9 visible-lg-* hidden-md hidden-sm hidden-xs">
                      <a style={{ fontSize: "125%" }}> Mes Paramètres</a>
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
                      <div class="col-sm-9 visible-lg-* hidden-md hidden-sm hidden-xs">
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
                      <div class="col-sm-9 visible-lg-* hidden-md hidden-sm hidden-xs">
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
              <Dashboard user={this.state.entreprise} />
            </div>
          ) : (
              /* Page 2 */
              <div class="col-sm-10">
                <div class="row">

                    <div className="page2" style={{width:"100%"}}>

                      <Parameter user={this.state.entreprise}/>

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
