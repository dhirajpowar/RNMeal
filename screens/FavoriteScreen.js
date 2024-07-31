import { View, Text, StyleSheet} from 'react-native';
import MealList from '../components/MealList/MealList';
import { useContext } from 'react';
import { MEALS } from '../data/dummy-data';
import { FavoriteContext } from '../store/context/favorite-context';

function FavoriteScreen() {
    const favoriteContext = useContext(FavoriteContext);

    const favoriteMeals = MEALS.filter(meal => favoriteContext.ids.includes(meal.id))
    console.log("favorite screen ", favoriteMeals);

    if(favoriteMeals.length == 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No favorite meal</Text>
            </View>
        )
    }
    return (
        <MealList displayedMeals={favoriteMeals} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default FavoriteScreen;