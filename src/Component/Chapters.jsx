import React, { useEffect, useState } from 'react'
import bookstack from "../assets/imges/book-stack (1).png"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { BaseUrl } from '../Api';
export const Chapters = () => {
    const token = localStorage.getItem("token");
    const [chapters, setchapters] = useState();
    const [loading, setloading] = useState(false)

  
      const getChapter = async () => {
    setloading(true)

          let req = await axios(`${BaseUrl}get-chapter?subject_id=${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setchapters(req.data.data.getChapter);
    setloading(false)

        };
        useEffect(() => {
          getChapter();
        }, []);
    const { id } = useParams();
    const { subject,type} = useParams();
  return (
    <>
    <div id="loading" style={{display: loading == false?("none"):("block")}}>
        <div id="loading-center">
           <div className="preloader"></div>
        </div>  
     </div>
    
    <div className="e-learning">
    <div className="heads-elearning">
        <h2>Chapters</h2>
    </div>





    <div className="container new-chapters">
        <div className="row">
            <div className="col-12">
                <div className="study-cards">
                {chapters&&chapters.map((item,index)=>{
    return(
        <Link to={`/VideoList/${item.chapter}/${item.id}/${type}`} key={index}>
        <div className="elearn-card-3">
            <div className="inner-card-3">

                <img src={bookstack} alt="" srcSet=""/>

            </div>
            <div className="card-text">
                <h2>{item.chapter} {subject}</h2>
                <p></p>
            </div>


        </div>
    </Link>
    )
})}
                    {/* <Link to="/VideoList">
                        <div className="elearn-card-3">
                            <div className="inner-card-3">

                                <img src={bookstack} alt="" srcSet=""/>

                            </div>
                            <div className="card-text">
                                <h2>01 3D Geomatry</h2>
                                <p>Volumes: 12</p>
                            </div>


                        </div>
                    </Link>
                    <Link to="/VideoList">
                        <div className="elearn-card-3">
                            <div className="inner-card-3">

                                <img src={bookstack} alt="" srcSet=""/>

                            </div>
                            <div className="card-text">
                                <h2>01 3D Geomatry</h2>
                                <p>Volumes: 12</p>
                            </div>


                        </div>
                    </Link>
                    <Link to="/VideoList">
                        <div className="elearn-card-3">
                            <div className="inner-card-3">

                                <img src={bookstack} alt="" srcSet=""/>

                            </div>
                            <div className="card-text">
                                <h2>01 3D Geomatry</h2>
                                <p>Volumes: 12</p>
                            </div>


                        </div>
                    </Link>
                    <Link to="/VideoList">
                        <div className="elearn-card-3">
                            <div className="inner-card-3">

                                <img src="../assets/imges/book-stack (1).png" alt="" srcSet=""/>

                            </div>
                            <div className="card-text">
                                <h2>01 3D Geomatry</h2>
                                <p>Volumes: 12</p>
                            </div>


                        </div>
                    </Link>
                    <Link to="/VideoList">
                        <div className="elearn-card-3">
                            <div className="inner-card-3">

                                <img src={bookstack} alt="" srcSet=""/>

                            </div>
                            <div className="card-text">
                                <h2>01 3D Geomatry</h2>
                                <p>Volumes: 12</p>
                            </div>


                        </div>
                    </Link>
                    <Link to="/VideoList">
                        <div className="elearn-card-3">
                            <div className="inner-card-3">

                                <img src={bookstack} alt="" srcSet=""/>

                            </div>
                            <div className="card-text">
                                <h2>01 3D Geomatry</h2>
                                <p>Volumes: 12</p>
                            </div>


                        </div>
                    </Link>
                    <Link to="/VideoList">
                        <div className="elearn-card-3">
                            <div className="inner-card-3">

                                <img src={bookstack} alt="" srcSet=""/>

                            </div>
                            <div className="card-text">
                                <h2>01 3D Geomatry</h2>
                                <p>Volumes: 12</p>
                            </div>


                        </div>
                    </Link>
                    <Link to="/VideoList">
                        <div className="elearn-card-3">
                            <div className="inner-card-3">

                                <img src={bookstack} alt="" srcSet=""/>

                            </div>
                            <div className="card-text">
                                <h2>01 3D Geomatry</h2>
                                <p>Volumes: 12</p>
                            </div>


                        </div>
                    </Link> */}

                </div>
            </div>
        </div>
    </div>


</div></>
  )
}
