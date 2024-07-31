import { View, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealList/MealItem';
import { useLayoutEffect } from 'react';
import MealList from '../components/MealList/MealList';


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

    return <MealList displayedMeals={displayedMeals} />

   
}

export default MealsOverviewScreen;