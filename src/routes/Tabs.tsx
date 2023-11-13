import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1} from '../screens/Tab1';
import {Tab2} from '../screens/Tab2';
import {Tab3} from '../screens/Tab3';
import {StackNavigator} from './StackNavigator';
import {colores} from '../theme/AppTheme';
import {Text, Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { TobTab } from './TobTab';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabAndroid />;
};
// android
 const BotonAndroid = createMaterialBottomTabNavigator();
 const TabAndroid = () => {
   return (
   <BotonAndroid.Navigator
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
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1':
              iconName = 'T1';
              break;
            case 'Tab2':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'STk';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
   
 <BotonAndroid.Screen name="Tab1" options={{title: 'Tab 1'}} component={Tab1} />
       <BotonAndroid.Screen name="Tab2" options={{title: 'Tab 2'}} component={Tab2} />
       {/* <Tab.Screen name="Tab3" component={Tab3} /> */}
       <BotonAndroid.Screen
         name="StackNavigator"
         options={{title: 'Stack'}}
         component={StackNavigator}
       />
   </BotonAndroid.Navigator>)
 };
// fin de android

// IOS
const TabIos = createBottomTabNavigator();
export const TabsIOS = () => {
  return (
    <TabIos.Navigator
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
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1':
              iconName = 'T1';
              break;
            case 'TobTab':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'STk';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <TabIos.Screen name="Tab1" options={{title: 'Tab 1'}} component={Tab1} />
      <TabIos.Screen name="TobTab" options={{title: 'Tab 2'}} component={TobTab} />
      {/* <Tab.Screen name="Tab3" component={Tab3} /> */}
      <TabIos.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </TabIos.Navigator>
  );
};

// Fin de ios
