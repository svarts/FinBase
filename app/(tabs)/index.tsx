import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc';
import data from '@/constants/data.json';

export default function HomeScreen() {
  return (
    <ThemedView style={tw`flex-1 justify-center items-center bg-[#F2F2F2] px-5`}>
      <Title />
      <GradientShadowBox>
        <View style={tw`w-full flex-row justify-between`}>
          <View>
            <ThemedText style={tw`text-left text-md font-medium text-gray-300 mb-2`}>
              Total Coins
            </ThemedText>
            <ValueInfo value={`$${data.totalValue.toLocaleString()}`} fontSize='xl' />
            <ThemedText style={tw`text-left text-md font-medium text-gray-300 mt-10 mb-2`}>
              Today's Profit
            </ThemedText>
            <ValueInfo value={`$${data.todayProfit.toFixed(2)}`} fontSize='xl' />
          </View>
          <View style={tw`bg-white rounded-full bg-opacity-85 px-2 self-end mb-5`}>
            <ValueInfo value={`${data.profitPercentage.toFixed(2) + '%'}`} color="#10DC78" fontSize="md" percentageChange={data.profitPercentage} />
          </View>
        </View>
      </GradientShadowBox>
      <ThemedText style={tw`text-left text-md font-medium text-gray-900 mb-2 ml-2 w-full`}>
        My Coins
      </ThemedText>
      <View style={tw`flex justify-center items-center w-full`}>
        <CoinList />
        <Link to="/" style={tw`text-md font-medium text-gray-700 mb-6 mt-2`}>
          View More
        </Link>
      </View>
    </ThemedView>
  );
}

const Title = () => (
  <ThemedText style={tw`text-center text-[#141B29] text-2xl font-semibold my-4 w-full mb-8 mt-20`}>
    Trade Now and Get {'\n'} Your Life
  </ThemedText>

);

const GradientShadowBox = ({ children }: { children: React.ReactNode }) => (
  <View style={[tw`rounded-3xl mb-10 w-9/11`, styles.shadow]}>
    <LinearGradient
      colors={['#900271', '#00BFB2']}
      start={[0, 0]}
      end={[1, 0]}
      style={tw`rounded-2xl justify-center items-center p-6`}
    >
      {children}
    </LinearGradient>
  </View>
);

const ValueInfo = ({
  value,
  color = 'white',
  fontSize = 'md',
  percentageChange
}: {
  value: string | number,
  color?: string,
  fontSize?: string,
  percentageChange?: number | undefined
}) => {
  const size = fontSize === 'xl' ? 24 : (fontSize === 'lg' ? 18 : 16);

  return percentageChange !== undefined ? (
    <View style={tw`flex-row items-center`}>
      <AntDesign
        name={percentageChange < 0 ? 'down' : 'up'}
        color={percentageChange < 0 ? '#F15950' : '#10DC78'}
        style={tw`mr-2`}
      />
      <ThemedText style={[{ color, fontSize: size }, tw`font-semibold my-1`]}>
        {value}
      </ThemedText>
    </View>
  ) : (
    <ThemedText style={[{ color, fontSize: size }, tw`font-semibold my-1`]}>
      {value}
    </ThemedText>
  );
};

const CoinList = () => (
  <ScrollView style={tw`w-full`}>
    {data.coins.map((coin, index) => (
      index % 2 === 0 ?
        <View key={index} style={tw`flex-row justify-center items-center w-full`}>
          <CoinItem coin={data.coins[index]} />
          {index + 1 < data.coins.length && <CoinItem coin={data.coins[index + 1]} />}
        </View>
        : null
    ))}
  </ScrollView>
);

interface Coin {
  name: string;
  amount: number;
  value: number;
  iconUrl: string;
  changePercentage: number;
}

const CoinItem = ({ coin }: { coin: Coin }) => {
  const getAbbreviation = (name: string): string => {
    const abbreviations: { [key: string]: string } = {
      "Bitcoin": "BTC",
      "Ethereum": "ETH",
      "Litecoin": "LTC",
      "Ada": "ADA"
    };
    return abbreviations[name] || name;
  };
  const isNegative = coin.changePercentage < 0;
  const textColor = isNegative ? '#F15950' : '#10DC78';
  const iconName = isNegative ? 'down' : 'up';

  return (
    <ThemedView style={tw`flex-row items-center p-2 rounded-xl bg-white m-1 max-w-[49.5%]`}>
      <View style={tw`mr-4`}>
        <Image source={{ uri: coin.iconUrl }} style={tw`w-12 h-12 rounded-full mb-4`} />
        <ThemedText style={tw`text-md font-semibold text-[#141B29]`}>${coin.value.toLocaleString()}</ThemedText>
      </View>
      <View style={tw`flex-1`}>
        <ThemedText style={tw`text-lg font-semibold`}>{getAbbreviation(coin.name)}</ThemedText>
        <ThemedText style={tw`text-sm text-gray-700 mb-4`}>{coin.name}</ThemedText>
        <View style={tw`flex-row items-center`}>
          <AntDesign name={iconName} size={14} color={textColor} />
          <ThemedText style={[tw`font-medium text-md ml-2`, { color: textColor }]}>{coin.changePercentage}%</ThemedText>
        </View>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#900271',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 25,
  }
});
