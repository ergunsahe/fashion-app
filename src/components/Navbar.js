import React, {useState, useEffect} from 'react'
import { Navbar, Nav, Dropdown, DropdownButton, Form } from 'react-bootstrap';
// import {data} from "../helper/Data"
import { useSelector, useDispatch } from "react-redux"
import "./Navbar.css"

function AppNavbar() {
    // const [sizeList, setSizeList] = useState([])
    const sizeList = ["00", "32","34","36", "38", "40", "42", "44", "46", "48", "50", "XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"]
    const productList = useSelector(state =>state.productList)
    const filterSizes = useSelector(state =>state.filterSizes)
    const dispatch = useDispatch()
    console.log("🚀 ~ file: Navbar.js ~ line 9 ~ AppNavbar ~ sizeList", sizeList)

    
    
    

    const onSorting = (value) =>{    
        dispatch({type:'SET_SORTED_PRICE', payload:{sortedPrice:value}})
        
    }
    const onChecked = (e, value) =>{   
        if (e.target.checked){
            
            dispatch({type:'SET_FILTER_LIST', payload:{filterSizes:value}})
        }
        else{
            let newFilterList = filterSizes.filter((item) =>{
              
                return value !== item
            })
            dispatch({type:'SET_FILTER_CLEAR', payload:{filterSizes:newFilterList}})
        }
            
    }

    // const createSizeList = () =>{
    //     productList?.forEach((obj) => {
    //         for (let key in obj.sizes) {
    //           if ( sizeList.indexOf(obj.sizes[key]) < 0) {
    //           console.log("🚀 ~ file: Navbar.js ~ line 41 ~ productList?.map ~ sizeList.indexOf(obj.sizes[key])", sizeList.indexOf(obj.sizes[key]))
              
    //           sizeList.push(obj.sizes[key])
                
                
    //           };
    //         };
    //       })
    // }

    // useEffect(() => {
    //     createSizeList()
    // }, [])

    return (

        <>
            <Navbar bg="dark" variant="dark">
                
                <Nav className="mr-auto">
                    <Nav.Link href="/productList">Home</Nav.Link>
                    <Nav.Link href="/statistics">Statistics</Nav.Link>
                    
                </Nav>
                <DropdownButton id="dropdown-basic-button" title="Sort By Price">
                    <Dropdown.Item  onSelect={() =>onSorting("all")}>All</Dropdown.Item >
                    <Dropdown.Item  onSelect={() =>onSorting("dec")}>Decrement</Dropdown.Item>
                    <Dropdown.Item onSelect={() =>onSorting("inc")}>Increment</Dropdown.Item>
                </DropdownButton>



                <DropdownButton role="menuitemcheckbox" title="Filter By Sizes" className="filterContainer">
                
                
                <Form >
                    {
                        sizeList?.map((item, index) => {
                            return(
                                <Form.Check 
                                    type={'checkbox'}
                                    id={item}
                                    label={item}
                                    onChange={(e) =>onChecked(e,item)}
                                />

                            )
                        })
                    }
                    
                    
                </Form>
                
                
                </DropdownButton>
            </Navbar>
           
            
            
        </>

    )
}

export default AppNavbar
