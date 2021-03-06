import React from 'react';
import SelectionBox from '../selectionBox/SelectionBox';
import SubmitButton from '../button/SubmitButton';
import ProgressBar from '../progressBar/ProgressBar';

import './Styles.scss';

const LearningModule = ({ setGameStatus }) => {
  const [currentQuestionId, setCurrentQuestionId] = React.useState(0);
  const [quizData, setQuizData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  let currentQuestion = quizData.questionArr ? quizData.questionArr[currentQuestionId] : {};
  React.useEffect(() => {
    getQuizData();
  }, []);

  const getQuizData = () => {
    fetch("http://localhost:8080/problems")
      .then((res) => {
        return res.json();
      }).then((data) => {
        setQuizData(data);
      }).catch((err) => {
        console.log(err);
      });
  }

  const handleSubmit = () => {
    if (currentQuestionId < quizData.totalQuestions - 1) {
      setLoading(true);
      setTimeout(() => {
        setCurrentQuestionId(currentQuestionId + 1);
        setLoading(false);
      }, 1000)
    } else {
      setCurrentQuestionId(0);
      setGameStatus({ message: "Great Job! Play again.", loadIntro: true });
    }
  }
  let possibleAnswers = [];
  if (currentQuestion.possibleAnswers) {
    possibleAnswers = currentQuestion.possibleAnswers.map((answer, index) => {
      return <SelectionBox id={index} key={index} answer={answer} />
    })
  }


  return (
    <div className="learningModule">
      {currentQuestion.title &&
        <>
          <ProgressBar totalQuestions={quizData.totalQuestions} id={currentQuestion.id} />
          <div className="learningModule--header">
            <div className="learningModule--title">
              {currentQuestion.title}
            </div>
            <div className="learningModule--subHeader">
              {currentQuestion.additionalInfo}
            </div>
          </div>

          <div className="learningModule--answerArea">
            <div className="learningModule--selections">
              {possibleAnswers}
            </div>
            <div className="learningModule--submitButtonContainer">
              <SubmitButton label="Submit" handleSubmit={handleSubmit} loading={loading} />
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default LearningModule;
