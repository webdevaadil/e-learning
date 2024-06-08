import React, { useState } from "react";
import { useEffect } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import play from "../assets/imges/left-arrow_109618.png";
import bookstack from "../assets/imges/book-stack (1).png";

const Question = (props) => {
  const {
    showAnswer,
    qno,
    questions,
    ansList,
    correctAnswer,
    checkvalue,
    loadingani,
    selectedAnswer,
    setSelectedAnswer,
  } = props;
  const handleOptionChange = (value, qnos) => {
    setSelectedAnswer(value);
    checkvalue(qnos, value);
  };

  const [rightans, setRightans] = useState(0);
  const getAnswerClass = (option) => {
    if (showAnswer) {
      if (selectedAnswer === correctAnswer) {
        setRightans(rightans + 1);
        return "correct-answer"; // Class for correct answer
      } else if (selectedAnswer !== correctAnswer) {
        return "wrong-answer"; // Class for wrong answer
      } else {
        return ""; // No class for other options
      }
    } else {
      return ""; // No class when answer not shown
    }
  };
  return (
    <div
      className={`question ${getAnswerClass()}  ${
        loadingani == false ? "" : "question-animation"
      }`}
    >
      <div className="elearn-card-3">
        <div className="inner-card-3">
          {getAnswerClass() == "correct-answer" ? (
            <p>Correct answer</p>
          ) : getAnswerClass() == "wrong-answer" ? (
            <p>Wrong answer</p>
          ) : (
            ""
          )}
          <p>
            Q{qno}
            {")"} {questions}
          </p>
          <ul>
            <form key="">
              {ansList.map((opt) => {
                return (
                  <>
                    <div className="checkbox">
                      <label>
                        {opt.ansName}
                        {")"}.{" "}
                        <input
                          type="checkbox"
                          value={opt.ansName}
                          {...(showAnswer === true && { disabled: true })} // Spread syntax with conditional object
                          checked={opt.ansName == selectedAnswer}
                          required
                          onChange={() => {
                            handleOptionChange(opt.ansName, qno);
                          }}
                        />
                        {opt.ans}
                      </label>
                    </div>
                  </>
                );
              })}
            </form>
            {selectedAnswer != null && showAnswer == true ? (
              <p className="correct-answers">Correct Answer: {correctAnswer}</p>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export const Test = () => {
  const [cv, setCv] = useState(null);
  const { state } = useLocation();

  const [showAnswer, setshowAnswer] = useState(false);
  const [loadingani, setLoadingani] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctans, setcorrectans] = useState(0);

  const submitform = (value) => {
    setLoadingani(false);
    setTimeout(() => {
      setLoadingani(true);
      setSelectedAnswer(null)
      setqeno(qeno + 1);
    }, 1000);
console.log(state);
    testsns();
    return;
    if (cv) {
      if (Object.keys(cv).length !== state.length) {
        toast.error("fill all questions");
      } else {
        setshowAnswer(true);
        toast.success("Submitted");
      }
    } else {
      toast.error("fill all questions");
    }
  };
  const checkvalue = (qnos, value) => {
    setCv((cv) => {
      return { ...cv, [`${qnos}`]: value };
    });
  };
  useEffect(() => {
    setloading(true);

    state.map((item, index) => {
      setloading(false);
    });
  }, []);
  const testsns = () => {
    if (cv) {
      const correctCount = state.reduce((acc, question) => {
        const userAnswer = cv[question.queNo]; // Get user's answer from answerKey
        return acc + (userAnswer == question.correctAnsName ? 1 : 0); // Add 1 if correct
      }, 0);
      setcorrectans(correctCount);
    }
  };
  const [qeno, setqeno] = useState(0);
  const cra = () => {
    const data = Object.keys(cv).filter((item, index) => {
      return item == qeno + 1;
    });
    console.log(cv);
    console.log(selectedAnswer);
    setSelectedAnswer(cv.que);
  };

  
  console.log(selectedAnswer);

  const [loading, setloading] = useState(false);
  const navi = useNavigate();
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
          <div
            className="col-12"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {qeno == 0 ? (
              ""
            ) : (
              <img
                width={"14px"}
                src={play}
                style={{ position: "absolute", left: "20px" }}
                onClick={() => {
    // cra()
    setqeno(qeno - 1)
                }}
              />
            )}
            <div className="study-cards">
              {state && state.length >= qeno + 1 ? (
                state &&
                state.map((item) => {
                  return item.queNo == qeno + 1 ? (
                    <Question
                      showAnswer={showAnswer}
                      qno={item.queNo}
                      key=""
                      questions={item.que}
                      ansList={item.ansList}
                      correctAnswer={item.correctAnsName}
                      checkvalue={checkvalue}
                      loadingani={loadingani}
                      selectedAnswer={selectedAnswer}
                      setSelectedAnswer={setSelectedAnswer}
                    />
                  ) : (
                    ""
                  );
                })
              ) : (
                <div className="elearn-card-3">
                  <div className="inner-card-3">
                    <p>Test Result</p>
                    <img src={bookstack} alt="" />
                    <h4>YOUR SCORE</h4>
                    {correctans} /{state.length}
                  </div>
                </div>
              )}
            </div>

            {state && state.length >= qeno + 1 ? (
              <button
                onClick={submitform}
                style={{
                  width: "60px",
                  height: "30px",
                  borderRadius: "20px",
                  backgroundColor: "#4FC3F7",
                  marginTop: "10px",
                  color: "white",
                }}
              >
                Submit
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    navi("/Test");
                  }}
                  style={{
                    width: "60px",
                    height: "30px",
                    borderRadius: "20px",
                    backgroundColor: "#4FC3F7",
                    marginTop: "10px",
                    color: "white",
                  }}
                >
                  Try again
                </button>
                <button
                  onClick={submitform}
                  style={{
                    width: "60px",
                    height: "30px",
                    borderRadius: "20px",
                    backgroundColor: "rgb(75 175 48)",
                    marginTop: "10px",
                    color: "white",
                  }}
                >
                  Home
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
