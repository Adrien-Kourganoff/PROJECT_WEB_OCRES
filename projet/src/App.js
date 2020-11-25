import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './Kahina_blanc.jpg';


<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

function App() {
  return (
      <div class="Page">

      <div class="Colonne">
      <img src={img} class="ImageKahina" height="80px" />
      <div class="ligneblanche"> </div>
      <div class="Boutons">
      <a href="#"><button type="button" class="button" >I'Care </button></a>
      </div>
      <a href="#"><button type="button" class="button"> Page Admin</button></a>
      </div>
    </div>
  );
}

export default App;
