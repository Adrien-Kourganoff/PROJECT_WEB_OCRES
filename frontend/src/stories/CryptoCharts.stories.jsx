import Chart from '../containers/EthChart/EthChart'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  '../GlobalCss/Card.css';
import  '../components/Dashboard/CryptoChart/CryptoChart.module.css';


export default {

title: 'UI/Chart',
component : Chart

}

export const UICryptoChart = () => {

return <div> <Chart></Chart> </div>

}