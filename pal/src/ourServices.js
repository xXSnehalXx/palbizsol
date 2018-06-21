
import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image ,Platform ,TouchableOpacity ,Button,TextInput } from 'react-native';
import {withFormik} from 'formik';
import MyReactNativeForm from './loginForm.js';
import CheckBox from 'react-native-checkbox';
import Yup from 'yup';

const OurServices = () => {
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
            <Text style={styles.headerText}>Our Services</Text>
        </View>
    );
}
const InfoSectionContainer = () => {
    return (
        <View style={styles.infoSectionContainer}>
            <BigSection type="des"/>
            <BigSection type="dev"/>
            <BigSection type="biz"/>
        </View>
    );
}
class BigSection extends Component {

    warner = (props)=>{

        let q = props.nativeEvent.layout;

        console.warn(`x:${q.x}  y:${q.y}  width:${q.width}  height:${q.height}`)


    }
    render(){
    return(
      <View style={styles.BigSection} onLayout={(evt)=>this.warner(evt)}>
          <SmallSection type={this.props.type}/>
      </View>
    )
}
}
class SmallSection extends Component{

    constructor(props){
        super(props);

    }

    render(){
        let i = new Object();
        let t = new Object();
        switch (this.props.type) {
            case 'des': i=require('../images/desImg.png');
                        t = "Designing";
                        break;
            case 'dev': i=require('../images/devImg.png');
                        t = "Development";
                        break;
            case 'biz': i=require('../images/bizSolImg.png');
                        t = "Business Solutions";
                        break;

        }
    return(
      <View style={styles.SmallSection} >
          <SmallSectionImage i = {i}/>
          <SmallSectionText t = {t}/>
      </View>
    )
}
}
const SmallSectionImage = (props) => {
    return(
      <View style={styles.SmallSectionImage}>
          <Image
              source ={props.i}
              style = {styles.imagey}
          />
      </View>
    );
}
const SmallSectionText = (props) => {
    return(
      <View style={styles.SmallSectionText}>
          <Text style={styles.texty}>{props.t}</Text>
      </View>
    );
}
const styles=StyleSheet.create({
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
      backgroundColor:'#F7F0D7',
      // padding:
    },
    BigSection:{
        flex:0.3,
        margin:4,
        backgroundColor:'#26a69a',
        alignItems:'center',
        justifyContent:'center',
        padding:30
    },
    SmallSection:{
        flex:1,
        borderRadius:15,
        aspectRatio:2,
        backgroundColor:'white',
        flexDirection:'row',
        borderWidth:1
        // justifyContent:'center',
        // alignItems:'center',
        // padding:102
    },
    SmallSectionImage:{
        flex:1,
        // backgroundColor:'#1C7C54',
        margin:4,
        aspectRatio:1,
        alignSelf:'center',
        // justifyContent:'center',
        padding:13
    },
    SmallSectionText:{
        flex:2,
        // backgroundColor:'#1C7C54',
        margin:4,
        justifyContent:'center'

    },
    imagey:{
        // height:60,
        // width:60,
        flex:1,
        aspectRatio:1
    },
    texty:{
        fontWeight:'200',
        // alignSelf:'center',
        fontSize:16,
        // lineHeight:18
        // padding:2
    }
});

export default OurServices;
