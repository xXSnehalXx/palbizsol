
import {withFormik,Formik} from 'formik';
import React, { Component } from 'react';

import { View,Text,Button,TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-checkbox';


const MyReactNativeForm = props => (
  <View>
    <Formik
      onSubmit={(values, actions) => {
                if(values){
                    alert(JSON.stringify(values))
                }
              }}

      render={(props) => (
          <View style={styles.loginBox}>
              <View style={styles.inputBox}>
                  <TextInput
                      placeholder="Enter username"
                      underlineColorAndroid='rgba(0,0,0,0)'
                      style={styles.txtInp}
                      onChangeText={text =>props.setFieldValue('username', text)}
                      value={props.values.username}
                  />
              </View>
              <View style={styles.inputBox}>
                  <TextInput
                      placeholder="Enter password"
                      underlineColorAndroid='rgba(0,0,0,0)'
                      style={styles.txtInp}
                      onChangeText={text =>props.setFieldValue('password', text)}
                      value={props.values.password}
                  />
              </View>
              <CheckBox
                  label='Remember me'
                  checked={props.values.rememberMe}
                  onChange={(checked)=>props.setFieldValue('rememberMe',!checked)}
                  labelBefore={false}
                  containerStyle={{margin:6,height:20,alignItems:'center',justifyContent:'center'}}
                  labelStyle={{color:'#9EB3C2',fontSize:18}}
                  checkboxStyle={{width:18,height:18}}
              />
              <View style={{alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={props.handleSubmit}>
                        <View style={styles.loginButton}>
                                 <Text>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>

          </View>
      )}

   />

</View>
);

const styles = StyleSheet.create({
    loginBox:{
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
        paddingTop:10,
        flexWrap:'wrap'
    },
    loginButton:{
        // height:30,
        width:100,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1 ,
        marginTop:8
    }

});
export default MyReactNativeForm;

//


// const LoginComponent = withFormik({
//     // validationSchema: Yup.object().shape({
//     //   username: Yup.string().required("First name is required."),
//     //   password: Yup.string().required("Last name is required."),
//     //   rememberMe: Yup.bool()
//     // }),
//     mapPropsToValues:({user}) => ({
//         ...user
//       }),
//     validate:(values)=>{
//         const errors={};
//         if (!values.username) {
//             errors.username = 'Username Required';
//           }
//        else if (!values.password) {
//         errors.password = 'Password Required';
//         }
//
//         if(!/^[0-9_%.+-]/.test(values.username)){
//             errors.username="Invalid Username";
//         }
//         return errors;
//     },
//     onSubmit:({event})=>{
//         alert("YOOOOO");
//     },
//     displayName:'Login Form',
// })(LoginBox);
//
//
//   {/* <View style={{alignItems:'center'}}>
//             <TouchableOpacity activeOpacity={0.8} onPress={handleSubmit}>
//                 <View style={styles.loginButton}>
//                     <Text>Login</Text>
//                 </View>
//             </TouchableOpacity>
//         </View> */}

//
// export default LoginComponent;
