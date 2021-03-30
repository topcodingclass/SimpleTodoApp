import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TodoNavigator from './navigation/TodoNavigator';

const App=()=> {
  return (
    <NavigationContainer>
      <TodoNavigator />
    </NavigationContainer>
  );
}

export default App;
