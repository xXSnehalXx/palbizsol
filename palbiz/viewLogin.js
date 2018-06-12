//@flow

import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image ,Platform ,TouchableOpacity ,Button,TextInput } from 'react-native';
import {withFormik} from 'formik';
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

const formikEnhancer = withFormik({
    // validationSchema: Yup.object().shape({
    //   username: Yup.string()
    //     .min(2)
    //     .required("First name is required."),
    //   password: Yup.string()
    //     .min(8,"Minimum 8 characters")
    //     .required("Last name is required."),
    //   rememberMe: Yup.bool()
    // }),
    mapPropsToValues: ({user}) => ({
        ...user
      }),
    validate:values=>{
        const errors={};
        if (!values.username) {
            errors.username = 'Username Required';
          }
       else if (!values.password) {
        errors.password = 'Password Required';
        }

        if(!/^[0-9_%.+-]/.test(values.username)){
            errors.username="Invalid Username";
        }
        return errors;
    },
    handleSubmit:(errors)=>{
        alert(errors.username);
    }
});

const LoginBox = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue
  }) => (
    <View style={styles.loginBox}>
        <View style={styles.inputBox}>
            <TextInput
                placeholder="Enter username"
                underlineColorAndroid='rgba(0,0,0,0)'
                style={styles.txtInp}
                onChangeText={text =>setFieldValue('username', text)}
                value={values.username}
            />
        </View>
        {/*Enter a 'email not touched show error' */}
        <View style={styles.inputBox}>
            <TextInput
            placeholder="Enter password"
            underlineColorAndroid='rgba(0,0,0,0)'
            style={styles.txtInp}
            onChangeText={text =>setFieldValue('password', text)}
            value={values.password}
            />
        </View>
        <CheckBox
            label='Remember me'
            checked={values.rememberMe}
            onChange={(checked) => setFieldValue('rememberMe',checked)}
            labelBefore={false}
            containerStyle={{margin:6,height:20,alignItems:'center',justifyContent:'center'}}
            labelStyle={{color:'#9EB3C2',fontSize:18}}
            checkboxStyle={{width:18,height:18}}
        />
        <TouchableOpacity activeOpacity={0.8} onPressIn={handleSubmit}>
            <View style={styles.loginButton}>
                <Text>Login</Text>
            </View>
         </TouchableOpacity>
    </View>
  );
  {/* <View style={{alignItems:'center'}}>
            <TouchableOpacity activeOpacity={0.8} onPress={handleSubmit}>
                <View style={styles.loginButton}>
                    <Text>Login</Text>
                </View>
            </TouchableOpacity>
        </View> */}
  const Log = formikEnhancer(LoginBox);

//ABOVE IS FORMIX WITH YUP

const LoginContainer   = () => {
  return (
      <View style={styles.loginContainer}>
        <ImageContainer/>
        <Log user={{username:'',  password:'', rememberMe:false}}/>
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
    const ima = require('./images/account.png');
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
    },
    loginBox:{
      flex:2,
      margin:4,
    //   backgroundColor:'#767F58',
      justifyContent:'center'
    },
    inputBox:{
        height:40,
        width:250,
        backgroundColor:'white',
        margin:4,
        borderRadius:6,
        borderWidth:1,
        alignSelf:'center'
    },
    txtInp:{
        fontSize:16,
        paddingLeft:10,
        paddingTop:10
    },
    loginButton:{
        height:30,
        width:100,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1 ,
        marginTop:8
    }

});

export default ViewLogin;
