import { Text, Pressable } from 'react-native';

type AnswerOptionProps = {
  option: string;
  isSelected?: boolean;
  onPress: () => void;
};

const AnswerOption = ({ option, isSelected, onPress }: AnswerOptionProps) => {
  
  
  return (
    <Pressable onPress={onPress} className={'border p-5 rounded-full ' + (isSelected ? 'border-[#e1f396] bg-[#e1f396] ' : 'bg-white border-gray-300')}>
      <Text className={isSelected ? 'text-[#005055]' : 'text-black'}>{option}</Text>
    </Pressable>
  );
};


export default AnswerOption;
