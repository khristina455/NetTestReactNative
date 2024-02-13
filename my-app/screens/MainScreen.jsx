import { ScrollView, StyleSheet, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { axiosInstance } from '../api';
import {setSearchValue} from '../store/filterSlice'
import { setModelings } from '../store/modelingSlice';
import Card from '../components/Card';
import Breadcrumbs from '../components/Breadcrumbs';

export default function MainScreen({ navigation }) {
    const dispatch = useDispatch();
    const { modelings } = useSelector((state) => state.modeling);
    const { lowPrice, highPrice, searchValue } = useSelector((state) => state.filter);

    useEffect(() => {
        async function getAllModelings() {
            console.log(11111111)
            await axiosInstance.get(`/modelings?query=${searchValue}&from=${lowPrice}&to=${highPrice}`).then((response) =>  dispatch(setModelings(response?.data)))}
        getAllModelings();
    }, [dispatch, searchValue]);

    const onTextChange = (text) => {
        dispatch(setSearchValue(text));
        console.log(searchValue)
    };

    return (
        <ScrollView>
            <View style={styles.page}>
                <Breadcrumbs pages={[]} navigation={navigation}/>
                <TextInput
                    style={styles.input}
                    onChangeText={onTextChange}
                    value={searchValue}
                />
                {!!modelings &&
                    modelings.map((modeling) => <Card key={modeling.modelingId} {...modeling} navigation={navigation} />)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2a2a2a',
    },
    input: {
        height: 40,
        margin: 8,
        width: 320,
        padding: 10,
        color: 'white',
        borderWidth: 1,
        backgroundColor: '#303030',
        borderRadius: 8,
        borderWidth: 0, 
    }
});
