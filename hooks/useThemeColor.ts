import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

export function useThemeColor(
  props: { light?: string },  
  colorName: keyof typeof Colors
) {
  const theme = useColorScheme() ?? 'light';
  
  const colorFromProps = theme === 'light' || !props.light ? props.light : Colors[colorName];

  return colorFromProps || Colors[colorName];  
}