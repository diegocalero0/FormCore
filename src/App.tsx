import { StatusBar, useColorScheme } from "react-native"
import { Providers } from "./redux/providers"
import { FormScreen } from "./features/form/presentation/FormScreen"
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { ConfirmScreen } from "./features/confirm/presentation/ConfirmScreen";
import { FinishScreen } from "./features/finish/presentation/FinishScreen";

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#003670',
    background: 'white',
    card: 'white',
    border: '#003670',
  },
};

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#003670',
    background: 'rgb(60, 60, 60)',
    text: "white",
    card: 'rgb(40, 40, 40)',
    border: 'white'
  },
};

export type RootStackParamList = {
  Form: undefined;
  Confirm: undefined,
  Finish: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {

  const scheme = useColorScheme();

  return (
    <Providers>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <StatusBar backgroundColor="#003670"/>
        <Stack.Navigator
          initialRouteName="Form" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Form" component={FormScreen}/>
          <Stack.Screen name="Confirm" component={ConfirmScreen}/>
          <Stack.Screen name="Finish" component={FinishScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>

  )
}

export default App