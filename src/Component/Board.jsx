import React, { useEffect, useState } from "react";
import board from "../assets/imges/book-stack (1).png";
import axios from "axios";
import { BaseUrl } from "../Api";
import { Link } from "react-router-dom";

export const Board = () => {
    const [loading, setloading] = useState(false)
  const token = localStorage.getItem("token");
  const [Board, setBoard] = useState();

  const getBoard = async () => {
    setloading(true)
    try {
      let req = await axios(`${BaseUrl}get-board`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBoard(req.data.data.getBoard);
      setloading(false)
      
    } catch (error) {
      setloading(false)
      
    }
   
  };
  useEffect(() => {
    getBoard();
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
        <p>Board</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="study-cards">
              {Board &&
                Board.map((item, index) => {
                  return (
                    <Link to={{pathname: `/Elearning/${item.board}/${item.id}` }} key={index}>
                      <div className="elearn-card">
                        <div className="inner-card">
                          <img src={board} alt="" srcSet="" />
                          <p>{item.board}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
