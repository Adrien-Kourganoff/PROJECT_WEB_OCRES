import React, { Component } from 'react';
import "./Parameter.css";
import Form from 'react-bootstrap/Form'
import { Button} from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import FormFile from 'react-bootstrap/FormFile'

class parameter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mois: null,
            benef: null,
            gain: null, 
            dep: null,
            pseudo:null,
            commentaire:null,
         }  
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        let benef = this.state.benef;
        if (!Number(benef)) {
          alert("Le benefice doit être un nombre");
        }
      }
    render() { 
        return ( 
            <div className="containerPage2">
                <div className="row">
                    <div className="App-headerMilieu">
                        <div className="row">
                            <div className="col-sm-1"></div>
                                <div className="col-sm-10">
                                    <titre>Mes paramètres</titre>
                                </div>
                            <div className="col-sm-1"></div>
                        </div>
                        
                        <Form onSubmit={this.mySubmitHandler}>
                            
                        <Form.Label>Benefice</Form.Label>
                            <br />
                            <Form.Control as="select" size="lg" value={this.state.mois}>
                                <option value="Janvier">Janvier</option>
                                <option value="Février">Février</option>
                                <option value="Mars">Mars</option>
                                <option value="Avril">Avril</option>
                                <option value="Mai">Mai</option>
                                <option value="Juin">Juin</option>
                                <option value="Juillet">Juillet</option>
                                <option value="Août">Août</option>
                                <option value="Septembre">Septembre</option>
                                <option value="Octobre">Octobre</option>
                                <option value="Novembre">Novembre</option>
                                <option value="Décembre">Décembre</option>
                            </Form.Control>
                            <br />
                            <Form.Control type="text" placeholder="bénéfice" name="benef" size="lg"/>
                            <br />
                            <Form.Label>Ajouter un gain</Form.Label>
                            <br />
                            <Form.Control as="select" size="lg" value={this.state.gain} >
                            <option value="Marchandise">Marchandise</option>
                                <option value="Immobilier">Immobilier</option>
                                <option value="Investissement">Investissement</option>
                                <option value="Autres">Autres</option>
                            </Form.Control>
                            <br />
                            <Form.Control type="text" placeholder="gain" name="gain" size="lg"/>
                            <br />
                            <Form.Label>Ajouter une dépense</Form.Label>
                            <br />
                            <Form.Control as="select" size="lg" value={this.state.dep} >
                                
                                <option value="Salaire">Charges employés</option>
                                <option value="MatierePremiere">Matières Premières</option>
                                <option value="Charges">Charges</option>
                                <option value="Autres">Autres</option>
                            </Form.Control>
                            <br />
                            <Form.Control type="text" placeholder="dépense" name="dep" size="lg"/>
                            <br />
                            
                            <Form.Group >
                            <Form.Label>Nouveau Commentaire</Form.Label>
                            <br/>
                            <Form.Control type="text" placeholder="Pseudo" name="pseudo" />
                            
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Commentaire..." name="commentaire"/>
                            </Form.Group>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            
                        </Form>
                      
                      <br></br>
                    </div>
                  </div>

            </div>
         );
    }
}

export default parameter;