import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1} from '../screens/Tab1';
import {Tab2} from '../screens/Tab2';
import {Tab3} from '../screens/Tab3';
import {StackNavigator} from './StackNavigator';
import {colores} from '../theme/AppTheme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        activeTintColor: colores.primario,
        style: {
          borderTopColor: colores.primario,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      screenOptions={({route})=>({
        tabBarIcon:({color,focused, size})=>{
           let iconName: string='';
           switch(route.name){
           case 'Tab1': iconName:'T1'
           break;
           case 'Tab2': iconName:'T2'
           break;
           case 'StackNavigator': iconName:'STk'
            break;
          
          }
          return( 
            <Text>{iconName}</Text>
          )
        }
      })}
      >
      <Tab.Screen name="Tab1" options={{title: 'Tab 1'}} component={Tab1} />
      <Tab.Screen name="Tab2" options={{title: 'Tab 2'}} component={Tab2} />
      {/* <Tab.Screen name="Tab3" component={Tab3} /> */}
      <Tab.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
