import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { SelectionProfile } from '../screens/SelectionProfile';
import { Home } from '../screens/Home';

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name='SelectionProfile'
                component={SelectionProfile}
            />
            <Screen
                name='Home'
                component={Home}
            />
        </Navigator>

    )
}