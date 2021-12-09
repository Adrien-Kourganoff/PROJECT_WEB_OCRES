import EthConverter from '../containers/EthConverter/EthConverter'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  '../GlobalCss/Card.css';
import  '../components/Dashboard/CryptoConverter/CryptoConverter.module.css';

export default {

title: 'UI/EthConverter',
component : EthConverter

}

export const uiEthConverter = () => {

return <div> <EthConverter></EthConverter></div>


}