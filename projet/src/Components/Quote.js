import React, { useState,useEffect,Component } from 'react';
import {Card,Button} from 'react-bootstrap';
import './Quote.css'


function Quote(){
    
    const citations = [

{
id :0
,quote : 'You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.' 
,author : 'William W. Purkey'
},


{
id :1
,quote : 'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.'
,author :'Neil Gaiman'},

{
    id :2
    ,quote :'Everything you can imagine is real.'
    ,author :'Pablo Picasso'},

{
    id :3
    ,quote :'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.' 
    ,author :'Helen Keller'},

{
    id :4
    ,quote :'Do one thing every day that scares you.'
    ,author :'Eleanor Roosevelt'},

{
    id :5
    ,quote :'It’s no use going back to yesterday, because I was a different person then.'
    ,author :'Lewis Carroll'},

{
    id :6
    ,quote :'Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.' 
    ,author :'Socrates'},

{
    id : 7
    ,quote :'Do what you feel in your heart to be right – for you’ll be criticized anyway.'
    ,author :'Eleanor Roosevelt'},

{
    id :8
    ,quote :'Happiness is not something ready made. It comes from your own actions.'
    ,author :'Dalai Lama XIV'},

{
    id :9
    ,quote :'Whatever you are, be a good one.'
    ,author :'Abraham Lincoln'},  
    
];


//UTILISATION DES HOOKS

const [quoteD, getQuoteD] = useState(citations);
const [current, setCurrent] = useState(0); 
const [quote, getQuote] = useState(quoteD[current])


useEffect(
    () => getQuote(quoteD[current]), 
    [current, quote]
)
    const nextQuote = () => {
        current === quoteD.length-1 ?
          setCurrent(0)
        :
          setCurrent(current + 1)
      }
      
      const prevQuote = () => {
        current === 0 ?
          setCurrent(quoteD.length-1)
        :
          setCurrent(current - 1)
      }
      
      const dotPicksQuote = (e) => setCurrent(Number(e.target.id))
      
      console.log(current)
      return (
        <section>
          <div className="slideshow-container">
            <Slide quote={quote} />
            <Arrows nextQuote={nextQuote}
                    prevQuote={prevQuote} />
          </div>
          <Dots dotQty={quoteD} 
                current={current}
                dotPicksQuote={dotPicksQuote} />
        </section>  
      )
    }
    
    function Slide({quote}) {
      return (
        <div className="mySlides">
          <q>{quote.quote}</q>
          <p className="author">  <br /> &mdash;{quote.author}</p>
        </div>
      )
    }
    
    function Arrows({nextQuote, prevQuote}) {
      return (
        <>    
          <a onClick={prevQuote} className="prev" id="prev">&#10094;</a>
          <a onClick={nextQuote} className="next" id="next">&#10095;</a>
        </>
      )
    }
    
    function Dots({dotQty, current, dotPicksQuote}) {
      return (
        <div className="dot-container">
          {
            dotQty.map((dot, i) => {
              return <span id={i} className={current === i ? "dot active" : "dot"}
                            onClick={dotPicksQuote}></span>
            })
          }
        </div>
      )
    }
    
export default Quote;