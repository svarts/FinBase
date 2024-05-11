import { View, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  color?: string;  
};

export function ThemedView({ style, color, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: color }, 'background');  

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
