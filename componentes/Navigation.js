import { useNavigation } from '@react-navigation/native';

export function goToDetailsScreen(navigation) {
    navigation.navigate('Details');
}

export function goToNew(navigation, addNewItem) {
    navigation.navigate('New', { addNewItem });
}
