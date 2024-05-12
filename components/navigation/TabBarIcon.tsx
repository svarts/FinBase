import React from 'react';
import { Platform, ViewStyle } from 'react-native';
import { Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

interface TabBarIconProps extends Partial<React.ComponentProps<typeof Entypo> & React.ComponentProps<typeof FontAwesome5> & React.ComponentProps<typeof MaterialIcons>> {
  style?: ViewStyle;
  iconFamily: 'entypo' | 'fontAwesome' | 'material'; 
  focused?: boolean;
}

export function TabBarIcon({ style, iconFamily, ...rest }: TabBarIconProps) {
  const IconComponent = iconFamily === 'entypo' ? Entypo : iconFamily === 'fontAwesome' ? FontAwesome5 : MaterialIcons;
  
  const iconStyle: ViewStyle = {
    ...style,
    alignItems: 'center',  
    ...(Platform.OS === 'ios' && { marginTop: 21 })  
  };

  return <IconComponent size={20} style={iconStyle} {...rest} />;
}
