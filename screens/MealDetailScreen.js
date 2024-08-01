import { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetailItemScreen from '../components/MealDetailItemScreen';
import Title from '../components/MealDetail/Title';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavoriteContext } from '../store/context/favorite-context';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';


function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId
    console.log("meal id ", mealId);
    const dispatch = useDispatch();

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
   // const favoriteMealContext = useContext(FavoriteContext)
    const favoriteMeals = useSelector((state) => {
        console.log(state.favoriteMeals);
       return state.favoriteMeals.ids
 } );

    //const isMealFavorite = favoriteMealContext.ids.includes(selectedMeal.id)
    console.log("Favorite meals ", favoriteMeals);
    const isMealFavorite = favoriteMeals.includes(mealId)


    function changeFavoriteStatusHandler() {
        console.log("Pressed!", isMealFavorite);
        if(isMealFavorite) {
            //favoriteMealContext.removeFavorite(selectedMeal.id)
            dispatch(removeFavorite({id: mealId}))
        } else {
            //favoriteMealContext.addFavorite(selectedMeal.id)
            console.log("selected meal id is ", selectedMeal.id);
            dispatch(addFavorite({id: mealId}))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                            icon={isMealFavorite ? "star" : 'star-outline'} 
                            color={"white"} 
                            onPress={changeFavoriteStatusHandler}
                            />
            }
        })
    }, [navigation, changeFavoriteStatusHandler])

    return (
        <ScrollView>
            <View >
                <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
                <Text style={styles.title}>{selectedMeal.title}</Text>
                <MealDetailItemScreen
                    duration={selectedMeal.duration}
                    affordability={selectedMeal.affordability}
                    complexity={selectedMeal.complexity}
                    textStyle={styles.text} />
                <Title>Ingredients</Title>
                <List dataPoint={selectedMeal.ingredients} />
                <Title>Steps</Title>
                <List dataPoint={selectedMeal.steps} />
            </View>
        </ScrollView>
    )
}

//e2b497 , 351401

const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 8
    },
    text: {
        color: 'white'
    }
})

export default MealDetailScreen;