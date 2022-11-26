import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, MaterialCommunityIcons, Entypo, Feather, Fontisto } from '@expo/vector-icons';

const { Screen, Navigator } = createBottomTabNavigator();


import { Home } from '../screens/Home';
import { Games } from '../screens/Games';
import { Search } from '../screens/Search';
import { RisadasRapidas } from '../screens/RisadasRapidas';
import { Downloads } from '../screens/Downloads';
import { THEME } from '../theme';
import { SelectionProfile } from '../screens/SelectionProfile';
import { LoginScreen } from '../screens/LoginScreen';

export function TabRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: THEME.COLORS.WHITE,
                tabBarInactiveTintColor: THEME.COLORS.GREY_400,
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: THEME.COLORS.GREY_700,
                }
            }}
        >
            <Screen
                name='HomeStack'
                component={SelectionProfile}
                options={{
                    tabBarStyle: { display: "none" },
                    tabBarButton: () => null,
                }}
            />
            <Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons
                            name='home-outline'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen
                name='Games'
                component={Games}
                options={{
                    tabBarLabel: 'Games',
                    tabBarIcon: ({ size, color }) => (
                        <Entypo
                            name='game-controller'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen
                name='Risadas Rápidas'
                component={RisadasRapidas}
                options={{
                    tabBarLabel: 'Risadas Rápidas',
                    tabBarIcon: ({ size, color }) => (
                        <Fontisto
                            name='laughing'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen
                name='Search'
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ size, color }) => (
                        <Feather
                            name='search'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen
                name='Downloads'
                component={Downloads}
                options={{
                    tabBarLabel: 'Downloads',
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name='download-circle-outline'
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Navigator>

    )
}