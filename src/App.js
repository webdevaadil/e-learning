import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./Component/Login.jsx";
import "./assets/css/custom.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/flaticon.css";
import "./assets/css/font-awesome-pro.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/main.css";
import "./assets/css/slick.css";
import "./assets/css/spacing.css";
import "./assets/css/swiper-bundle.css";
import "./assets/css/video.css";
import { Home } from "./Component/Home";
import { ClassName11 } from "./Component/Class11";
import { Chapters } from "./Component/Chapters.jsx";
import { Elearning } from "./Component/Elearning.jsx";
import { Mocktest } from "./Component/Mocktest.jsx";
import { Subjects } from "./Component/Subjects.jsx";
import { Testlist } from "./Component/Testlist.jsx";
import { Test } from "./Component/Test.jsx";
import { Video } from "./Component/Video.jsx";
import { Videolist } from "./Component/Videolist.jsx";
import { Session } from "./Session.jsx";
import { Board } from "./Component/Board.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <Session>
                <Home />{" "}
              </Session>
            }
          />
          <Route
            path="/board"
            element={
              <Session>
                <Board />{" "}
              </Session>
            }
          />
          <Route
            path="/Elearning/:board/:id"
            element={
              <Session>
                <Elearning />{" "}
              </Session>
            }
          />
          <Route
            path="/Class/:board/:id/"
            element={
              <Session>
                <ClassName11 />{" "}
              </Session>
            }
          />
          <Route
            path="/subject/:Class/:id/:type"
            element={
              <Session>
                <Subjects />{" "}
              </Session>
            }
          />
          <Route
            path="/Chapters/:subject/:id/:type"
            element={
              <Session>
                <Chapters />{" "}
              </Session>
            }
          />
          <Route
            path="/VideoList/:chapter/:id/:type"
            element={
              <Session>
                {" "}
                <Videolist />{" "}
              </Session>
            }
          />
          <Route
            path="/Mocktest"
            element={
              <Session>
                {" "}
                <Mocktest />{" "}
              </Session>
            }
          />
          <Route
            path="/TestList"
            element={
              <Session>
                {" "}
                <Testlist />{" "}
              </Session>
            }
          />
          <Route
            path="/Test"
            element={
              <Session>
                {" "}
                <Test />{" "}
              </Session>
            }
          />
          <Route
            path="/Vide"
            element={
              <Session>
                <Video />{" "}
              </Session>
            }
          />
          {/* <Route path="about" element={ <About/> } /> */}
          {/* <Route path="contact" element={ <Contact/> } />  */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
