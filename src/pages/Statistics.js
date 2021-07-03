import React, { useState, useEffect } from 'react'
import { data } from "../helper/Data"
import { onLargestSelectionSizes, onMostProducts, onLowestAverage } from "../helper/StaticsFuntions"
import { Container, Row, Col } from "react-bootstrap"

function Statistics() {
    const [largestSizeSelection, setLargestSizeSelection] = useState([])
    const [mostProducts, setMostProducts] = useState()
    const [lowestAverage, setLowestAverage] = useState([])


    useEffect(() => {
        setLargestSizeSelection(onLargestSelectionSizes(data))
        setMostProducts(onMostProducts(data))
        setLowestAverage(onLowestAverage(data))
    }, [])
    return (
        <Container>
            <Row>Statistics</Row>
            <Row>
                <Col>1-)The brand has the most products that cost less than 40 EUR</Col>
            </Row>
            <Row>
                <Col>- {mostProducts}</Col>

            </Row>
            <Row>
                <Col>2-) The Brand(s) offers the largest selection of sizes to the customer</Col>

            </Row>

            {
                largestSizeSelection.map((item, index) => {
                    return (
                        <Row key={index}>
                            <Col>- {item.brand}</Col>
                            <Col>The length of selection of sizes : {item.sizes.length}</Col>
                        </Row>

                    )
                })
            }

            <Row>2-) The brand offers the lowest average price for customers wearing size “32”</Row>
            <Row >
                <Col>- {lowestAverage[0]}</Col>
                <Col>{lowestAverage[1]}</Col>

            </Row>

        </Container>
    )
}

export default Statistics
