import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { goToDetailsScreen, goToNew } from './Navigation';

function Home() {
    const navigation = useNavigation();

    // Array de dados
    const [data, setData] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ]);

    // Função para adicionar um novo item ao array de dados
    const addNewItem = (newItem) => {
        setData([...data, newItem]);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            {/* Botão para a tela de detalhes */}
            <Button title="Go to Details" onPress={() => goToDetailsScreen(navigation)} />
            {/* Botão para a tela de nova tela */}
            <Button title="Go to New" onPress={() => goToNew(navigation, addNewItem)} />
            {/* Lista de dados */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ marginVertical: 10 }}>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}

export default Home;
