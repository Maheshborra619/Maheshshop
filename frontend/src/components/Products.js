import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from "./Rating";
import {Link } from "react-router-dom"


//  //height="205.61px"
const Products = ({product}) => {
    return (
        <Card className="my-3 p-3 rounded">
           <Link to={`/product/${product._id}`} >
             <Card.Img src={product.image}  variant="top" />  
           
           </Link>

           <Card.Body>
           <Link to={`/product/${product._id}`}>
             <Card.Title as="div" style={{color:"black"}}><strong>{product.name}</strong></Card.Title>
           </Link>

           <Card.Text as="div">
               <Rating value={product.rating}  text={`${product.numReviews} reviews`} />
           </Card.Text>

           <Card.Text as="h3">
           <i className="fa fa-inr"></i>{product.price}
           </Card.Text>
           </Card.Body>
        </Card>
    )
}

export default Products
