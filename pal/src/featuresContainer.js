import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native';

const FeaturesContainer = () => {
    return (<View style={styles.featuresContainer}>
        <View style={styles.featuresLabelContainer}>
            <Text style={styles.featuresLabel}>
                Features
            </Text>
        </View>
        <View style={styles.featuresTextContainer}>
            <Text style={styles.boldLabel}>{'\u2022'} SSL Certification</Text>
            <Text style={styles.boldLabel}>{'\u2022'} Admin Panel</Text>
            <Text style={styles.boldLabel}>{'\u2022'} Dynamic Website</Text>
            <Text style={styles.boldLabel}>{'\u2022'} Data Statistics</Text>
            <Text style={styles.boldLabel}>{'\u2022'} Data Analytics</Text>
            <Text style={styles.boldLabel}>{'\u2022'} Responsive Pages</Text>
            <Text style={styles.boldLabel}>{'\u2022'} Mobile Compatible</Text>
        </View>
    </View>);
}


const styles = StyleSheet.create({
    featuresContainer:{
         flex:1,
        backgroundColor:'#ffffff',
        // margin:4,
        minHeight:50,
        borderWidth:1,
        marginBottom:4,
        marginTop:4,
        paddingBottom:4


    },
    featuresLabelContainer:{
        // backgroundColor:'#ADADAD',
alignItems:'baseline',
paddingLeft:10
// margin:4
    },
    featuresLabel:{
        fontWeight:'bold',
        fontSize:25,
        color:'#000000',
        lineHeight:40
    },
    featuresTextContainer:{
        // minHeight:50,
        // backgroundColor:'#ADADAD',
        // justifyContent:'center'
    },
    boldLabel:{
        flex:1,
        fontWeight:'bold',
        color:'#5D5959',
        paddingLeft:10,
        lineHeight:27,
        fontSize:17,

        // alignSelf:'baseline'
        // justifyContent:'center'

    },
});

export default FeaturesContainer;
