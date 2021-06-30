import React from 'react'
import { Button, Card, Carousel, Link } from 'react-bootstrap';

function ProductCard({ productItem }) {
    return (
        <div style={{ backgroundColor: "blue" }}>
            <Card style={{ width: '18rem' }}>
                <Carousel >
                    {
                        productItem.images.map((item, idex) => {
                            return (
                                <Carousel.Item >

                                    <img
                                        className="d-block w-100 "
                                        src={item}
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                            )
                        })
                    }



                </Carousel>
                <Card.Body>
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
                    <Card.Text>
                        {productItem.sizes}
                    </Card.Text>
                    <Button className="align-self-center" variant="info"><a href={productItem.url}>Go Details</a></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard
