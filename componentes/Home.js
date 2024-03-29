import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { goToDetailsScreen, goToNew } from './Navigation';

function Home() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => goToDetailsScreen(navigation)} />
            <Button title="Go to New" onPress={() => goToNew(navigation)} />
        </View>
    );
}

export default Home;
