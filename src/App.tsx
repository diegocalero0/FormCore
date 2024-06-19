import { View, Text } from "react-native"
import { Providers } from "./redux/providers"
import { FormScreen } from "./features/form/presentation/FormScreen"

function App(): React.JSX.Element {
  return (
    <Providers>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bienvenido</Text>
        <FormScreen/>
      </View>
    </Providers>

  )
}

export default App