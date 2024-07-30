import { View, Text, StyleSheet } from 'react-native';

function MealDetailItemScreen({duration, affordability, complexity, textStyle}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, textStyle]}>{duration}m</Text>
            <Text style={[styles.text, textStyle]}>{affordability.toUpperCase()}</Text>
            <Text style={[styles.text, textStyle]}>{complexity.toUpperCase()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        marginHorizontal: 20,
        padding: 16
    }
})

export default MealDetailItemScreen;