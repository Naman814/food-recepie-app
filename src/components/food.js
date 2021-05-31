import React from 'react'
import {Card,ListGroupItem,ListGroup} from 'react-bootstrap'

const Food=(props)=>{
    return (
    
        <Card style={{ width: '16rem' ,textAlign:'center', borderBottom:'solid', marginBottom:'1rem', backgroundColor:'#faf1e6' }}>
  <Card.Img variant="top" src={props.src} style={{border:'solid'}} />
  <Card.Body>
     <Card.Title style={{textOverflow:'ellipses' ,  whiteSpace:'nowrap', overflow: 'hidden'}}>{props.title}</Card.Title> 

  </Card.Body>
  <ListGroup className="list-group-flush">
    <a href={props.method}><ListGroupItem style={{backgroundColor:'#fff5ab'}}>Check Recepie</ListGroupItem> </a>
    <ListGroupItem style={{backgroundColor:'#fff5ab'}}>Calories : {props.calorie}</ListGroupItem>
  
  </ListGroup>
</Card>

    );
}


export default Food;