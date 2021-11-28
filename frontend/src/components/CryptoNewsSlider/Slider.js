import React, {useState,useEffect, useRef} from 'react'
import './Slider.css'
import classNames from 'classnames';

export default function Slider(props) {
    
    const [slideIndex, setSlideIndex] = useState(1);

    const moveDot = index => {
        setSlideIndex(index);
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
    var urlToImage = articles[0].urlToImage;
    var  title = articles[0].title;
    var description = articles[0].description;
    var url = articles[0].url;
    var newDate = articles[0].publishedAt;

function refreshCard(newIndex)
{
    document.getElementById("articleImage").src=articles[newIndex].urlToImage;
    document.getElementById("articleTitle2").innerHTML=articles[newIndex].title;
    document.getElementById("articleDescription").innerHTML=articles[newIndex].description;
    document.getElementById("articleURL").href=articles[newIndex].url;
    document.getElementById("articleDate").innerHTML=articles[newIndex].publishedAt;
}
  

    return (
        <div className="container-slider" >
             <div>
              
                <div className="Card CarDisplay">
                        <div className="imgContainer">
                         <img src={process.env.PUBLIC_URL + urlToImage} id="articleImage" className="img-fluid card-img-top imgStyle" alt="postImg"/>
                         </div>
         <div className="card-body">
            <h4 id="articleTitle2" className="card-title articleTitle font-weight-bold mb-2">{title}</h4>

            <p id="articleDescription" className="card-text desc">{description} </p>
            <div className="row">
                <div className="col text-center">
                <a className="btn button-color" rel="noreferrer" target="_blank" id="articleURL" href={url} role="button">Voir l'article</a>
                </div>
             </div>
         </div>
         <div style={{border : "1px solid #C09A5934"}} className="card-footer d-flex justify-content-between">
            <div>
            <small id="articleDate" className="dateStyle">{newDate}</small>
            </div>
         </div>
         <div className="d-flex justify-content-center container-dots">
   
    {Array.from({length: 5}).map((item, index) => (
        <div 
                onClick={() =>{ 
                moveDot(index + 1);
                refreshCard(index);
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
