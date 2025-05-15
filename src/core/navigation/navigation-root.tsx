import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationMain from './navigation-main.tsx';
import * as ROUTES from './routes.ts';

const Stack = createNativeStackNavigator();
export default function NavigationRoot() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.NAVIGATION_MAIN} component={NavigationMain} />
    </Stack.Navigator>
  );
}
