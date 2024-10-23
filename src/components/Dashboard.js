import React from 'react';
import { View, Text, Button } from 'react-native';
import { useUser } from '../context/UserContext';

const Dashboard = ({ navigation }) => {
    const { user, setUser } = useUser();

    const handleLogout = () => {
        setUser(null); // Clear user data
        navigation.navigate('Login'); // Navigate to Login screen
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Email: {user?.email}</Text>
            <Text>Total Emails: {user?.emailCount}</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

export default Dashboard;
