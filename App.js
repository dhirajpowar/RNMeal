import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

//351401 3f2f25
export default function App() {

  function DrawerComponent() {
    return (
      <Drawer.Navigator 
        screenOptions={{
          headerStyle: { backgroundColor: '#351401'},
          headerTintColor: 'white',
          sceneContainerStyle: { backgroundColor: '#3f2f25'}
        }}
        >
        <Drawer.Screen name="Categories" component={CategoriesScreen} />
        <Drawer.Screen name="Favorite" component={FavoriteScreen} />
      </Drawer.Navigator>
    )
  }
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}
        >
          <Stack.Screen name="Meal Categories" component={DrawerComponent}
            options={{
              headerShown: false
            }}
            />
          <Stack.Screen name="Meal Overview"
            component={MealsOverviewScreen}
          // options={({route, navigation}) => {
          //   const catId = route.params.categoryId

          //   return {title: catId}
          // }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen} 
            options={{
              title: 'About the Meal'
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}