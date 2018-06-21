
import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image ,Platform,Dimensions ,TouchableOpacity ,Button,TextInput ,Animated ,PanResponder,Easing } from 'react-native';
import {withFormik} from 'formik';
import MyReactNativeForm from './loginForm.js';
import CheckBox from 'react-native-checkbox';
import Yup from 'yup';

class ViewLogin extends Component{

    constructor(props) {
      super(props);
      this.state = {};
      this.state.time = new Animated.Value(0);
      const {width,height} = Dimensions.get('window');
      this.state.left = this.state.time.interpolate({
         inputRange:[0,100],
         outputRange:[-100,9],
         extrapolate:'clamp'
     });
        this.state.scale = this.state.time.interpolate({
           inputRange: [0,40,100],
           outputRange: [0,0,1],
           extrapolate:'clamp'
       });

     Platform.OS=='android'?
      this.state.top = this.state.time.interpolate({
         inputRange:[0,100],
         outputRange:[-100,9],
         extrapolate:'clamp'
    })
    :
      this.state.top = this.state.time.interpolate({
         inputRange:[0,100],
         outputRange:[-100,24],
         extrapolate:'clamp'
     });


     Platform.OS=='android'?
     this.state.tC = this.state.time.interpolate({
        inputRange:[0,40,100,200],
        outputRange:[height,height,height-80,height-370]
     })
    :
     this.state.tC = this.state.time.interpolate({
        inputRange:[0,40,100,200],
        outputRange:[height,height,height-56,height-370]
    });

    this.at = Platform.OS=='android'? height-80 : height-56;


   this.state.panResponder = PanResponder.create({
     onStartShouldSetPanResponder: () => true,
     onPanResponderMove: (evt,{vy,dy}) => {
         if (dy < 0)  {
             Animated.timing(this.state.time,{
                 toValue:200,
                 duration:300,
                 easing:Easing.inOut(Easing.sin)
             }).start();
            } else {
                Animated.timing(this.state.time,{
                    toValue:100,
                    duration:300,
                    easing:Easing.inOut(Easing.sin)
                }).start();
        }
    },
     onPanResponderRelease: (evt,{vy,dy}) => {
         let a = JSON.stringify(this.state.time);
         let b = JSON.stringify(new Animated.Value(100));
             if(a === b)
             {
                 Animated.timing(this.state.time,{
                 toValue:200,
                 duration:300,
                 easing:Easing.inOut(Easing.sin)
             }).start();
         }
     }


 });

}

    componentDidMount() {
        Animated.timing(this.state.time,{
            toValue:100,
            duration:600,
        }).start();

    }

    afterLogInAnim = () => {
        Animated.timing(this.state.time,{
            toValue:200,
            duration:600,
        }).start();
    }


    render(){
        return (
          <View style= { styles.mainContainer } >
            <InfoSectionContainer logAnim = {this.afterLogInAnim}/>
            <Animated.View style={[
                styles.TopIcons,{
                  left:this.state.left,
                  top:this.state.top,
                  transform:[{scale:this.state.scale}],
                }
            ]}
            >
            </Animated.View>
            <Animated.View style={[
                styles.TopIcons,{
                  right:this.state.left,
                  top:this.state.top,
                  transform:[{scale:this.state.scale}],
                }
            ]}
            >
            </Animated.View>
        <Animated.View style={[
            styles.chatBox,{
              top:this.state.tC,
          }
        ]}
        {...this.state.panResponder.panHandlers}
        >
        </Animated.View>
          </View>
      )
    }

}

const InfoSectionContainer = (props) => {
    return (
        <View style={styles.infoSectionContainer}>
            <LoginContainer logAnim = {props.logAnim}/>
            <KhaliSpace/>
        </View>
    );
}

//HERE IS FORMIK WITH YUP

//ABOVE IS FORMIX WITH YUP

const LoginContainer   = (props) => {
  return (
      <View style={styles.loginContainer}>
        <ImageContainer/>
        <MyReactNativeForm logAnim ={props.logAnim}/>
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
    const ima = require('../images/logo.png');
  return (
    <View style={styles.imageContainer}>
        <Image
          source={ima}
          style={{height:200,width:200}}
          />
    </View>
  );
}



const styles = StyleSheet.create({

    mainContainer: {
      flex: 1,
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
      flex:3,
      // backgroundColor:'#383535',
      margin:4,
    },
    khaliSpace:{
      flex:1,
      // backgroundColor:'#383535',
      margin:4
    },
    imageContainer:{
      flex:1,
      margin:4,
      // backgroundColor:'#767F58',
      alignItems:'center',
      justifyContent:'flex-end'
  },
  TopIcons:{
      height:60,
      width:60,
      borderRadius:30,
      backgroundColor:'#D3D3D3',
      position:'absolute'
  },
  chatBox:{
      height:300,
      width:'90%',
      backgroundColor:'#C56277',
      position:'absolute',
      alignSelf:'center',
      borderRadius:22
  }
});

export default ViewLogin;
