import React, {useEffect, useState} from "react"
import ProductCard from "../components/ProductCard"
// import {fetchData} from "../helper/FetchData"
import {data} from "../helper/Data"
import { useSelector, useDispatch } from "react-redux"

function App() {
  const [list, setList] = useState([])
  const productList = useSelector(state =>state.productList)
  const sortedPrice = useSelector(state =>state.sortedPrice)
  const dispatch = useDispatch()
  // console.log("productList", productList)
  // console.log("list", list)

  
 
  useEffect(() =>{
    let originalData = [...data]
    let sortedList;
    if (sortedPrice=="inc"){
      sortedList = originalData.sort(function(a, b){return parseInt(b.priceO)- parseInt(a.priceO)})
      // dispatch({type:'SET_PRODUCT_LIST', payload:{productList:sortedList}})
      setList(sortedList)
      console.log("increment",sortedList)
  }else if(sortedPrice=="dec"){
      sortedList = originalData.sort(function(a, b){return parseInt(a.priceO)- parseInt(b.priceO)})
      // dispatch({type:'SET_PRODUCT_LIST', payload:{productList:sortedList}})
      setList(sortedList)
      console.log("decrement",sortedList)
  }else if(sortedPrice=="all" || sortedPrice==""){
      // dispatch({type:"SET_PRODUCT_LIST", payload:{productList:data}})
      setList(data)
  }
  console.log(sortedPrice)
  console.log(list)
  },[sortedPrice])

  return (
    <div className="d-flex flex-wrap justify-content-around align-items-center">
      {
        list?.map((item, index) => {
          return (
            <ProductCard key={index} productItem={item}/>
            )
        })
        
      }
      
    </div>
  );
}

export default App;
