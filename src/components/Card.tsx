import { View, Text, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'

type CardProps = PropsWithChildren & {
    title: string;
}
export default function Card({ title, children }: CardProps) {
  return (
    <View
      className="flex gap-[20px] rounded-[20px] bg-white px-5 py-10"
      style={styles.questionCard}>
      <Text className="text-2xl  font-medium leading-6 text-black">{title}</Text>

    {children}
    </View>
  );
}



const styles = StyleSheet.create({
  questionCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});