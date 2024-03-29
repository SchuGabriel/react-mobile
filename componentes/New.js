import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function New({ addNewItem, navigation }) {
    const [itemName, setItemName] = useState('');

    const handleAddItem = () => {
        // Verifica se o nome do item não está vazio
        if (itemName.trim() === '') {
            return;
        }

        // Cria um novo item com um ID único
        const newItem = {
            id: new Date().getTime(),
            name: itemName,
        };
        console.log(newItem)
        // Chama a função para adicionar o novo item ao array de dados na tela Home
        addNewItem(newItem);

        // Navega de volta para a tela anterior (Home)
        navigation.goBack();
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Adicionar Novo Item</Text>
            <TextInput
                placeholder="Nome do Item"
                value={itemName}
                onChangeText={setItemName}
                style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10, width: 200 }}
            />
            <Button title="Adicionar Item" onPress={handleAddItem} />
        </View>
    );
}

export default New;
