import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import test from "../assets/imges/test_8518419.png";
import { BaseUrl, BaseUrl2 } from '../Api';

export const Mocktest = () => {
    const navigate = useNavigate();
  const [loading, setloading] = useState(false);

    const {state} = useLocation();
    const [Subjects, setSubjects] = useState()
    const data =async ()=>{
        const req= await axios(state)

    }
    useEffect(() => {
        setloading(true)
        fetch(`https://elearning.growthmetaverse.co.in${state}`)
        .then(response => response.json())
        .then(data =>setSubjects(data) ,
        setloading(false),

       )
        .catch(error => console.error('Error:', error));
    }, [state])
    const sendtotest=(item)=>{
    //   navigate('/test')
    }
  return (
    <div className="e-learning">
         <div
        id="loading"
        style={{ display: loading == false ? "none" : "block" }}
      >
        <div id="loading-center">
          <div className="preloader"></div>
        </div>
      </div>
    <div className="heads-elearning">
        <h2>Test Subjects</h2>
    </div>




    <div className="container new-chapters">
        <div className="row">
            <div className="col-12">
                <div className="study-cards">
                    {Subjects&&[Subjects.totalSub].map((item,index)=>{
                        return(

                       item.map((item,index)=>{
                        return(
                            <Link to='/TestList' state={item.subTest} key={index} >
                            <div className="elearn-card-3">
                                <div className="inner-card-3">
    
                                    <img src={test} alt="" srcSet=""/>
    
                                </div>
                                <div className="card-text" >
                                    <h2 onClick={sendtotest(item)} > {item.sub}</h2>
    
                                </div>
    
    
                            </div>
                        </Link>
                        )
                       })
                    )
                })}
                   
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
