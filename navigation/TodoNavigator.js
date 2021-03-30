import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import TodoContainer from '../screens/TodoContainer'
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';


const Tab = createBottomTabNavigator();

const TodoNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName=""
            initialParams = {({route}) =>({data:route.params.data})}
            tabBarOptions={{
                activeTintColor: 'tomato',
            }}
            
        >
            <Tab.Screen
                name="All"
                component={TodoContainer}
                initialParams = {({route}) =>({data:route.params.data})}
                options={{
                    tabBarLabel: 'All',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="format-list-bulleted" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Active"
                component={TodoContainer}
                initialParams = {({route}) =>({data:route.params.data})}
                options={{
                    tabBarLabel: 'Active',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="filter-center-focus" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Completed"
                component={TodoContainer}
                initialParams = {({route}) =>({data:route.params.data})}
                options={{
                    tabBarLabel: 'Completed',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="playlist-add-check" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>

    )
}

export default TodoNavigator;