import './global.css';
import QuizScreen from '~/app/QuizScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <QuizScreen />
      <StatusBar style="dark" />
    </>
  );
}
