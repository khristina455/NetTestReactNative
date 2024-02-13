import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { setModeling } from "../store/modelingSlice";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { axiosInstance } from "../api";

export default function ModelingScreen({ route, navigation }) {
  const handlePressModelings = () => {
    navigation.navigate("Список услуг");
  };

  const { id } = route.params;
  const dispatch = useDispatch();
  const { modeling } = useSelector((state) => state.modeling);
  useEffect(() => {
    async function getModelingById() {
      console.log(id);
      await axiosInstance
        .get(`/modelings/${id}`)
        .then((response) => {
          dispatch(setModeling(response?.data));
          console.log(modeling);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getModelingById();
    // return () => {
    //     dispatch(resetThreat());
    // };
  }, [dispatch]);

  const newHost = "192.168.102.64";

  return (
    <ScrollView>
      <View style={styles.page}>
        <View>
          <Text style={styles.breadcrumb} onPress={handlePressModelings}>
            Список услуг
          </Text>
          <Text style={styles.textGreen} onPress={handlePressModelings}>
            {" / " + modeling.name}
          </Text>
        </View>
        {modeling != null && modeling.name != "" && modeling.image != undefined && (
          <View style={{ margin: 15 }}>
            <View>
              <Image
                style={styles.image}
                source={{
                  uri: `${modeling.image.replace("localhost", newHost)}`,
                }}
              />
              <View>
                <Text style={styles.textTitle}>{modeling.name}</Text>
                <Text style={styles.text}> {modeling.description}</Text>
                <Text style={styles.text}>
                    {modeling.price} руб
                  </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2a2a2a",
  },
  text: { color: "#f0f0f0", fontSize: 16 },
  textGreen: { color: "#00A88E" },
  textTitle: {
    color: "#f0f0f0",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  breadcrumb: { color: "#f0f0f0", fontSize: 16 },
  image: { height: 320, alignSelf: "stretch" },
});
