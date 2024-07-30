import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"

function IconButton({icon, color, onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.stylePressed}>
            <Ionicons name={icon} color={color} size={24}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    stylePressed: {
        opacity: 0.5
    }
})

export default IconButton;