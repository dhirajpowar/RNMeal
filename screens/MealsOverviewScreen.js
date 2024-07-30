import { View, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';


function MealsOverviewScreen({route, navigation}) {
    const id = route.params.categoryId;

    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find((category) => category.id === id).title

        navigation.setOptions({title: catTitle})
    }, [id, navigation])


    const displayedMeals = MEALS.filter((mealItem) => {
        //console.log(mealItem.categoryIds.indexOf(id));
        return mealItem.categoryIds.indexOf(id) >=0;
    })

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

export default MealsOverviewScreen;