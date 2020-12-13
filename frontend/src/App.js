import React, { Component } from "react";

import Parameter from "./components/Parameter/Parameter.jsx";
import Form from "react-bootstrap/Form";


import Logo1 from "./components/Entreprise/unknown.png";


import "./App.css";
import "react-day-picker/lib/style.css";

import Param from "./photos/paramnoir.png";
import ParamA from "./photos/paramvert.png";
import Dash from "./photos/dashnoir.png";
import DashA from "./photos/dashrose.png";

import Dashboard from "./Dashboard.jsx";
import API from './api';



var id =
  window.location.pathname[1] === undefined ? 0 : window.location.pathname[1];


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

    this.state = { counter: 0, page: 1, buisness: id, entreprise: null, loading: true };

  }
  parameter() {
    this.setState({ page: 2 });
  }

  dashboard() {
    this.setState({ page: 1 });
  }
  handleBuisness(e) {
    window.location.href = "/" + e.target.value;
  }

  async incrementCounter() {
    const { counter } = this.state.counter;
    const response = await API.get(`/entreprises/${id || 1}`);
    this.setState({ entreprise: response.data.entreprise, counter: counter + 1 });

  }
  async componentDidMount() {
    const thisBoundedIncrementer = this.incrementCounter.bind(this);

    const response = await API.get(`/entreprises/${id || 1}`);
    
    this.setState({ entreprise: response.data.entreprise, loading: false });
    setInterval(thisBoundedIncrementer, 1000);


  };


  render() {
    if (this.state.loading) return <p>loading...</p>
    return (
      <div className="container" style={{ maxWidth: "2000px" }}>
        <div className="row">
          <div className="col-sm-2" style={{ fontWeight: "bold" }}>
            <header className="App-header">
              <div className="row">
                <img
                  src={Logo1}
                  style={{ margin: "auto", maxWidth: "75%" }}
                ></img>

              </div>
              <br />
              <br />
              <div className="row">
                <div className="choixEntre">
                  <div className="col-sm-12">
                    <div className="row">

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
                    className="row"
                    onClick={this.dashboard}
                    style={{ marginTop: "40%", cursor: "pointer" }}
                  >
                    <div className="col-sm-2">
                      <img src={DashA}></img>
                    </div>
                    <div className="col-sm-9 visible-lg-* hidden-md hidden-sm hidden-xs">

                      <a style={{ color: "#FDE1DE", fontSize: "125%" }}>
                        Mon DashBoard
                      </a>
                    </div>
                  </div>

                  <div
                    className="row"
                    onClick={this.parameter}
                    style={{ marginTop: "10%", cursor: "pointer" }}
                  >
                    <div className="col-sm-2">
                      <img src={Param}></img>
                    </div>
                    <div className="col-sm-9 visible-lg-* hidden-md hidden-sm hidden-xs">
                      <a style={{ fontSize: "125%" }}> Mes Paramètres</a>
                    </div>
                  </div>
                </div>
              ) : (
                  /*btn page 2 */
                  <div>
                    <div
                      className="row"
                      onClick={this.dashboard}
                      style={{ marginTop: "40%", cursor: "pointer" }}
                    >
                      <div className="col-sm-2 col-xs-2">
                        <img src={Dash}></img>
                      </div>
                      <div className="col-sm-9 visible-lg-* hidden-md hidden-sm hidden-xs">
                        <a style={{ fontSize: "100%" }}>Mon DashBoard</a>
                      </div>
                    </div>
                    <div
                      className="row"
                      onClick={this.parameter}
                      style={{ marginTop: "10%", cursor: "pointer" }}
                    >
                      <div className="col-sm-2">
                        <img src={ParamA}></img>
                      </div>
                      <div className="col-sm-9 visible-lg-* hidden-md hidden-sm hidden-xs">
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
              className="col-sm-10"
              style={{ fontWeight: "bold" }}
            >
              <Dashboard entreprise={this.state.entreprise} />
            </div>
          ) : (
              /* Page 2 */
              <div className="col-sm-10">
                <div className="row">

                  <div className="page2" style={{ width: "100%" }}>

                    <Parameter entreprise={this.state.entreprise} />

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
