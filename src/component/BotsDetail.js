import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import './BotsDetail.css'

const BotsDetail = () => {
    const botalgo=useSelector(state => state.bots);
    const param=useParams();
    const dispatch=useDispatch();

    const carthandler=()=> {
        dispatch({
            type:"addToCart"
        })
    }

    return (
        <div className="botalgodetail">
            {botalgo.filter((algo)=>{
                return algo.id.toString()===param.id
            }).map((algo)=>{
               return<>
                    <div className="algos">
                        <div className="algoname">
                            <h4>{algo.bot}</h4>
                        </div>
                        <div className="algodetail">
                            <div className="algo-description">
                                <p>{algo.description}</p>
                            </div>
                            <div className="indexvalues">
                                <p id="index-title">Indexvalue</p>
                                <br/>
                                <p id="index-value">{algo['index-value']}</p>
                            </div>
                            <div className="cagrvalues">
                                <p id="cagr-title">cagrvalue</p>
                                <br/>
                                <p id="cagr-value">{algo.cagr}</p>
                            </div>
                        </div>
                        <div className="buttonss">
                            <button className="buttonalgo viewalgos">Moderate Risk</button>
                            <button onClick={carthandler} className="buttonalgo buy">Buy</button>
                        </div>
                    </div>
               </>
            })
            }
        </div>
    )
}

export default BotsDetail
