import React from 'react';
import { Link } from "react-router-dom";
import './Bots.css'
// import BotItem from './BotItem';
import {useSelector,useDispatch} from 'react-redux';

export const Bots = () => {
    const botdata=useSelector(state => state.bots);
    const dispatch=useDispatch();

    // console.log(botdata)
    const cartHandler=()=>{
        dispatch({
            type:"addToCart"
        })
    }
    return (
        <div className="BotsList">
            {
                botdata.map((bot) => {
                    // return <BotItem bot={bot} key={bot.id}/>
                    return <>
                    <div key={bot.id}>
                        <div className="bots">
                            <div className="botname">
                                <h4>{bot.bot}</h4>
                            </div>
                            <div className="indexvalue">
                                <p id="index-title">Index value</p>
                                <br/>
                                <p id="index-value">{bot['index-value']}</p>
                            </div>
                            <div className="cagrvalue">
                                <p id="cagr-title">Cagr Value</p>
                                <br/>
                                <p id="cagr-value">{bot.cagr}</p>
                            </div>
                            <div className="buttons">
                                <Link to={`/bots-detail/${bot.id}`}><button className="button viewalgo">View Algo</button></Link>
                                <button onClick={cartHandler} className="button buy">Buy</button>
                            </div>
                        </div>
                    </div>
                </>
            })
        }
        </div>
    )
}
export default Bots