import { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetailItemScreen from '../components/MealDetailItemScreen';
import Title from '../components/MealDetail/Title';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavoriteContext } from '../store/context/favorite-context';


function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    const favoriteMealContext = useContext(FavoriteContext)

    const isMealFavorite = favoriteMealContext.ids.includes(selectedMeal.id)


    function changeFavoriteStatusHandler() {
        console.log("Pressed!");
        if(isMealFavorite) {
            favoriteMealContext.removeFavorite(selectedMeal.id)
        } else {
            favoriteMealContext.addFavorite(selectedMeal.id)
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