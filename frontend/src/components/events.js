import React, { useEffect, useState } from 'react';
import { useTable, useSortBy } from 'react-table'
import "../styles/table.css";
const { default: axios } = require('axios');
let value=null;
let oldValue=null;
var yes=false;
var password=false;
let component=null;


// A card used to contain all data from api
export default function EventListTable(){

    const [dat, setDat] = useState([]);

    

    const fetchDat = async () => {
        //console.log("coucou2")
        await axios.get('http://localhost:9000/albums').then(all => 
                {
                    //console.log("coucou4")
                    //console.log(all.data[0])
                    const tab = []
                    for (let i = 0; i < all.data.length; i++) {
                        const actual = 
                        {
                            Title: all.data[i].Album.Title,
                            ImageCount: all.data[i].Album.ImageCount,
                            LastUpdated: all.data[i].Album.LastUpdated,
                            Public: JSON.stringify(all.data[i].Album.Public),
                            URL: ClickLink(all.data[i].Album.URL)
                        };
                        tab.push(actual)
                        //console.log(actual)
                    }
                    setDat(tab);
                }
            );
            //console.log("coucou3")
    }

    useEffect(() => {
        //console.log("coucou")
        fetchDat();
        
        //console.log( {dat} );
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Titre',
                accessor: 'Title'
            },
            {
                Header: 'Nombre Images',
                accessor: 'ImageCount'
            },
            {
                Header: 'Dernière modification',
                accessor: 'LastUpdated'
            },
            {
                Header: 'Accessible',
                accessor: 'Public'
            },
            {
                Header: 'Lien',
                accessor: 'URL'
            },
        ]
    );


    return (
      <>
        <PopUp />
        <Table className='tableInside' columns={columns} data={dat} />
      </>
    );
}

function ClickLink(params){
    return <td contentEditable="false" className="lien" onClick={()=> window.open(params, "_blank")}>Cliquer ici pour acceder</td>;
}

function PopUp(params, dvalue){
  return(
    <div id="pop-up"> 
      <div id="content"> Do you really want to change 1 by 2 ? </div>
      <div className="buttons">
        <button id="yes" onClick={() => sendData()}> Yes </button>
        <button id="no" onClick={() => handleChange(-1,-1)}> No </button>
      </div>
    </div>
  );
}

function sendData(){
  if(password==false){
    console.log("database: " + oldValue + " nouvelle: " + value);
    //on se connecte à la db
    //on trouve lelement qui correspond à oldValue,
    //Si on trouve on demande un mot de passe => on modifie la valeur dans la db
    var data="Enter Password:<br></br><input id='password' type='password' placeholder='Password'>";
    document.getElementById("content").innerHTML = data;
    document.getElementById("yes").innerHTML = "Send";
    document.getElementById("no").innerHTML = "Cancel";
    password=true;
  }
  else{
    console.log(document.getElementById("password").value);
    password=false;
    let popUp = document.getElementById("pop-up");
    popUp.style.display = "none";
    yes=false;

    //We set back the buttons setup
    document.getElementById("yes").innerHTML = "Yes";
    document.getElementById("no").innerHTML = "No";
  }
  
}

function handleChange(params, dvalue){
  if(params!=dvalue && dvalue!=null && yes==false && params!='' && dvalue!=''){
    console.log("on rentre dans la boucle " + params + " " + dvalue);
    //return <div className="pop-up">Do you Really want to change ${dvalue} by ${params} ? </div>
    let popUp = document.getElementById("pop-up");
    if(popUp.style.display!="flex"){
      popUp.style.display = "flex";
      console.log("on affiche");
    }
      
      document.getElementById("content").innerHTML = "Do you Really want to change " + dvalue + " by " + params + " ?";
      oldValue=dvalue;
      value=params;
      yes=true;
      console.log("dans la fonction old: " + oldValue + " / nouv: " + value );
      // PROBLEME SI ON MODIFIE UNE DATE
  }
  else if(params==-1){
    console.log("on ferme");
    let popUp = document.getElementById("pop-up");
    popUp.style.display = "none";
    yes=false;
    console.log("component: " + component.textContent);
    component.innerHTML=oldValue;
    console.log("component: " + component.textContent);
    
    if(password==true){
      //We set back the buttons setup
      document.getElementById("yes").innerHTML = "Yes";
      document.getElementById("no").innerHTML = "No";
      password=false;
    }
    
  }
  else if(params==''){
    component.innerHTML=dvalue;
  }
  else if(dvalue==''){
    component.innerHTML=params;
  }
  
}

//Code taken from the exemple presentation for react-table
function Table({ columns, data }) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable(
      {
        columns,
        data,
      },
      useSortBy
    )

    let lol=null;
  
    return (
      <>
        <table  {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  // Add the sorting props to control sorting. For this example
                  // we can add them into the header props
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    {/* Add a sort direction indicator */}
                    <span >
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(
              (row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        //<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        <td {...cell.getCellProps()}>
                          <div contentEditable onClick={(truc) => {lol=truc.target.textContent; component=truc.currentTarget; console.log("on a " + component.textContent)}} onBlur={(truc)=> handleChange(truc.target.textContent,lol)}>{cell.render('Cell')} </div>
                        </td>
                        //<input type="text" className="edit" defaultValue={cell.value} onBlur={(truc)=> console.log(truc.target.value)} />
                      )
                    })}
                  </tr>
                )}
            )}
          </tbody>
        </table>
        <br />
      </>
    )
  }