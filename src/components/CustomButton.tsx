import { ComponentProps, ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';

type CustomButtonProps = {
  rightIcon?: ReactNode;
  title: string;
} & ComponentProps<typeof Pressable>;

const CustomButton = ({ rightIcon, title, ...pressableProps }: CustomButtonProps) => {
  return (
    <Pressable {...pressableProps} className='bg-[#005055] p-5 rounded-full items-center justify-center gap-5'>
      <Text  className='text-white font-medium text-lg leading-6'>{title}</Text>
      <View className='absolute right-5'>{rightIcon}</View>
    </Pressable>
  );
};



export default CustomButton;
