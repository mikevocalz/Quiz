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
  const [selectedOption, setSelectedOption] = useState(question.options[0]);


  const handleOptionPress = (option: string) => {
    setSelectedOption(option)
  }


  return (
 

<Card title={question.title}>

      <View className="gap-2.5">
        {question.options.map((option) => (
          <AnswerOption
            key={option}
            option={option}
            onPress={() => handleOptionPress(option)}
            isSelected={option === selectedOption}
          />
        ))}
      </View>


      </Card>
  );
}
