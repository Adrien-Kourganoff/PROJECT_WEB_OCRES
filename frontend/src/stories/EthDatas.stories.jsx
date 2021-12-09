import EthDatas from '../containers/EthDatas/EthDatas'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  '../GlobalCss/Card.css';
import  '../components/Dashboard/CryptoDatas/CryptoDatas.module.css';

export default {

title: 'UI/EthDatas',
component : EthDatas

}

export const uiEthConverter = () => {
return <div> <EthDatas></EthDatas></div>
}