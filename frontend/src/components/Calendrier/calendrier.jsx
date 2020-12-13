
import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import "./calendrier.css";


class Calend extends Component {
    constructor(props) {
        super(props);
        this.state = { benef : this.props.entreprise.event };
        //this.state = { null:null }
    }
    
    renderDay = (day) => {
      const event=this.state.benef;
        const date = day.getDate();
        const dateStyle = {
          position: 'absolute',
          color: 'black',
          bottom: 0,
          right: 0,
          fontSize: 10,
        };
        const eventStyle = { fontSize: '0.8em', textAlign: 'left' };
        const cellStyle = {
          height: 10,
          width: 0,
          position: 'relative',
        };
        return (
            <div style={cellStyle}>
           {/* <div className="cellStyle">  */}
            <div style={dateStyle}>{date}</div>
            {event[date] &&
              event[date].map((name, i) => (
                <div key={i} style={eventStyle}>
                  {name}
                </div>
              ))}
          </div>
        );
      }

    render() { 
        return ( <div>
            <DayPicker
                canChangeMonth={true}
                className="Evenement"
                renderDay={this.renderDay}
            />
        </div> );
    }
}
 
export default Calend;


// function renderDay(day) {
//     const date = day.getDate();
//     const dateStyle = {
//       position: 'absolute',
//       color: 'lightgray',
//       bottom: 0,
//       right: 0,
//       fontSize: 20,
//     };
//     const birthdayStyle = { fontSize: '0.8em', textAlign: 'left' };
//     const cellStyle = {
//       height: 50,
//       width: 60,
//       position: 'relative',
//     };
//     return (
//       <div style={cellStyle}>
//         <div style={dateStyle}>{date}</div>
//         {birthdays[date] &&
//           birthdays[date].map((name, i) => (
//             <div key={i} style={birthdayStyle}>
//               🎁 {name}
//             </div>
//           ))}
//       </div>
//     );
//   }

// export default function Example() {
//   return (
//     <DayPicker
//       canChangeMonth={false}
//       className="Birthdays"
//       renderDay={renderDay}
//     />
//   );
// }