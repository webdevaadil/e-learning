import React, { useEffect, useState } from "react";
import play from "../assets/imges/play_16550564.png";
import axios from "axios";
import { LionPlayer } from 'lion-player';
import { BaseUrl } from "../Api";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import 'lion-player/dist/lion-skin.min.css';
export const Videolist = () => {
  const token = localStorage.getItem("token");
  const [video, setvideo] = useState();
  const [loading, setloading] = useState(false);
  const [modelstatus, setmodelstatus] = useState(false);

  const getvideo = async () => {
    setloading(true);

    let req = await axios(`${BaseUrl}get-chapter-video?chapter_id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setvideo(req.data.data);
    setloading(false);
  };
  useEffect(() => {
    getvideo();
  }, []);
  const [SOURCES, setsource] = useState({src:"",type:""})
  const [Mock, setmock] = useState({src:"",type:""})
  const { id } = useParams();
  const { chapter,type } = useParams();
  function revealVideo(div, video_id) {
    var video = document.getElementById(video_id).src;
    document.getElementById(video_id).src = video + "&autoplay=1"; // adding autoplay to the URL
    document.getElementById(div).style.display = "block";
  }

  // Hiding the lightbox and removing YouTube autoplay
  function hideVideo(div, video_id) {
    var video = document.getElementById(video_id).src;
    var cleaned = video.replace("&autoplay=1", ""); // removing autoplay form url
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = "none";
  }
const navigate = useNavigate();
const sendmock =(item)=>{
setmock(`https://elearning.growthmetaverse.co.in/${item.path}${item.video}`)
navigate('/Mocktest',{state:`/${item.path}${item.file}`});

}
  return (
    <div>
      <div
        id="loading"
        style={{ display: loading == false ? "none" : "block" }}
      >
        <div id="loading-center">
          <div className="preloader"></div>
        </div>
      </div>
      <div className="e-learning">
        <div className="heads-elearning">
          <h2> {type == "Mocktest"?( "Mocktest") :("Video")} list</h2>
          <p>{chapter}</p>
        </div>

        <div className="container new-chapters">
          <div className="row">
            <div className="col-12">
              {type == "Mocktest"?(  <div className="study-cards">
                {video &&
                  video.mock_test.map((item, index) => {
                    return (
                      <a  key={index}>
                        <div className="elearn-card-3">
                          <div className="inner-card-3">
                            <img src={play} alt="" srcSet="" />
                          </div>
                          <div className="card-text">
                            <h2 onClick={()=>{sendmock(item)}} id="playme">{item.name}</h2>
                          </div>
                        </div>
                      </a>
                    );
                  })}
              </div>):(
              <div className="study-cards">
                {video &&
                  video.getVideo.map((item, index) => {
                    return (
                      <a href="#" key={index}>
                        <div className="elearn-card-3">
                          <div className="inner-card-3">
                            <img src={play} alt="" srcSet="" />
                          </div>
                          <div className="card-text">
                            <h2 onClick={()=>{setmodelstatus(true);setsource({src:`https://elearning.growthmetaverse.co.in/${item.path}${item.video}`,type: '',})}} id="playme">{item.name}</h2>
                          </div>
                        </div>
                      </a>
                    );
                  })}
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
      <div id="iframevideo" style={{display: modelstatus == false?("none"):("block")}}>
      <div className="lightbox-container">
        <div className="lightbox-content">

            <button  className="lightbox-close">
                <i className="fa-solid fa-xmark" onClick={()=>{setmodelstatus(false)}}></i>
            </button>
            <LionPlayer sources={SOURCES} autoplay="muted" />
           

        </div>
    </div> 
      </div>
      
    </div>
  );
};
