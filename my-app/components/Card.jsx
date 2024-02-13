import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React from 'react';

export default function Card({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Услуга', { id: props.modelingId });
    };

    const newHost = "192.168.102.64";

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: `${props.image.replace("localhost", newHost)}` }}
// resizeMode='contain'
            />
            <View style={styles.container}>
                <Text style={styles.textGreen}>{props.name}</Text>
                <View style={styles.row}>
                    <Text style={styles.text}>{props.description}</Text>
                    <Text style={styles.text}>{props.price} р.</Text>
                </View>
            </View>
            <Button title='Подробнее' onPress={handlePress} color='#00A88E'/>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 320,
        backgroundColor: '#303030',
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    image: { height: 320, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'column' },
    text: { color: '#f0f0f0', fontSize: 16 },
    textGreen: {color : '#00A88E', fontSize: 18 , marginBottom: 5},
});
