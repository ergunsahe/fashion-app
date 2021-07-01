import React, {useState} from 'react'
import { Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import {data} from "../helper/Data"
import { useSelector, useDispatch } from "react-redux"

function AppNavbar() {
    const productList = useSelector(state =>state.productList)
    const dispatch = useDispatch()
    

    const onSorting = (value) =>{    
        dispatch({type:'SET_SORTED_PRICE', payload:{sortedPrice:value}})
        
    }
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
            </Navbar>
           
            
            
        </>

    )
}

export default AppNavbar
