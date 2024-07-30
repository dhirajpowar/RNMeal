import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, View } from "react-native";
import MealsOverviewScreen from "./MealsOverviewScreen";

function CategoriesScreen({navigation}) {

    function renderCategoryGridTile(itemData) {
        
        function onPressHandler() {
            navigation.navigate("Meal Overview", {
                categoryId: itemData.item.id
            });
        }

        return (
            <CategoryGridTile
                item={itemData.item.title}
                color={itemData.item.color} 
                onPress={onPressHandler}
                />
        )
    }

    return (
        <View>
            <FlatList 
                data={CATEGORIES}
                keyExtractor={item => item.id}
                renderItem={renderCategoryGridTile}
                numColumns={2}
            />
        </View>
    );
}

export default CategoriesScreen;