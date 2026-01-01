import React from 'react';
import { createAppContainer } from 'react-navigation';
import BottomTabs from './src/navigation/BottomTabs';

// Wrap your navigator with createAppContainer
const AppContainer = createAppContainer(BottomTabs);

export default function App() {
  // DO NOT pass a navigation prop here
  return <AppContainer />;
}
