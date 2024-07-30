import { View, Text, StyleSheet } from 'react-native';

function List({ dataPoint }) {
    return (
        <View style={styles.container}>
            {dataPoint.map((data) => {
                return (
                    <View key={data}>
                        <Text style={styles.text} >{data}</Text>
                    </View>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 16
    },
    text: {
       backgroundColor: '#e2b497',
       margin: 3,
       padding: 4,
       borderRadius: 4,
       borderColor: '#e2b497',
       overflow: 'hidden'
    }
})

export default List;