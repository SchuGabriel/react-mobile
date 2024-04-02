import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function New({ route, navigation }) {
    const [itemName, setItemName] = useState('');
    const [itemDescr, setItemDescr] = useState('');

    const handleAddItem = () => {
        if (itemName.trim() === '') {
            return;
        }

        const newItem = {
            id: new Date().getTime(),
            name: itemName,
            description: itemDescr,
        };

        // Verifica se a função onNewItemAdded foi passada como parâmetro via route
        const onNewItemAdded = route.params?.addNewItem;

        if (onNewItemAdded) {
            // Chama a função para adicionar o novo item
            onNewItemAdded(newItem);
        }

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
            <TextInput
                placeholder="Descrição do Item"
                value={itemDescr}
                onChangeText={setItemDescr}
                style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10, width: 200 }}
            />
            <Button title="Adicionar Item" onPress={handleAddItem} />
        </View>
    );
}

export default New;
