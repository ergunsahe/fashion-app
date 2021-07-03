import React from 'react'
import { Button, Card, Carousel } from 'react-bootstrap';
import "./ProductCard.css"

function ProductCard({ productItem }) {
    

    return (

        <Card className="cardContainer">

            <Carousel className="imageContainer"  prevIcon={false} nextIcon={false}>
                {
                    productItem.images.map((item, index) => {
                        return (
                            <Carousel.Item key={index}>

                                <img
                                    className="image"
                                    src={item}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>

            <Card.Body className="cardBody">

                <Card.Title className="cardTitle">{productItem.brand}</Card.Title>
                <div className="cardDescContainer" >
                    <Card.Text className="cardText">
                        {productItem.description}
                    </Card.Text>

                </div>

                <Card.Text className="cardPrice">
                    Price: {productItem.priceO}€
                </Card.Text>

                <Card.Text className="cardSizes">Sizes:</Card.Text>
                <div className="sizesContainer"  >
                    {productItem.sizes ?
                        productItem.sizes.map((item, index) => {
                            return (

                                <Card.Text className="cardSizes">{item}</Card.Text>

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
