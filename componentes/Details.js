import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function Details() {
    const navigation = useNavigation();
    const route = useRoute();

    // Extrai o item passado como parâmetro de navegação
    const { item, data } = route.params;

    console.log(item)
    console.log(data)

    // Função para excluir o item
    const deleteItem = () => {
        data.splice(item.id-1, 1)
        navigation.goBack();
        return data;
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Button title="Delete Item" onPress={deleteItem} />
        </View>
    );
}

export default Details;
