
import {withFormik,Formik} from 'formik';
import React, { Component } from 'react';

import { View,Text,Button,TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-checkbox';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {
  Kaede,
  Hoshi,
  Jiro,
  Isao,
  Madoka,
  Akira,
  Hideo,
  Kohana,
  Makiko,
  Sae,
  Fumi,
} from 'react-native-textinput-effects';


const MyReactNativeForm = (pa) => (
  <View>
    <Formik
      onSubmit={(values, actions) => {
                // if(values){
                //     alert(JSON.stringify(values))
                // }
              }}

      render={(props) =>(
          <View style={styles.loginBox}>
              <View style={styles.inputBox}>

                  <Kohana
                    style={{ backgroundColor: '#f9f5ed' }}
                    label={'Username'}
                    iconClass={FontAwesomeIcon}
                    iconName={'user-o'}
                    iconColor={'#91627b'}
                    iconSize={20}
                    value={props.values.username}
                    onChangeText={text =>props.setFieldValue('username', text)}
                    labelStyle={{ color: '#91627b' , fontSize:15 , fontWeight:'200' }}
                    inputStyle={{ color: '#91627b' }}
                    useNativeDriver
                  />
              </View>

              <View style={styles.inputBox}>

                  <Kohana
                    style={{ backgroundColor: '#f9f5ed' }}
                    label={'Code'}
                    iconClass={FontAwesomeIcon}
                    iconName={'shield'}
                    iconSize={20}
                    iconColor={'#91627b'}
                    value={props.values.password }
                    onChangeText={text =>props.setFieldValue('password', text)}
                    labelStyle={{ color: '#91627b' , fontSize:15 , fontWeight:'200' }}
                    inputStyle={{ color: '#91627b' }}
                    useNativeDriver
                    secureTextEntry={true}

                  />
              </View>
              {/* <CheckBox
                  label='Remember me'
                  checked={props.values.rememberMe}
                  onChange={(checked)=>props.setFieldValue('rememberMe',!checked)}
                  labelBefore={false}
                  containerStyle={{margin:6,height:20,alignItems:'center',justifyContent:'center'}}
                  labelStyle={{color:'#9EB3C2',fontSize:18}}
                  checkboxStyle={{width:18,height:18}}
              /> */}
              <View style={{alignItems:'center'}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={pa.logAnim}>
                        <View style={styles.loginButton}>
                                 <Text style={{color:'white',fontSize:18}}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>

          </View>)}
      />
</View>
);

const styles = StyleSheet.create({
    loginBox:{
        // flex:1,
      margin:4,
    //   backgroundColor:'#767F58',
      justifyContent:'center'
    },
    inputBox:{
         height:50,
         width:280,
        backgroundColor:'white',
        margin:4,
        // borderRadius:6,
        // borderWidth:1,
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
        padding:6,
        width:100,
        borderRadius:6,
        alignItems:'center',
        justifyContent:'center',
        marginTop:8,
        backgroundColor:'#DD7018'
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
