import React from 'react';
import ReactECharts from 'echarts-for-react';
import './GetBarChart.css';

class GetBarChart extends React.Component {
    // simple react component example: rendering foreign data with echarts.js
    // * add a isError boolean or a status_code==200 check

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: {}
        };
    }

    getData() {
      fetch('https://api.worldbank.org/v2/country/fra/indicator/SP.POP.TOTL?DATE=2009:2021&format=json',
      {"method": "GET","headers":{ "accept": "application/json"}})
      .then(response => response.json())
        .then(data => {
        
            this.setState({
              isLoaded: true,
              data: data

               });
        })
    }

    getOption() {
      var options = {baseOption: {}} // set new options like : legend
      this.setState({
        isLoaded: true,
        data: {
              //  Line chart
              options: options,
              xAxis: {
                type: "category",
                data: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]
              },
              yAxis: {
                type: "value",
                min: 64,
                max: 68,
              },
              series: [{ 
                data: [64.71, 65.02, 65.35, 65.66, 66.00, 66.31, 66.55, 66.72, 66.92, 67.11, 67.25, 67.39],
                type: "bar",
                showBackground: false,
                backgroundStyle: {
                  color: 'rgba(255, 255, 255, 0.2)'
                }
              }]
            }
       });

    }

    componentDidMount() {
      this.getOption();
    }


    render() {
      const { isLoaded, data } = this.state;
      console.log("isloaded: " + isLoaded)
      console.log(data)
      if (!isLoaded)
        return (<div className="loading">fetching data ...</div>);

     return (
      <div className="getchart">
        <h3>Population de France depuis 2009</h3>
        <ReactECharts option= { data }/>
      </div>
     );
    }
}

export default GetBarChart ;