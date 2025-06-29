import { View, Text, SafeAreaView, Pressable, StyleSheet } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Card from '~/components/Card';
import { useQuizContext } from '~/providers/QuizProvider';
import { useEffect } from 'react';
import { useTimer } from '~/hooks/useTimer';
import LottieView from 'lottie-react-native';
import party from '../../assets/party.json';

export default function QuizScreen() {
const { question, questionIndex, handleNextPress, score, totalQuestions,bestScore } = useQuizContext()

const { time, startTimer, clearTimer } = useTimer(20)



 useEffect(() => {
   startTimer();

   return () => {
     clearTimer();
   };
 }, [question]);

 useEffect(() => {
   if (time <= 0) {
     handleNextPress()
   }
 }, [time]);

  return (
    <SafeAreaView className="flex-1 bg-white w-full min-h-screen">
      <View className="flex-1 justify-between p-5">
        {/* Header */}
        <View>
          <Text className="text-center text-[#005055]">Question {Math.min(questionIndex + 1, totalQuestions)} /{totalQuestions}</Text>
        </View>

        {/* Body */}
        {question ?(
        <View>
          <QuestionCard question={question}/>
          <Text className="my-[15px] text-center text-xl font-bold  text-[#005055]">{time} sec</Text>
        </View>
        ) : (
          <>        
         <LottieView style={StyleSheet.absoluteFill} source={party} autoPlay loop={false}  />
           <Card title="Quiz Completed">
            <Text>Correct Answers: {score}/{totalQuestions}</Text>
            <Text>Best Score: {bestScore}</Text>
           </Card>
          </>
        )} 

        {/* Footer */}
        <Pressable onPress={handleNextPress} className="p-5 items-center justify-center bg-[#005055] rounded-full">
          <Text className="text-white font-medium text-lg leading-6">Next</Text>
          <FontAwesome6 name="arrow-right-long" size={16} color="white" className="absolute right-5" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
