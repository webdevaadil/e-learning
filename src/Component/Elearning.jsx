import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import graduate from"../assets/img/graduated.png"
import { BaseUrl } from '../Api';
import axios from 'axios';

export const Elearning = () => {
   const { id } = useParams();
   const { board } = useParams();
 const token = localStorage.getItem("token");
 const [Class, setClass] = useState()

 const [loading, setloading] = useState(false)
   const getClass = async () => {
      setloading(true)
       let req = await axios(`${BaseUrl}get-standard?board_id=${id}`, {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       });
       setClass(req.data.data.getStandard);
       setloading(false)
     };
     useEffect(() => {
       getClass();
     }, []);
  return (
   <>
    <div id="loading" style={{display: loading == false?("none"):("block")}}>
         <div id="loading-center">
            <div className="preloader"></div>
         </div>  
      </div>
    <div className="e-learning">
    <div className="heads-elearning">
       <h2>Elearning</h2>
       <p>CBSE</p>
    </div>
    <div className="container">
       <div className="row">
          <div className="col-12">
             <div className="study-cards">
               {Class&&Class.map((item,index)=>{

               return( <Link to={`/Class/${item.standard}/${item.id}`}key={index}>
               <div className="elearn-card">
                  <div className="inner-card">

                     <img src={graduate} alt="" srcSet=""/>
                     <p>className {item.standard}</p>

                  </div>


               </div>
            </Link>)
               })}
               
 
 
 
             </div>
          </div>
       </div>
    </div>
 
 
 </div>
      </>
  )
}
