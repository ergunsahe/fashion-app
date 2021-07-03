import React, {useState, useEffect} from 'react'
import {data }from "../helper/Data"
import {onLargestSelectionSizes, onMostProducts, onLowestAverage} from "../helper/StaticsFuntions"

function Statistics() {
    const [largestSizeSelection, setLargestSizeSelection] = useState([])
    const [mostProducts, setMostProducts] = useState()
    const [lowestAverage, setLowestAverage] = useState([])

    
    useEffect(()=>{
        setLargestSizeSelection(onLargestSelectionSizes(data))
        setMostProducts(onMostProducts(data))
        setLowestAverage(onLowestAverage(data))
    }, [])
    return (
        <div>
           <p>Statistics</p> 
           <div >

                <div>
                    <p>1-)The brand has the most products that cost less than 40 EUR</p>
                    <div>
                        <p>{mostProducts}</p>
                        
                    </div>
                </div>
                <p>2-) The Brand(s) offers the largest selection of sizes to the customer</p> 
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    {
                        largestSizeSelection.map((item, index) =>{
                            return(
                                <div key={index}>
                                    <p>{item.brand}</p>
                                    <p>The length of selection of sizes : {item.sizes.length}</p>
                                </div>

                            )
                        })
                    }
                </div>
                <p>2-) brand offers the lowest average price for customers wearing size “32”</p> 
                <div style={{display:"flex", justifyContent:"space-around"}}>
                   
                    {
                        lowestAverage.map((item, index) =>{
                            return  <p key={index}>{item}</p>
                                })
                            }
                
                </div>

               

           </div>
        </div>
    )
}

export default Statistics
