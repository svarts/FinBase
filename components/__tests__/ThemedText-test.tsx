import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '@/app/(tabs)/index';
import '@/components/ThemedText';
import '@/components/ThemedView';

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<HomeScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
