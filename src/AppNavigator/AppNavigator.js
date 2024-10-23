import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { UserProvider } from '../context/UserContext';
import Login from '../components/Login';// Import UserProvider
import Dashboard from '../components/Dashboard';

const Stack = createStackNavigator();

const App = () => {
    return (
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
};

export default App;
