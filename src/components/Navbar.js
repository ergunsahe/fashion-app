import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Dropdown, Form, NavDropdown } from 'react-bootstrap';
import { data } from "../helper/Data"
import { useSelector, useDispatch } from "react-redux"
import "./Navbar.css"

function AppNavbar() {
    const [sizeList, setSizeList] = useState([])
    const [windowWidth, setWindowView] = useState(750)
    const filterSizes = useSelector(state => state.filterSizes)
    const dispatch = useDispatch()


    const onSorting = (value) => {
        dispatch({ type: 'SET_SORTED_PRICE', payload: { sortedPrice: value } })

    }
    
    const onChecked = (e, value) => {
        if (e.target.checked) {

            dispatch({ type: 'SET_FILTER_LIST', payload: { filterSizes: value } })
        } else {
            let newFilterList = filterSizes.filter((item) => {

                return value !== item
            })
            dispatch({ type: 'SET_FILTER_CLEAR', payload: { filterSizes: newFilterList } })
        }

    }

    const createSizeList = () => {
        const filteredSizeList = [...sizeList]
        data?.forEach((obj) => {
            for (let key in obj.sizes) {
                if (filteredSizeList.indexOf(obj.sizes[key]) < 0) {

                    filteredSizeList.push(obj.sizes[key])


                };
            };
        })
        setSizeList(filteredSizeList)
    }

    useEffect(() => {
        createSizeList()
        setWindowView(window.innerWidth)

    }, [])

    return (

        <>
            <Navbar bg="dark" variant="dark" className="justify-content-end" >

                <Nav className="mr-auto">

                    <Nav.Link href="/productList">Home</Nav.Link>
                    <Nav.Link href="/statistics">Statistics</Nav.Link>

                    <NavDropdown className="mr-auto" drop={windowWidth < 750 ? "left" : "down"} id="dropdown-basic-button" title="Sort Price">
                        <Dropdown.Item onSelect={() => onSorting("all")}>All</Dropdown.Item >
                        <Dropdown.Item onSelect={() => onSorting("dec")}>Decrement</Dropdown.Item>
                        <Dropdown.Item onSelect={() => onSorting("inc")}>Increment</Dropdown.Item>
                    </NavDropdown>

                    <NavDropdown role="menuitemcheckbox" title="Sizes" drop={windowWidth < 750 ? "left" : "down"} className="mr-auto filterContainer">
                        <Form className="d-flex flex-wrap justify-content-around align-items-center ">
                            {
                                sizeList?.map((item, index) => {
                                    return (
                                        <Form.Check
                                            key={index}
                                            type={'checkbox'}
                                            id={item}
                                            label={item}
                                            onChange={(e) => onChecked(e, item)}
                                            className="checkboxItem"
                                        />

                                    )
                                })
                            }
                        </Form>
                    </NavDropdown>
                    
                </Nav>

            </Navbar>
        </>

    )
}

export default AppNavbar
