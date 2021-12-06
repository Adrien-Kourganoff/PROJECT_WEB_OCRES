import React from 'react';
import ReactECharts from 'echarts-for-react';
import './Getchart.css';

class Getchart extends React.Component {
    // simple react component example: rendering foreign data with echarts.js
    // * add a isError boolean or a status_code==200 check

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: {}
        };
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
                data: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"]
              },
              yAxis: {
                type: "value"
              },
              series: [{ 
                data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
                type: "line"
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
        <h3>Line Chart component with echarts.js</h3>
        <ReactECharts option= { data }/>
      </div>
     );
    }
}

export default Getchart ;