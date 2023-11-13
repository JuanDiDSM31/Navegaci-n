import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Chats } from '../screens/Chats';
import { Contacts } from '../screens/Contacts';
import { Album } from '../screens/Album';
// import { LogBox } from 'react-native';

// LogBox.ignoreLogs('Settings')  Estas loineas comentadas son para ignorar los warnins "Colores amarillos "
const Tab = createMaterialTopTabNavigator();

export const TobTab=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Album" component={Album} />
    </Tab.Navigator>
  );
}