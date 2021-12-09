import Metamask from '../containers/Metamask/Metamask'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  '../GlobalCss/Card.css';
import  '../components/Dashboard/MetamDatas/MetamDatasStyle.css';

export default {

title: 'UI/Metamask',
component : Metamask

}

export const uiMetamask = () => {

return <div> <Metamask></Metamask></div>


}