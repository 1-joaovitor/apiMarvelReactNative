

import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/components/pages/Home/index'
import DetailsHeroes from './src/components/pages/DetailsHeroes/index'
import MytabBar from './src/components/TabNavigation/index';
import Toast from 'react-native-toast-message';


const Tab = createBottomTabNavigator()

export default function App() {
 
  return (
  
    <>
   <NavigationContainer>
      <Tab.Navigator  tabBar={props => <MytabBar/>}
       screenOptions={{
        tabBarStyle: { backgroundColor:'#1C1C1C'},
          headerTitle: 'Heroes', 
          
          headerStyle: {
            backgroundColor:'black',
            
          },
         
          headerTintColor: '#d0d0d0',
          headerTitleStyle:{
            fontSize:12
          }
         
         
        }}>
        <Tab.Screen  name="Home" component={Home}/>
        <Tab.Screen name="Details" component={DetailsHeroes} />
      </Tab.Navigator>
      </NavigationContainer>
      <Toast />
 </>
 
  );
}


