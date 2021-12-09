import EthNews from '../containers/EthNews/EthNews'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  '../GlobalCss/Card.css';
import  '../components/Dashboard/CryptoNewsSlider/Slider.css';

export default {

title: 'UI/EthNews',
component : EthNews

}

export const uiEthConverter = () => {

return <div> <EthNews></EthNews></div>


}