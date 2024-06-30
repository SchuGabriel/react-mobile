import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { goToNew } from './Navigation';
import { removeUser } from '../src/services/authService';

function Home() {
    const navigation = useNavigation();

    const [data, setData] = useState([
        { id: 1, name: 'Leite', description: 'Comprar 2 caixas de leite Santa Clara Integral' },
        { id: 2, name: 'Farinha de trigo', description: 'Comprar 2 unidades de 5 KG da marca "Maria Inês"' },
        { id: 3, name: 'Açúcar', description: 'Comprar de 1 KG da marca União' },
        { id: 4, name: 'Arroz', description: 'Comprar 5 KG de arroz Tio João' },
        { id: 5, name: 'Feijão', description: 'Comprar 2 KG de feijão carioca' },
        { id: 6, name: 'Óleo de Soja', description: 'Comprar 2 garrafas de óleo de soja' },
        { id: 7, name: 'Sal', description: 'Comprar 1 pacote de sal refinado' },
        { id: 8, name: 'Café', description: 'Comprar 500g de café torrado e moído' },
        { id: 9, name: 'Macarrão', description: 'Comprar 3 pacotes de macarrão parafuso' },
        { id: 10, name: 'Sabonete', description: 'Comprar 4 barras de sabonete Lux' },
        { id: 11, name: 'Detergente', description: 'Comprar 2 unidades de detergente Ypê' },
        { id: 12, name: 'Shampoo', description: 'Comprar 1 frasco de shampoo Seda' },
        { id: 13, name: 'Condicionador', description: 'Comprar 1 frasco de condicionador Seda' },
        { id: 14, name: 'Amaciante', description: 'Comprar 1 garrafa de amaciante Downy' },
        { id: 15, name: 'Desodorante', description: 'Comprar 2 frascos de desodorante Rexona' },
        { id: 16, name: 'Papel Higiênico', description: 'Comprar 1 pacote de papel higiênico' },
        { id: 17, name: 'Detergente Líquido', description: 'Comprar 1 frasco de detergente líquido' },
        { id: 18, name: 'Escova de Dentes', description: 'Comprar 4 escovas de dentes Colgate' },
        { id: 19, name: 'Pasta de Dentes', description: 'Comprar 3 pastas de dentes Oral-B' },
        { id: 20, name: 'Biscoitos', description: 'Comprar 2 pacotes de biscoitos recheados' },
        { id: 21, name: 'Queijo', description: 'Comprar 500g de queijo mussarela' },
        { id: 22, name: 'Presunto', description: 'Comprar 500g de presunto' },
        { id: 23, name: 'Tomate', description: 'Comprar 1 KG de tomate' },
        { id: 24, name: 'Cenoura', description: 'Comprar 1 KG de cenoura' },
        { id: 25, name: 'Alface', description: 'Comprar 1 maço de alface' },
    ]);

    const addNewItem = (newItem) => {
        const lastId = data.length > 0 ? data[data.length - 1].id : 0;
        const newId = lastId + 1;
        newItem.id = newId;
        setData([...data, newItem]);
    };

    const navigateToDetails = (item) => {
        navigation.navigate('Details', { item, data });
    };

    const handleLogout = async () => {
        await removeUser();
        navigation.navigate('LoginScreen');
    };

    return (
        <View style={{ flex: 1 }}>
            <Button title="Adicionar Produto" onPress={() => goToNew(navigation, addNewItem)} />
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigateToDetails(item)}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                            <Text>{item.name}</Text>
                            <Text style={{ marginTop: 5, fontStyle: 'italic', color: '#666' }}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
}

export default Home;
