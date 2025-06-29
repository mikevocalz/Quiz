import { View } from 'react-native';
import AnswerOption from './AnswerOption';
import Card from './Card';
import { useState } from 'react';


type QuestionCardProps = {
  question:{ 
    title: string;
    options: string[]
  }
}

export default function QuestionCard({ question}: QuestionCardProps) {




  return (
 

<Card title={question.title}>

      <View className="gap-2.5">
        {question.options.map((option) => (
          <AnswerOption
            key={option}
            option={option}
          />
        ))}
      </View>


      </Card>
  );
}
