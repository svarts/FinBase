import { ThemedText } from '@/components/ThemedText';
import { View } from 'react-native';
import tw from 'twrnc';

export default function TabScreens() {
  return (
    <View style={tw`flex justify-center items-center mt-20`}>
      <ThemedText type="title">Wallet</ThemedText>
    </View>
  );
}