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
const data = {
    features:["SSL Certification",
            "Admin Panel",
            "Dynamic Website",
            "Data Statistics",
            "Data Analytics",
            "Responsive Pages",
            "Mobile Compatible"
        ]
};

const FeaturesContainer = () => {
    let shortid = require('shortid');
    let fets = new Array();
    for (let i in data.features){
        fets.push(<Text style={styles.boldLabel} key={shortid.generate()}>{'\u2022'} {data.features[i]}</Text>)
    }

    return (<View style={styles.featuresContainer}>
        <View style={styles.featuresLabelContainer}>
            <Text style={styles.featuresLabel}>
                Features
            </Text>
        </View>
        <View style={styles.featuresTextContainer}>
            {fets}
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
        margin:8,
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
