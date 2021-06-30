import React, {useEffect} from "react"
import ProductCard from "../components/ProductCard"
// import {fetchData} from "../helper/FetchData"
import {data} from "../helper/Data"
import { useSelector, useDispatch } from "react-redux"

function App() {
  const productList = useSelector(state =>state.productList)
  const deneme = useSelector(state =>state.deneme)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch({type:'SET_PRODUCT_LIST', payload:{productList:data}})
  },[])

  return (
    <div className="d-flex flex-wrap justify-content-around align-items-center">
      {
        productList.map((item, index) => {
          return (
            <ProductCard key={index} productItem={item}/>
            )
        })
        
      }
      
    </div>
  );
}

export default App;
