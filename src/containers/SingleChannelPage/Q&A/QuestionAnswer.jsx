import React from "react";
import "./index.scss";
import { useState } from "react";
import { useEffect } from "react";
const QuestionAnswer = () => {
  const [questions, setquestion] = useState({});
  const QuestionsAndAnswers = [
    {
      question: "Can I cancel my subscription at anytime ?",
      answer:
        " Sure , Your paid Subscription Can be canceled anytime by shifting to Lite Plan",
    },
    {
      question: "Can I change My Plan Later On ?",
      answer: " Absolutely , You can upgrade or downgrade your plan anytime",
    },
    {
      question: "Can I cancel my subscription at anytime ?",
      answer:
        " Sure , Your paid Subscription Can be canceled anytime by shifting to Lite Plan",
    },
    {
      question: "Can I change My Plan Later On ?",
      answer: " Absolutely , You can upgrade or downgrade your plan anytime",
    },
    {
      question: "Can I cancel my subscription at anytime ?",
      answer:
        " Sure , Your paid Subscription Can be canceled anytime by shifting to Lite Plan",
    },
    {
      question: "Can I change My Plan Later On ?",
      answer: " Absolutely , You can upgrade or downgrade your plan anytime",
    },
  ];
  useEffect(() => {
    QuestionsAndAnswers.map((a, index) => {
      questions[index] = false;
      setquestion(questions);
    });
  }, []);
  return (
    <div id="question-answer">
      <h1 className="main-heading mb-10 d-flex justify-content-center">
        Frequently Asked Questions
      </h1>
      <div className="main-questions mt-5 col-7 mx-auto">
        {QuestionsAndAnswers.map((question, index) => {
          return (
            <div className="questions-main ">
              <div className="question d-flex align-items-center justify-content-between">
                <h3 className="mr-3 mb-0">{question.question}</h3>
                <button
                  onClick={async () => {
                    questions[index] = await !questions[index];

                    await setquestion({
                      ...questions,
                    });
                    console.log("state updtae", questions);
                  }}
                >
                  {questions[index] ? (
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={require("../../../assets/minus.svg")}
                    ></img>
                  ) : (
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={require("../../../assets/plus-icon.svg")}
                    ></img>
                  )}
                </button>
              </div>
              {questions[index] && (
                <div className="answer mt-4">
                  <p>{question.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionAnswer;
