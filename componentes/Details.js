import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function Details() {
    const navigation = useNavigation();
    const route = useRoute();

    // Extrai o item passado como parâmetro de navegação
    const { item, data } = route.params;

    // Função para excluir o item
    const deleteItem = () => {
        let pos = null;
        for (let i = 0; i < data.length; i++) {
            if (item.name === data[i].name) {
                pos = i;
                break;
            }
        }
        if (pos !== null) {
            data.splice(pos, 1);
        }
        navigation.goBack();
        return data;
    };

    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.value}>{item.name}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.label}>Observação:</Text>
                <Text style={styles.value}>{item.description}</Text>
            </View>
            <TouchableOpacity onPress={deleteItem} style={styles.button}>
                <Text style={styles.buttonText}>Delete Item</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainer: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 10,
        width: '80%',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    value: {
        fontSize: 16,
    },
    button: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Details;
