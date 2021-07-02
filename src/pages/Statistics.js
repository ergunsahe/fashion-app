import React, {useState, useEffect} from 'react'
import {data }from "../helper/Data"
import {onLargestSelectionSizes, onMostProducts, onLowestAverage} from "../helper/StaticsFuntions"

function Statistics() {
    const [largestSizeSelection, setLargestSizeSelection] = useState([])
    const [mostProducts, setMostProducts] = useState()

    
    useEffect(()=>{
        setLargestSizeSelection(onLargestSelectionSizes(data))
        setMostProducts(onMostProducts(data))
        onLowestAverage(data)
    }, [])
    return (
        <div>
           <p>Statistics</p> 
           <div >

                <div>
                    <p>1-)The brand has the most products that cost less than 40 EUR</p>
                    <div>
                        <p>{mostProducts}</p>
                        {/* <p>The length of selection of sizes : {item.sizes.length}</p> */}
                    </div>
                </div>
                <p>2-) offers the largest selection of sizes to the customer</p> 
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    {
                        largestSizeSelection.map((item, index) =>{
                            return(
                                <div>
                                    <p>{item.brand}</p>
                                    <p>The length of selection of sizes : {item.sizes.length}</p>
                                </div>

                            )
                        })
                    }
                </div>

               

           </div>
        </div>
    )
}

export default Statistics
