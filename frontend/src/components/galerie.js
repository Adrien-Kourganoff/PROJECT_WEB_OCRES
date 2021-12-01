import React, { useEffect, useState } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineMarkSeries,
  LineSeries,
  MarkSeries,
  VerticalRectSeries,
  Hint,
} from 'react-vis';

const { default: axios } = require('axios');

const ONE_DAY = 86400000;

// A card used to contain all data from api
export default function Graphs(){

    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        await axios.get('http://localhost:9000/albums').then(all => setEvents(all.data));
    }

    useEffect(() => {
        fetchEvents();
        //console.log( {events} );
    }, []);

    var datas = [];
    for (let i = 0; i < events.length; i++) {
        datas.push({x: i, y: events[i].Album.ImageCount});
    }


    /**
     * Same as precedent datas just added the real time to put them in the chart and order them
     * Elements are stored like that 
     * "LastUpdated": "2021-09-24 04:59:39"
     */
    var datasTime = [],ticks = [];
    for (let i = 0; i < events.length; i++) {
        datasTime.push(
            {
                x0: new Date(events[i].Album.LastUpdated).getTime(), 
                x:  new Date(events[i].Album.LastUpdated).getTime() + ONE_DAY, 
                y:  events[i].Album.ImageCount
            }
        );
        ticks.push( (new Date(events[i].Album.LastUpdated).getTime()) );
    }

    return (
        <div className='chart'>
            <XYPlot width={500} height={500} margin={70} >
                <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
                <VerticalGridLines style={{stroke: '#B7E9ED'}} />
                <XAxis
                    title="Numéro de l'évènement"
                    style={{
                        fill: 'var(--text)',
                        line: {stroke: '#ADDDE1'},
                        ticks: {stroke: '#ADDDE1'},
                        text: {stroke: 'none', fontWeight: 600}
                    }}
                />
                <YAxis title="Nombre de photos" style={{fill: 'var(--text)', text: {stroke: 'none', fontWeight: 600}}}/>
                <LineSeries
                    className="first-series"
                    data={datas}
                    stroke='var(--text)'
                    style={{
                        strokeWidth: 2.5,
                        fill: 'none'
                    }}
                />
                <MarkSeries
                    className="second-series"
                    data={datas}
                    stroke='var(--bg-secondary)'
                    color='var(--text)'
                    style={{
                        strokeWidth: 1,
                        fill: 'var(--bg-secondary)'
                    }}
                />
            </XYPlot>
            <div className='list'>
                <List events={events}/>
            </div>
            <div>
                
            </div>
            <XYPlot
                margin={100}
                xType="time"
                width={1000}
                height={600}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis tickValues={ticks} tickFormat={v => {
                    var format;
                    for (let i = 0; i < 3; i++) {
                        format += new Date(v).toString().split(' ')[i] + ' ';
                    }
                    return format
                    } } tickLabelAngle={-45} style={{fill:'var(--text)'}} />
                <YAxis style={{fill:'var(--text)'}}/>
                <VerticalRectSeries data={datasTime} style={{stroke: 'var(--text)', strokeWidth: 1}} />
            </XYPlot>
        </div>
    )
}

function List(props){

    var list = [];

    for (let i = 0; i < props.events.length; i++) {
        list.push({
            "id":i,
            "date": props.events[i].Album.LastUpdated,
            "nom": props.events[i].Album.Title,
            "nb": props.events[i].Album.ImageCount
        });
    }

    return(
        <>
            {list.map(event => (
                <div className='event'>
                    <h3 className='lieu'>N°{event.id}</h3>
                    <h5 className='date'>Date : {event.date}</h5>
                    <h5 className='nom'>Nom : {event.nom}</h5>
                    <h5 className='photo'>Nb photos : {event.nb}</h5>
                </div>
            ))}
        </>
    );
}