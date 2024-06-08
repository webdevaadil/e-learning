import video from "../assets/imges/video-lecture.png"
import Mock from "../assets/imges/exam.png"
import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { BaseUrl } from "../Api";
import { useEffect, useState } from "react";
export const ClassName11 = () => {
    const [loading, setloading] = useState(false)

    const { id } = useParams();
    const { board } = useParams();
  const token = localStorage.getItem("token");
  const [Class, setClass] = useState()

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
                <h2>Elearnings</h2>
                <p>{board}</p>
            </div>
       
                <>
                <div className="heads-elearning">
               
                <p>CLASS {board}</p>
            </div>
        
        
            <div className="container e11-className">
                <div className="row">
                    <div className="col-12">
                        <div className="study-cards">
                            <Link to={`/subject/${board}/${id}/Video`}>
                                <div className="e11-elearn-card">
                                    <div className="inner-card">
        
                                        <img src={video}alt="" srcSet=""/>
                                        <p>Videos</p>
                                    </div>
        
        
                                </div>
                            </Link>
        
                            <Link to={`/subject/${board}/${id}/Mocktest`}>
                                <div className="e11-elearn-card">
                                    <div className="inner-card">
                                        <img src={Mock} alt="" srcSet=""/>
                                        <p>Mock Test</p>
                                    </div>
        
        
                                </div>
                            </Link>
        
                        </div>
                    </div>
                </div>
            </div>
        
                </>
        
  


</div>
      </>
  )
}
