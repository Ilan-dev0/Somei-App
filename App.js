import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './screens/SignUp';
import BreakLogin from './screens/BreakLogin';
import Home from './screens/Home';
import SelectProduct from './screens/SelectProduct';
import SelectExit from './screens/NewFlow/SelectExit';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="BreakLogin">
        <Stack.Screen
          name="BreakLogin"
          component={BreakLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
               <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="SelectProduct"
          component={SelectProduct}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectExit"
          component={SelectExit}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
