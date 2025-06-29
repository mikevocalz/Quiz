import { View } from 'react-native';
import AnswerOption from './AnswerOption';
import Card from './Card';
import { useEffect } from 'react';

type QuestionCardProps = {
  question: {
    title: string;
    options: string[];
  };
};

export default function QuestionCard({ question }: QuestionCardProps) {

  useEffect(() => {
    
  }, []);
  
  return (
    <Card title={question.title}>
      <View className="gap-2.5">
        {question.options.map((option) => (
          <AnswerOption key={option} option={option} />
        ))}
      </View>
    </Card>
  );
}
