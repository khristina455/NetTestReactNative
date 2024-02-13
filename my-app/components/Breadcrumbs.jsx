import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Breadcrumbs({ navigation, pages }) {
  const handlePressModelings = () => {
    navigation.navigate("Список услуг");
  };

  return (
    <View>
      <View>
        <Text style={styles.breadcrumb} onPress={handlePressModelings}>
          Список услуг
        </Text>
        {pages &&
          pages.map((page) => (
            <Text style={styles.breadcrumb} onPress={handlePressModelings}>
              {" / " + page.title}
            </Text>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  breadcrumb: { color: "#f0f0f0", fontSize: 16 },
});
