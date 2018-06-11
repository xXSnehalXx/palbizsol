import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image ,Platform ,TouchableOpacity ,Button,TextInput } from 'react-native';
import {withFormik} from 'formik';
import CheckBox from 'react-native-checkbox';
import Yup from 'yup';

export class ViewLogin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
    render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderContainer/>
        <InfoSectionContainer/>
      </View>
    ); 
  }
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
const LoginContainer   = () => {
  return (
      <View style={styles.loginContainer}>
        <ImageContainer/>
        <LoginBox/>
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
  return (
    <View style={styles.imageContainer}>
        <Image 
          source={require('./images/account.png')}
          />
    </View>
  );
}

const LoginBox = (props) => (
    <View style={styles.loginBox}>
        <View style={styles.inputBox}>
            <TextInput 
                placeholder="Enter username"
                underlineColorAndroid='rgba(0,0,0,0)'
                style={styles.txtInp}

            />
        </View>
        <View style={styles.inputBox}>
            <TextInput
            placeholder="Enter password"
            underlineColorAndroid='rgba(0,0,0,0)'
            style={styles.txtInp}

            />
        </View>
        <CheckBox
            label='Remember me'
            checked={true}
            onChange={(checked) => alert('ios')}
            labelBefore={false}
            containerStyle={{margin:6,height:20,alignItems:'center',justifyContent:'center'}}
            labelStyle={{color:'#9EB3C2',fontSize:18}}
            checkboxStyle={{width:18,height:18}}
        />
        <View style={{alignItems:'center'}}>
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.loginButton}>
                    <Text>Login</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );



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

export default ViewLogin
