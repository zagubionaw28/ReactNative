import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
// export default function App() {
//   return (
//     <NavigationContainer>
//       <TailwindProvider>
//           <View style={StyleSheet.container}>
//             <Text className="">Hi</Text>
//             <StatusBar style="auto" />
//           </View>
//         </TailwindProvider>
//       </NavigationContainer>
//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666699',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#006666',
  },
});
