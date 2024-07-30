import { View, Text, StyleSheet } from 'react-native';

function Title({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       borderBottomColor: '#e2b497',
       borderWidth: 1,
       padding: 6,
       alignItems: 'center',
       marginHorizontal: 16
    },
    text: {
      color: '#e2b497',
      fontSize: 18,
      fontWeight: 'bold'

    }
})

export default Title;