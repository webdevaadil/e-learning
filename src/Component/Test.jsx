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
  const [recordanswer, setRecordanswer] = useState();
  const handleOptionChange = (value, qnos) => {
    setSelectedAnswer(value);
    checkvalue(qnos, value);
    console.log(qnos);
    if (qnos <= qno) {
      setRecordanswer((recordanswer) => {
        return { ...recordanswer, [`${qnos}`]: value };
      });
    }
  };
  useEffect(() => {
    setSelectedAnswer(recordanswer?.[qno]);
  }, [qno, recordanswer]);
  console.log(recordanswer);
  console.log(qno);

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
      // setSelectedAnswer(null);
      setqeno(qeno + 1);
    }, 1000);
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
  const [qeno, setqeno] = useState(1);
  console.log(qeno);
  const cra = () => {
    const data = Object.keys(cv).filter((item, index) => {
      return item == qeno + 1;
    });
    setSelectedAnswer(cv.que);
  };

  const [loading, setloading] = useState(false);
  const navi = useNavigate();
  console.log(state);
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
            {qeno == 1 || (state && qeno > state.length) ? (
              ""
            ) : (
              <img
                width={"14px"}
                src={play}
                style={{ position: "absolute", left: "20px" }}
                onClick={() => {
                  // cra()
                  setqeno(qeno - 1);
                }}
              />
            )}
            <div className="study-cards">
              {state && state.length >= qeno ? (
                state &&
                state.map((item) => {
                  return item.queNo == qeno ? (
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
                <div className="elearn-card-3" style={{ textAlign: "center" }}>
                  <div className="inner-card-3">
                    <h5 style={{ fontSize: "30px" }}>Test Result</h5>
                    <img src={bookstack} alt="" />
                    <h5>YOUR SCORE</h5>
                    <h4>
                      {" "}
                      {correctans} /{state.length}
                    </h4>
                  </div>
                </div>
              )}
            </div>

            {state && state.length >= qeno ? (
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
                   setqeno(1)
                   setCv('')
                  }}
                  style={{
                    width: "90px",
                    height: "35px",
                    borderRadius: "20px",
                    backgroundColor: "#4FC3F7",
                    marginTop: "10px",
                    color: "white",
                  }}
                >
                  Try again
                </button>
                <button
                   onClick={() => {
                    navi('/board')
                   }}
                  style={{
                    width: "90px",
                    height: "35px",
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
