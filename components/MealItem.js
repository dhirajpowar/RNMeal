import { View, Text, Image, StyleSheet, Pressable, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MealDetailItemScreen from './MealDetailItemScreen';


function MealItem({id, title, imageUrl, duration, affordability, complexity}){

    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate("MealDetail", {
            mealId: id
        })
    }
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:'#ccc'}} 
                style={({pressed}) => 
                    pressed ? styles.buttonPressed : null
                }
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
               <MealDetailItemScreen 
                    duration={duration}
                    affordability={affordability}
                    complexity={complexity}
               />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    innerContainer: {
        overflow: 'hidden',
        borderRadius: 8
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 4
    },

    buttonPressed: {
        opacity: 0.5
    }
    
})

export default MealItem;