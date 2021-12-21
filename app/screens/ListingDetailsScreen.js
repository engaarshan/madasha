import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import AppListItem from '../components/AppListItem';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/qamadi.jpg")}></Image>
            <View style={styles.detailsContainer}>
                <AppText>Qamadi raqiis ah</AppText>
                <AppText>$45</AppText>
                <View style={styles.userContainer}>
                    <AppListItem 
                        image={require("../assets/aarshan.png")}
                        title="Abdalla AARshan"
                        subTitle="5 Listings" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    userContainer:{
        marginVertical: 40

    },
    image:{
        width: '100%',
        height: 300,

    },
    detailsContainer: {
        padding: 20,
    },
    subTitle:{
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,

    },
    title:{
        fontSize: 24,
        fontWeight: '500',
    },
})

export default ListingDetailsScreen;