import React from "react";
import {  Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardList = ({ user }) => {
    return (
        <Card className="card" style={{   width: "18rem",height:'auto',margin:"auto", background:"#222" }}>
        
        <Card.Body style={{color:'white'}}>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
            <Link as={Link} to ={`/details/${user.id}`} >
            Details
            </Link>
            </Card.Text>
        </Card.Body>
    </Card>
    
    );
};

export default CardList;