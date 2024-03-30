import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { goToDetailsScreen, goToNew } from './Navigation';

function Home() {
    const navigation = useNavigation();

    // Array de dados
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
    

    // Função para adicionar um novo item ao array de dados
    const addNewItem = (newItem) => {
        // Verifica o último id na lista de dados
        const lastId = data.length > 0 ? data[data.length - 1].id : 0;
        // Calcula o novo id incrementando o último id
        const newId = lastId + 1;
        // Atualiza o id do novo item
        newItem.id = newId;
        // Adiciona o novo item à lista de dados
        setData([...data, newItem]);
    };

    // Função para tratar a adição de um novo item recebido do componente New
    const handleNewItemAdded = (newItem) => {
        addNewItem(newItem);
    };

    // Função para navegar para a tela de detalhes
    const navigateToDetails = (item) => {
        // Navega para a tela de detalhes, passando o item como parâmetro
        navigation.navigate('Details', { item, data });
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Adicionar Produto" onPress={() => goToNew(navigation, addNewItem)} />
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigateToDetails(item)}>
                        <View style={{ marginVertical: 10 }}>
                            <Text>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default Home;