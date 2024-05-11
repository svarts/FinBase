import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.tint,
        tabBarInactiveTintColor: '#B3B4B8',
        headerShown: false,
        tabBarLabel: () => null,
        tabBarStyle: {
          backgroundColor: 'white',
          marginBottom: 15,
          borderRadius: 150,
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 30,
          shadowColor: 'gray',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='home' color={color} iconFamily="entypo" size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-coins"
        options={{
          title: 'My Coins',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='pie-chart' color={color} iconFamily="entypo" />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='search' color={color} iconFamily="material" size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name='wallet'
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='credit-card' color={color} iconFamily="fontAwesome" />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='user' color={color} iconFamily='fontAwesome' />
          ),
        }}
      />
    </Tabs>
  );
}
