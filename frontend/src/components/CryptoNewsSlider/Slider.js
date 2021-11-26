import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import  {Card ,Button} from 'react-bootstrap';
import classNames from 'classnames';
//Thank's to https://www.youtube.com/watch?v=og3wCO98HkQ&ab_channel=LearntoCreate

export default function Slider(props) {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
//On prend les 5 premiers articles
/*
props.data.articles.map(article => (
    console.log(article.author)
))
*/
//console.log(props.data);

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
    console.log(elem);

 
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

console.log(articles);


    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <Card  className={classNames("h100",slideIndex === index + 1 ? "slide active-anim" : "slide")} >
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + articles[index].urlToImage} />
                        
                        <Card.Body>
                          
                        <Card.Title className="articleTitle">{articles[index].title}
                        </Card.Title>
                        
                        <div className="desc"> {articles[index].description}
                        </div>
                           {
                           /*<Card.Text>
                             {articles[index].description}
                           </Card.Text>
                           */}  

                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{articles[index].publishedAt}</small>
                        </Card.Footer>  
  
                        <a className="btn button-color" target="_blank" href={articles[index].url} role="button">Voir l'article</a>


                        <div className="d-flex justify-content-center container-dots">
                            {Array.from({length: 5}).map((item, index) => (
                                <div 
                                onClick={() => moveDot(index + 1)}
                                className={slideIndex === index + 1 ? "dot active" : "dot"}
                                ></div>
                            ))}
                        </div>
                        
                     {/* <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                     />*/}  
                        
                    </Card>
                )
            })}
           {/* <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/> */}

          
        </div>
    )
}
