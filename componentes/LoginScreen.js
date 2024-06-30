import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { getUser, storeUser } from '../src/services/authService';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const checkUser = async () => {
            const user = await getUser();
            if (user) {
                setEmail(user.email);
                setPassword(user.password);
                navigation.navigate('Home');
            }
        };
        checkUser();
    }, []);

    const handleLogin = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/users?email=${email}&password=${password}`);
            if (response.data.length > 0) {
                const user = response.data[0];
                if (user.password === password) {
                    console.log('User logged in successfully!');
                    setErrorMessage('');
                    await storeUser(email, password);
                    navigation.navigate('Home');
                } else {
                    console.log('Invalid password!');
                    setErrorMessage('Invalid email or password. Please try again.');
                }
            } else {
                console.log('User not found!');
                setErrorMessage('Invalid email or password. Please try again.');
            }
        } catch (error) {
            console.error('API Error:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    error: {
        marginTop: 10,
        color: 'red',
    },
});

export default LoginScreen;
