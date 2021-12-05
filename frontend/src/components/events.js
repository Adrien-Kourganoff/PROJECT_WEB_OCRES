import React, { useEffect, useState } from 'react';
import { useTable, useSortBy } from 'react-table'
import "../styles/table.css";
const { default: axios } = require('axios');

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
        <Table className='tableInside' columns={columns} data={dat} />
    );
}

function ClickLink(params){
    return <td contentEditable="false" className="lien" onClick={()=> window.open(params, "_blank")}>Cliquer ici pour acceder</td>;
}

function handleChange(params, dvalue){
  if(params!=dvalue && dvalue!=null)
  console.log(params + " " + dvalue);
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
                          <div contentEditable onClick={(truc) => lol=truc.target.textContent} onBlur={(truc)=> handleChange(truc.target.textContent,lol)}>{cell.render('Cell')} </div>
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