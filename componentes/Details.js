import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; // Importando TouchableOpacity e StyleSheet
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
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.description}</Text>
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
    text: {
        marginBottom: 10,
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
