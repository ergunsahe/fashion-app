import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import { useContext, useEffect } from "react";
import ProductList from "../pages/ProductList"
import Statistics from "../pages/Statistics"
import Navbar from "../components/Navbar"
import { Provider } from 'react-redux'
import {reducer, initialValue} from '../context';
import {createStore} from 'redux';



function AppRouter() {
    const store = createStore(reducer, initialValue);
    return (
        <Provider store={store}>
        <Router>
            <Navbar/>
            <Switch>
                
                <Route exact path="/productList" component={ProductList} />
                <Route exact path="/statistics" component={Statistics} />
                
            </Switch>
        </Router>
        </Provider>
    )    
}

export default AppRouter;