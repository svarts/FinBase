import React from 'react';
import { Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { ViewStyle } from 'react-native';

interface TabBarIconProps extends Partial<React.ComponentProps<typeof Entypo> & React.ComponentProps<typeof FontAwesome5> & React.ComponentProps<typeof MaterialIcons>> {
  style?: ViewStyle;
  iconFamily: 'entypo' | 'fontAwesome' | 'material'; 
  focused?: boolean;
}

export function TabBarIcon({ style, iconFamily, ...rest }: TabBarIconProps) {
  const IconComponent = iconFamily === 'entypo' ? Entypo : iconFamily === 'fontAwesome' ? FontAwesome5 : MaterialIcons;
  
  return <IconComponent size={20} style={[{ marginTop: 21 }, style]} {...rest} />;
}