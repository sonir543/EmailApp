import React, { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../services/api';
import { useUser } from '../context/UserContext'; // Import useUser

const Login = () => {
    const navigation = useNavigation();
    const { setUser } = useUser(); // Get setUser function from context
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        // Add validation for email and password
        if (!email || !password) {
            setError('Email and password are required.');
            return; // Exit the function if validation fails
        }

        try {
            const userData = await loginUser(email, password);
            console.log("user::::", userData);
            setUser(userData); // Set user data in context
            navigation.navigate('Dashboard', { user: userData });
        } catch (error) {
            console.log("error:::", error);
            setError('Login failed: ' + error.response.data.error);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Email:</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
            />
            <Text>Password:</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
            />
            <Button title="Login" onPress={handleLogin} />
            {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        </View>
    );
};

export default Login;
