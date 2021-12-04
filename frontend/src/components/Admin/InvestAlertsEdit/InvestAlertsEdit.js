import React, {useState,useEffect} from 'react';
import  {Card ,ListGroup,Table,Button,Row,Col,Form} from 'react-bootstrap';
import InvestAlertsEditStyle from './InvestAlertsEdit.module.css';
import classNames from 'classnames';
import moment from 'moment';
  
export default function InvestAlertsEdit(props) {

    var data=props.data;

    const [inputTitle, setInputTitle] = useState([]);
    const [inputMessage, setInputMessage] = useState([]);
    const [inputDate, setInputDate] = useState([]);



   

    function onChangeHandler(event) 
    {
        setInputTitle({[event.target.name]: event.target.value});
        setInputMessage({[event.target.name]: event.target.value});
        setInputDate({[event.target.name]: event.target.value});

      };

      function defDate(dateString)
      {
           var dateSTR= moment(new Date(dateString)).toISOString();
           var NVdate= dateSTR.substring(0, 10);
   
       return NVdate;
   
      }

      useEffect(() => {
    
        var titles=[];
        var messages=[];
        var dates=[];

        for (var i=0; i<props.data.data.length; i++ )
        {
    
            titles.push(props.data.data[i].title);    
            messages.push(props.data.data[i].message);   
            dates.push(defDate(props.data.data[i].alertDate));    

        }
        setInputTitle(titles);
        setInputMessage(messages);
        setInputDate(dates);

      },[]);



   function updateA(id)
   {
       var titre = document.getElementsByClassName("title"+id)[0].value;
       var message = document.getElementsByClassName("message"+id)[0].value;
       var date = document.getElementsByClassName("date"+id)[0].value;
        var newDate= new Date (date);
    
       props.updateAlert(id,titre,message,newDate);
       alert("Alerte mise à jour")
   }

   function deleteA(id)
   {



   }
//                            <DatePicker className={"date"+alert._id} locale="fr" defaultDate={defDate(alert.alertDate) } />

   return( 

            <Card >
                  <Card.Header style={{textAlign:"center"}}>Gestion des alertes</Card.Header>
                  <ListGroup.Item style={{padding: "0px"}}>

                 <Table table-active striped bordered hover responsive>
                    <thead className={classNames(InvestAlertsEditStyle.theadStyle)}>
                        <tr>
                        <th>#</th>
                        <th>Titre</th>
                        <th>Message</th>
                        <th>Date</th>
                        <th>Actions</th>


                        </tr>
                    </thead>
                    <tbody className={classNames(InvestAlertsEditStyle.whiteColor)}>
                    {
                        data.data.map((alert, index) => (

                            <tr className={classNames(InvestAlertsEditStyle.whiteColor)}>
                            <td className={classNames(InvestAlertsEditStyle.whiteColor)}>{index}</td>

                            <td className={classNames(InvestAlertsEditStyle.whiteColor)}><Form.Control onChange={onChangeHandler} value={inputTitle[index]} name={"title"+alert._id} type="text" className={"title"+alert._id}/></td>

                            <td className={classNames(InvestAlertsEditStyle.whiteColor)}> <Form.Control  onChange={onChangeHandler} value={inputMessage[index]} name={"message"+alert._id} className={"message"+alert._id} as="textarea" /></td>  

                            <td> 
                                <input type="date"  onChange={onChangeHandler} value={inputDate[index]} name={"date"+alert._id} className={"date"+alert._id}/>
                            </td>

                            <td  className={classNames(InvestAlertsEditStyle.tdStyle,InvestAlertsEditStyle.whiteColor)}>                                   
                                <Row>
                                    <Col><Button onClick={() => updateA(alert._id)} variant="primary">U</Button></Col>
                                    <Col><Button onClick={() => updateA(alert._id)} variant="Danger">D</Button></Col>
                                </Row>
                            </td>
                        </tr>        
                ))

                    }
                        
                       
                    </tbody>
                </Table>  
                </ListGroup.Item>

            </Card>
        )

        
}
