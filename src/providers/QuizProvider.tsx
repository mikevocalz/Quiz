import React, { PropsWithChildren, createContext, useState, useContext } from 'react';
import questions from '~/questions';
import { Question } from '~/types';

type QuizContextType = {
  questionIndex: number;
  question?: Question;
  handleNextPress: () => void;
  selectedOption?: string;
  setSelectedOption: (option: string) => void;
  score: number;
  totalQuestions: number;
};
export const QuizContext = createContext<QuizContextType>({
  questionIndex: 0,
  handleNextPress: () => {},
  setSelectedOption: () => {},
  score: 0,
  totalQuestions: 0,
});

export default function QuizProvider({ children }: PropsWithChildren) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);

  const question = questions[questionIndex];
  const isFinished = questionIndex >= questions.length;
  
  const restart = () => {
    setQuestionIndex(0);
    setSelectedOption('');
    setScore(0);
  };

  const handleNextPress = () => {
    if (isFinished) {
      restart();
      return;
    }

    if (selectedOption === question?.correctAnswer) {
      setScore((currScore) => currScore + 1);
    }

    setQuestionIndex((currVal) => currVal + 1);
  };

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        handleNextPress,
        selectedOption,
        setSelectedOption,
        score,
        totalQuestions: questions.length,
      }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);
