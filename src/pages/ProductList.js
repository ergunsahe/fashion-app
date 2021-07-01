import React, {useEffect, useState} from "react"
import ProductCard from "../components/ProductCard"
// import {fetchData} from "../helper/FetchData"
import {data} from "../helper/Data"
import { useSelector, useDispatch } from "react-redux"

function App() {
  const [list, setList] = useState([])
  const productList = useSelector(state =>state.productList)
  const filterSizes = useSelector(state =>state.filterSizes)
  const sortedPrice = useSelector(state =>state.sortedPrice)
  const dispatch = useDispatch()

  
  

  const filterObjsInArr = () => {
    const originalList =[...productList]
    let filteredArray = [];
    originalList.map((obj) => {
      for (let key in obj.sizes) {
        if (filterSizes.includes(obj.sizes[key]) && filteredArray.indexOf(obj) < 0) {
          
          filteredArray.push(obj);
        };
      };
    })
    setList(filteredArray)
  }

  useEffect(() =>{
    filterObjsInArr()
  
  
  }, [filterSizes])
 
  useEffect(() =>{
    let originalData = [...data]
    let sortedList;
    if (sortedPrice==="inc"){
      sortedList = originalData.sort(function(a, b){return parseInt(b.priceO)- parseInt(a.priceO)})
      dispatch({type:'SET_PRODUCT_LIST', payload:{productList:sortedList}})
      setList(sortedList)
      
  }else if(sortedPrice==="dec"){
      sortedList = originalData.sort(function(a, b){return parseInt(a.priceO)- parseInt(b.priceO)})
      dispatch({type:'SET_PRODUCT_LIST', payload:{productList:sortedList}})
      setList(sortedList)
      
  }else if(sortedPrice==="all" || sortedPrice===""){
      dispatch({type:"SET_PRODUCT_LIST", payload:{productList:data}})
      setList(data)
      
  }
  
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
