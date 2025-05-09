import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home/Home.tsx';
import CartScreen from '../../screens/cart/CartScreen.tsx';
import CategoryScreen from '../../screens/category/Category.tsx';
import Profile from '../../screens/profile/Profile.tsx';
import * as ROUTES from './routes.ts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
export default function NavigationMain() {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        tabBarActiveTintColor: 'rgb(12,255,0)',
        tabBarInactiveTintColor: '#afc5ac',
        tabBarStyle: {
          height: 60,
          paddingVertical: 10,
        },
      }}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarLabelStyle:{
            fontSize: 14,
          },
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="home-circle" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.CATEGORY}
        component={CategoryScreen}
        options={{
          tabBarLabelStyle:{
            fontSize: 14,
          },
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="home-circle" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.CART}
        component={CartScreen}
        options={{
          tabBarLabelStyle:{
            fontSize: 14,
          },
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="home-circle" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          tabBarLabelStyle:{
            fontSize: 14,
          },
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="home-circle" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
