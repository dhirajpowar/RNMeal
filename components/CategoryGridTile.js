import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';

function CategoryGridTile({ item, color, onPress }) {
    return (
        <View style={styles.itemContainer}>
            <Pressable android_ripple={{ color: "#CCC" }}
                style={({ pressed }) =>
                    pressed ? 
                [styles.button, styles.buttonOpacity] 
                : styles.button}
                onPress={onPress}

            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.text}>{item}</Text>
                </View>

            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        margin: 16,
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    button: {
        flex: 1,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    buttonOpacity: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default CategoryGridTile;