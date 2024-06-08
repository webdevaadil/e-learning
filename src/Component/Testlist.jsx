import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import test from "../assets/imges/test_8518419.png";

export const Testlist = () => {
  const { state } = useLocation();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true)

    state.map((item) => {
      setloading(false)

    });
  }, []);

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
        <h2>Tests</h2>
      </div>

      <div className="container new-chapters">
        <div className="row">
          <div className="col-12">
            <div className="study-cards">
              {state &&
                state.map((item) => {
                  return (
                    <Link to="/Test " state={item.queList} key={""}>
                      <div className="elearn-card-3">
                        <div className="inner-card-3">
                          <img src={test} alt="" srcSet="" />
                        </div>
                        <div className="card-text">
                          <h2> {item.test}</h2>
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
  );
};
