import { Text, Pressable } from 'react-native';
import { useQuizContext } from '~/providers/QuizProvider';

type AnswerOptionProps = {
  option: string;
};

const AnswerOption = ({ option }: AnswerOptionProps) => {
  
  const { selectedOption, setSelectedOption } = useQuizContext();

  const isSelected = option === selectedOption;

 
  return (
    <Pressable onPress={() => setSelectedOption(option)} className={'border p-5 rounded-full ' + (isSelected ? 'border-[#e1f396] bg-[#e1f396] ' : 'bg-white border-gray-300')}>
      <Text className={isSelected ? 'text-[#005055]' : 'text-black'}>{option}</Text>
    </Pressable>
  );
};


export default AnswerOption;
