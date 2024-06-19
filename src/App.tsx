import { View, Text, StatusBar } from "react-native"
import { Providers } from "./redux/providers"
import { FormScreen } from "./features/form/presentation/FormScreen"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { FORM_SCREEN } from "./constants/ScreenContants";

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <Providers>
      <StatusBar backgroundColor="#003670"/>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={FORM_SCREEN}>
          <Stack.Screen name={FORM_SCREEN} component={FormScreen} options={{
            headerShown: false
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>

  )
}

export default App