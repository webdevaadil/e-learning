import React, { useEffect, useState } from 'react'
import agenda from"../assets/imges/agenda.png"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { BaseUrl } from '../Api';
export const Subjects = () => {
    const token = localStorage.getItem("token");
    const [subjects, setsubjects] = useState()
    const [loading, setloading] = useState(false)

  
      const getClass = async () => {
        setloading(true)
          let req = await axios(`${BaseUrl}get-subject?standard_id=${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setsubjects(req.data.data.getSubject);
    setloading(false)

        };
        useEffect(() => {
          getClass();
        }, []);
    const { id } = useParams();
    const { Class,type} = useParams();
  return (
    <>
    <div id="loading" style={{display: loading == false?("none"):("block")}}>
        <div id="loading-center">
           <div className="preloader"></div>
        </div>  
     </div>
    
    <div className="container new-subject">
    <div className="row">
        <div className="col-12">
        <div className="heads-elearning">
        <h1>{Class}</h1>
           </div>
            
            <div className="study-cards">
                {subjects&&subjects.map((item,index)=>{
                    return(
                        <Link to={`/Chapters/${item.subject}/${item.id}/${type}`} key={index}>
                        <div className="elearn-card-1">
                            <div className="inner-card-1">
    
                                <img src={agenda} alt="" srcSet=""/>
    
                            </div>
                            <div className="card-text">
                                <h2>11 {item.subject}</h2>
                                {/* <p>Chapters: 40</p> */}
                            </div>
    
    
                        </div>
                    </Link>
                    )
                })}

             

                {/* <Link to="/Chapters">
                    <div className="elearn-card-1">
                        <div className="inner-card-1">

                            <img src={agenda} alt="" srcSet=""/>

                        </div>
                        <div className="card-text">
                            <h2>11 CHEMISTRY-ENC</h2>
                            <p>Chapters: 28</p>
                        </div>


                    </div>
                </Link>
                <Link to="/Chapters">
                    <div className="elearn-card-1">
                        <div className="inner-card-1">

                            <img src={agenda} alt="" srcSet=""/>

                        </div>
                        <div className="card-text">
                            <h2>11 MATHS-ENC</h2>
                            <p>Chapters: 21</p>
                        </div>


                    </div>
                </Link>
                <Link to="/Chapters">
                    <div className="elearn-card-1">
                        <div className="inner-card-1">

                            <img src={agenda} alt="" srcSet=""/>

                        </div>
                        <div className="card-text">
                            <h2>11 PHYSICS-ENC</h2>
                            <p>Chapters: 15</p>
                        </div>


                    </div>
                </Link> */}
            </div>
        </div>
    </div>
</div></>
  )
}
