import React from 'react'
import { Button, Card, Carousel } from 'react-bootstrap';
import "./ProductCard.css"

function ProductCard({ productItem }) {
    return (
        
            <Card className="cardContainer" style={{ width: '18rem' }}>
                <Carousel >
                    {
                        productItem.images.map((item, idex) => {
                            return (
                                <Carousel.Item >

                                    <img
                                        className="d-block w-100 h-100"
                                        src={item}
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                            )
                        })
                    }



                </Carousel>
                <Card.Body className="cardBody">
                    <Card.Title>{productItem.brand}</Card.Title>
                    <Card.Text>
                        {productItem.description}
                    </Card.Text>
                    <Card.Text>
                        {productItem.priceO}
                    </Card.Text>
                    {productItem.priceR ?
                        <Card.Text>
                            {productItem.priceR}
                        </Card.Text>
                        :
                        null
                    }
                    
                    <div className="sizesContainer" >
                    {productItem.sizes ?
                        productItem.sizes.map((item, index) =>{
                            return(
                               
                                    <Card.Text>{item}</Card.Text>
                                
                            )
                        })

                        :
                        <Card.Text></Card.Text>
                    }
                    </div>
                    
                    <Button className="align-self-center linkContainer" variant="secondary"><Card.Link className="linkText" href={productItem.url} >Go Details</Card.Link></Button>
                </Card.Body>
            </Card>
        
    )
}

export default ProductCard
