import React, {useState, useEffect} from 'react'
import './Slider.css'
import  {Card ,Button} from 'react-bootstrap';
import classNames from 'classnames';

export default function Slider(props) {
    const moveDot = index => {
        setSlideIndex(index)
    }

    var articles=[];
for (let i = 0; i < 5 ; i++) {
   
    var onearticle = {};
    
    onearticle.urlToImage=props.data.articles[i].urlToImage;
    onearticle.title=props.data.articles[i].title;
    onearticle.description=props.data.articles[i].description;
    onearticle.url=props.data.articles[i].url;

    onearticle.publishedAt=props.data.articles[i].publishedAt;


   var dateStringBefore=props.data.articles[i].publishedAt;
   var elem = dateStringBefore.split('T');

 
    //Date 
    var dateStringUS = elem[0];
        //Date string us en date string fr
        var dateElem=dateStringUS.split('-');
        var dateStringFR =  dateElem[2] +'/'+dateElem[1] +'/'+dateElem[0];
  
   //Heure 
    var hourString = elem[1];
        //Heure string secondes en heure string sans secondes
        var hourElem=hourString.split(':');
        var hourStringWithoutSec =  hourElem[0] +':'+hourElem[1];

//Date string finale
var newDatePublication = dateStringFR + ' à ' +hourStringWithoutSec;

onearticle.publishedAt=newDatePublication;

articles.push(onearticle);
  }

    const [slideIndex, setSlideIndex] = useState(1);
    const [index, setIndex] = useState(0);
    
    const [urlToImage, setUrlToImage] = useState(articles[0].urlToImage);
    const [titre, setTitre] = useState(articles[0].title);
    const [description, setDescription] = useState(articles[0].description);
    const [url, setUrl] = useState(articles[0].url);
    const [dateOld, setDateOld] = useState(articles[0].publishedAt);
 

function refreshCard(newIndex)
{
    document.getElementById("articleImage").src=articles[newIndex].urlToImage;
    document.getElementById("articleTitle2").innerHTML=articles[newIndex].title;
    console.log(articles[newIndex].title);
    document.getElementById("articleDescription").innerHTML=articles[newIndex].description;
    document.getElementById("articleURL").href=articles[newIndex].url;
    document.getElementById("articleDate").innerHTML=articles[newIndex].publishedAt;

    
}


    return (
        <div className="container-slider">
             <div>
                <div className="Card CarDisplay">
                        <div>
            <img src={process.env.PUBLIC_URL + articles[index].urlToImage} id="articleImage" className="card-img-top imgStyle" alt="postImg"/>
         </div>
         <div className="card-body">
            <h4 id="articleTitle2" className="card-title articleTitle font-weight-bold mb-2">{articles[index].title}</h4>

            <p id="articleDescription" className="card-text desc">{articles[index].description} </p>
            <div className="row">
                <div className="col text-center">
                <a className="btn button-color" rel="noreferrer" target="_blank" id="articleURL" href={articles[index].url} role="button">Voir l'article</a>
                </div>
             </div>
         </div>
         <div className="card-footer d-flex justify-content-between">
            <div>
            <small id="articleDate" className="dateStyle">{articles[index].publishedAt}</small>
            </div>
         </div>
         <div className="d-flex justify-content-center container-dots">
   
    {Array.from({length: 5}).map((item, index) => (
        <div 
                onClick={() =>{ 
                    moveDot(index + 1);
                    refreshCard(index);
                    console.log(index + 1);
                }}
                className={classNames(slideIndex === index + 1 ? "dot active" : "dot","dot"+index)}>
         </div>
            ))}
        </div>

      </div>
                  </div>
        </div>
    )
}
