
import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image ,Platform ,TouchableOpacity ,Button,TextInput } from 'react-native';
import {withFormik} from 'formik';
import MyReactNativeForm from './loginForm.js';
import CheckBox from 'react-native-checkbox';
import Yup from 'yup';

const ViewLogin = () => {
    return (
      <View style= { styles.mainContainer } >
        <HeaderContainer/>
        <InfoSectionContainer/>
      </View>
    );
}
const HeaderContainer = () => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Client Login</Text>
        </View>
    );
}
const InfoSectionContainer = () => {
    return (
        <View style={styles.infoSectionContainer}>
            <LoginContainer/>
            <KhaliSpace/>
        </View>
    );
}

//HERE IS FORMIK WITH YUP

//ABOVE IS FORMIX WITH YUP

const LoginContainer   = () => {
  return (
      <View style={styles.loginContainer}>
        <ImageContainer/>
        <MyReactNativeForm/>
      </View>
  );
}
const KhaliSpace = () => {
  return (
    <View style={styles.khaliSpace}>

    </View>
  );
}
const ImageContainer = () => {
    const ima = require('../images/account.png');
  return (
    <View style={styles.imageContainer}>
        <Image
          source={ima}
          />
    </View>
  );
}



const styles = StyleSheet.create({

    mainContainer: {
      flex: 1,
      marginTop:(Platform.OS=='ios'?20:0),
      backgroundColor: '#37C1A0'
    },
    headerContainer:{
      flex:1,
      backgroundColor: '#FE616A',
      alignItems:'center',
      justifyContent:'center',
    },
    headerText:{
      fontWeight:'300',
      fontSize:20,
      color:'white'
    },
    infoSectionContainer:{
      flex:9,
      backgroundColor:'#F7F0D7'
    },
    loginContainer:{
      flex:2,
    //   backgroundColor:'#383535',
      margin:4
    },
    khaliSpace:{
      flex:1,
    //   backgroundColor:'#383535',
      margin:4
    },
    imageContainer:{
      flex:1,
      margin:4,
    //   backgroundColor:'#767F58',
      alignItems:'center',
      justifyContent:'center'
    }
});

export default ViewLogin;
