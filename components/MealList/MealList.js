import { View, Text, StyleSheet, FlatList} from 'react-native';
import MealItem from './MealItem';

function MealList({displayedMeals}) {
    function renderMealItem(itemData) {
        return <MealItem
            id={itemData.item.id}
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            affordability={itemData.item.affordability.toUpperCase()}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity.toUpperCase()} />
    }

    return (
        <View>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealList;