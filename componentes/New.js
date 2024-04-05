import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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

        const onNewItemAdded = route.params?.addNewItem;

        if (onNewItemAdded) {
            onNewItemAdded(newItem);
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicionar Novo Item</Text>
            <TextInput
                placeholder="Nome do Item"
                value={itemName}
                onChangeText={setItemName}
                style={styles.input}
            />
            <TextInput
                placeholder="Descrição do Item"
                value={itemDescr}
                onChangeText={setItemDescr}
                style={styles.input}
            />
            <View style={styles.buttonContainer}>
                <Button title="Adicionar Item" onPress={handleAddItem}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginVertical: 5,
        width: '80%',
    },
    buttonContainer: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
});

export default New;