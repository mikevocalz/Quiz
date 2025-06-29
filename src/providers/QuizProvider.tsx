import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { PropsWithChildren, createContext, useState,useEffect, useContext } from 'react';
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
  bestScore: number;
};

export const QuizContext = createContext<QuizContextType>({
  questionIndex: 0,
  handleNextPress: () => {},
  setSelectedOption: () => {},
  score: 0,
  totalQuestions: 0,
  bestScore: 0,
});

export default function QuizProvider({ children }: PropsWithChildren) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [bestScore,setBestScore] = useState(0);
  const isFinished = questionIndex >= questions.length;

  useEffect(() => {
    loadBestStore();
  }, []);

  useEffect(() => {
    if(isFinished === true && score > bestScore){
      setBestScore(score);
      saveBestStore(Number(score));
    }

  }, [isFinished]);

  const question = questions[questionIndex];

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

  const saveBestStore = async (score:number) => {
    try {
      await AsyncStorage.setItem('best-score', String(score));
    } catch (error) {
      console.error('Error saving best score:', error);
    }
  };

  const loadBestStore = async () => {
    try {
      const value = await AsyncStorage.getItem('best-score');
      if (value === null) {
        setBestScore(Number(value));
      }
    } catch (error) {
      console.error('Error loading best score:', error);
    }
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
        bestScore
      }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);
