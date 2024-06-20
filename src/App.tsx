import { View, Text, StatusBar } from "react-native"
import { Providers } from "./redux/providers"
import { FormScreen } from "./features/form/presentation/FormScreen"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { CONFIRM_SCREEN, FORM_SCREEN } from "./constants/ScreenContants";
import { ConfirmScreen } from "./features/confirm/presentation/ConfirmScreen";

export type RootStackParamList = {
  Form: undefined;
  Confirm: undefined,
  Error: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <Providers>
      <StatusBar backgroundColor="#003670"/>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Form" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Form" component={FormScreen}/>
          <Stack.Screen name="Confirm" component={ConfirmScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>

  )
}

export default App