import './global.css';
import QuizScreen from '~/app/QuizScreen';
import { StatusBar } from 'expo-status-bar';
import QuizProvider from '~/providers/QuizProvider';

export default function App() {
  return (
    <>
      <QuizProvider>
        <QuizScreen />
      </QuizProvider>
      <StatusBar style="dark" />
    </>
  );
}
