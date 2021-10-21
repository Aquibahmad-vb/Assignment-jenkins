import './Header.css'
import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'


const Header = () => {
    const noOfItem=useSelector(state=>state.noOfItem);
    const dispatch=useDispatch();
    const clearCartHandler=()=>{
        dispatch({
            type:"clearCartValue"
        })
    }
    // console.log(noOfItem);
    return (
        <div className="Header">
            <h1 className="heading">Trading bots</h1>
            <div className="navBar">
                <button className="links"><Link to="/bots" className="dashboard">DashBoard</Link></button>
                <hr/>
                <button className="links cart">Cart-{noOfItem}</button>
                <hr/>
                <button className="links cart" onClick={clearCartHandler}>clear cart</button>
            </div>
            <hr className="line"/>

        </div>
    )
}

export default Header
