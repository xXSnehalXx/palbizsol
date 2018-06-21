import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image ,Platform ,TouchableOpacity ,Button,TextInput ,Animated ,Dimensions,Easing} from 'react-native';
import {withFormik} from 'formik';
import MyReactNativeForm from './loginForm.js';
import CheckBox from 'react-native-checkbox';
import Yup from 'yup';

const OurServices = () => {
    return (
      <View style= { styles.mainContainer } >
        <HeaderContainer/>
        <InfoSectionContainer2/>
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
class InfoSectionContainer2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            allBig:true,
            desClicked:false,
            devClicked:false,
            bizClicked:false,
        };
        var {height, width} = Dimensions.get('window');
        this.state.timeZ3 = new Animated.Value(0);
        this.state.timeZ2 = new Animated.Value(0);
        this.state.timeZ1 = new Animated.Value(0);


        this.state.t3 = this.state.timeZ3.interpolate({
            inputRange:[0,10,100],
            outputRange:[height,0,0,]
        });
        this.state.t2 = this.state.timeZ2.interpolate({
            inputRange:[0,10,100],
            outputRange:[height,0,0,]
        });
        this.state.t1 = this.state.timeZ1.interpolate({
            inputRange:[0,10,100],
            outputRange:[height,0,0,]
        });


        this.state.b3 = this.state.timeZ3.interpolate({
            inputRange:[0,10,100],
            // outputRange:[0,0,-height]
            outputRange:[-height,0,0,]
        });
        this.state.b2 = this.state.timeZ2.interpolate({
            inputRange:[0,10,100],
            outputRange:[-height,0,0,]
        });
        this.state.b1 = this.state.timeZ1.interpolate({
            inputRange:[0,10,100],
            outputRange:[-height,0,0,]
        });


        this.state.o3 = this.state.timeZ3.interpolate({
            // inputRange:[0,1,2,3,4,5,6,7,8,9,10,100],
            // outputRange:[1,1,1,0.8,0.6,0.5,0.4,0.3,0.2,0.1,0,0]
            inputRange:[0,96,97,98,99,100],
            outputRange:[0,0.2,0.4,0.6,0.8,1]
        });
        this.state.o2 = this.state.timeZ2.interpolate({
            inputRange:[0,96,97,98,99,100],
            outputRange:[0,0.2,0.4,0.6,0.8,1]
        });
        this.state.o1 = this.state.timeZ1.interpolate({
            inputRange:[0,96,97,98,99,100],
            outputRange:[0,0.2,0.4,0.6,0.8,1]
        });


        this.state.time = new Animated.Value(0);
        this.state.top = this.state.time.interpolate({
            inputRange:[0,100],
            outputRange:[0,4]
        });
        this.state.width = this.state.time.interpolate({
            inputRange:[0,100],
            outputRange:[300,50]
        });
        this.state.height = this.state.time.interpolate({
            inputRange:[0,100],
            outputRange:['30%','10%']
        });
        this.state.scaleX = this.state.time.interpolate({
            inputRange:[0,100],
            outputRange:[1,0.2]
        });
        this.state.scaleY = this.state.time.interpolate({
            inputRange:[0,100],
            outputRange:[1,0.3]
        });
        this.state.left = this.state.time.interpolate({
            inputRange:[0,100],
            outputRange:[0,156]
        });
        this.state.opacity = this.state.time.interpolate({
            inputRange:[0,1,99,100],
            outputRange:[1,0,0,1]
        });


    }

    startAnim=()=>{
            Animated.timing(                  // Animate over time
              this.state.time,            // The animated value to drive
              {
                toValue: 100,                   // Animate to opacity: 1 (opaque)
                duration:200,
                easing:Easing.out (Easing.sin) ,
             // Make it take a while
              }
            ).start();
    }

    closeAnim = ()=>{
        Animated.timing(                  // Animate over time
          this.state.time,            // The animated value to drive
          {
            toValue: 0,                   // Animate to opacity: 1 (opaque)
            duration:200,
            easing:Easing.out(Easing.sin),
            // Make it take a while
          }
        ).start();
    }

    hideDispView = (num) => {

        let t = new Object();
        switch (num) {
            case 3: t = this.state.timeZ3;
                    break;
            case 2: t = this.state.timeZ2;
                    break;
            case 1: t = this.state.timeZ1;
                    break;
        }
        Animated.timing(                  // Animate over time
              t,            // The animated value to drive
              {
                toValue: 0,                   // Animate to opacity: 1 (opaque)
                duration:200,
                easing:Easing.linear
             // Make it take a while
              }
            ).start();
    }

    showDispView = (num) => {

        let t = new Object();
        switch (num) {
            case 3: t = this.state.timeZ3;
                    break;
            case 2: t = this.state.timeZ2;
                    break;
            case 1: t = this.state.timeZ1;
                    break;
        }
        Animated.timing(                  // Animate over time
              t,            // The animated value to drive
              {
                toValue: 100,                   // Animate to opacity: 1 (opaque)
                duration:200,
                easing:Easing.linear
             // Make it take a while
              }
            ).start();
    }

    buttPressed = (type) => {
        if(type==='des'){
            if(this.state.allBig===true)
                {
                    this.startAnim();
                    this.showDispView(3)
                    this.setState({allBig:false,desClicked:true})
                }
            else if(this.state.desClicked===false)
            {
                this.hideDispView(2)
                this.hideDispView(1)
                this.showDispView(3)
                this.setState({desClicked:true,devClicked:false,bizClicked:false});
            }
            else{
                this.hideDispView(3)
                this.closeAnim();
                this.setState({allBig:true,desClicked:false});
            }
        }
        else if(type==="dev"){
            if(this.state.allBig===true)
                {
                    this.startAnim();
                    this.showDispView(2);
                    this.setState({allBig:false,devClicked:true})
                }
            else if(this.state.devClicked===false)
            {
                this.hideDispView(1)
                this.hideDispView(3)
                this.showDispView(2)
                this.setState({devClicked:true,desClicked:false,bizClicked:false});
            }
            else{
                this.hideDispView(2)
                this.closeAnim();
                this.setState({allBig:true,devClicked:false});
            }

        }
        else{
            if(this.state.allBig===true)
                {
                    this.startAnim();
                    this.showDispView(1);
                    this.setState({allBig:false,bizClicked:true})
                }
            else if(this.state.bizClicked===false)
            {
                this.hideDispView(3)
                this.hideDispView(2)
                this.showDispView(1)
                this.setState({bizClicked:true,devClicked:false,desClicked:false});
            }
            else{
                this.hideDispView(1)
                this.closeAnim();
                this.setState({allBig:true,bizClicked:false});
            }
        }
    }

    showView = () => {
        alert('showingView');
    }

    render(){
        return(
                <View style={styles.infoSectionContainer}>
                        <Animated.View style={
                            [styles.view1,
                            {
                                top:this.state.t3,
                            bottom:this.state.b3,
                            opacity:this.state.o3,
                            zIndex:3

                            }]
                        }>
                            <TouchableOpacity onPress = {()=>this.hideDispView(3)} style={{width:'100%',height:'100%'}}  activeOpacity={1}>
                                <View style={{flex:1}}>
                                    <Text>Designing</Text>
                                </View>
                            </TouchableOpacity>
                        </Animated.View>
                        <Animated.View style={
                            [styles.view1,
                            {
                                top:this.state.t2,
                            bottom:this.state.b2,
                            opacity:this.state.o2,
                            backgroundColor:'#825a89',
                            position:'absolute',
                            zIndex:2

                            }]
                        }>
                            <TouchableOpacity onPress = {()=>this.hideDispView(2)} style={{width:'100%',height:'100%'}}  activeOpacity={1}>
                                <View style={{flex:1}}>
                                    <Text>Development</Text>
                                </View>
                            </TouchableOpacity>

                        </Animated.View>
                        <Animated.View style={
                            [styles.view1,
                            {
                                top:this.state.t1,
                            bottom:this.state.b1,
                            opacity:this.state.o1,
                            backgroundColor:'#ab6c7c',
                            position:'absolute',
                            zIndex:1

                            }]
                        }>
                            <TouchableOpacity onPress ={()=>this.hideDispView(1)} style={{width:'100%',height:'100%'}}  activeOpacity={1}>
                                <View style={{flex:1}}>
                                    <Text>Biz Sol</Text>
                                </View>
                            </TouchableOpacity>

                        </Animated.View>

                        {/*From below is the code of the buttons*/}


                        <Animated.View style={[styles.animBox,{height:this.state.height}]} >
                                <Animated.View
                                  style={
                                      [styles.insAnimBox,
                                      {
                                      top:this.state.top,
                                      transform:[{translateY:this.state.top},{scaleX:this.state.scaleX},{scaleY:this.state.scaleY}],
                                      // height:this.state.height,
                                      // width:this.state.width,
                                      left:this.state.left,
                                      opacity:this.state.opacity
                                  }
                              ]}
                                >
                                    <TouchableOpacity onPress={()=>this.buttPressed('des')}>
                                        <SmallSection type="des"/>
                                    </TouchableOpacity>

                                </Animated.View>
                            </Animated.View>

                            <Animated.View style={[styles.animBox,{height:this.state.height}]} >
                                <Animated.View
                                  style={
                                      [styles.insAnimBox,
                                      {
                                      top:this.state.top,
                                      transform:[{translateY:this.state.top},{scaleX:this.state.scaleX},{scaleY:this.state.scaleY}],
                                      // height:this.state.height,
                                      // width:this.state.width,
                                      left:this.state.left,
                                      opacity:this.state.opacity


                                  }
                              ]}
                                >
                                    <TouchableOpacity onPress={()=>this.buttPressed('dev')}>
                                        <SmallSection type="dev"/>
                                    </TouchableOpacity>
                                </Animated.View>
                            </Animated.View>

                            <Animated.View style={[styles.animBox,{height:this.state.height}]} >
                                <Animated.View
                                  style={
                                      [styles.insAnimBox,
                                      {
                                      top:this.state.top,
                                      transform:[{translateY:this.state.top},{scaleX:this.state.scaleX},{scaleY:this.state.scaleY}],
                                      // height:this.state.height,
                                      // width:this.state.width,
                                      left:this.state.left,
                                      opacity:this.state.opacity


                                  }
                              ]}
                                >
                                    <TouchableOpacity onPress={()=>this.buttPressed('biz')}>
                                        <SmallSection type="biz"/>
                                    </TouchableOpacity>
                                </Animated.View>
                            </Animated.View>


                </View>



        )
    }

}

class InfoSectionContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            allBig:true,
            desClicked:false,
            devClicked:false,
            bizClicked:false,

        };
        var {height, width} = Dimensions.get('window');
        this.state.time = new Animated.Value(0);
        this.state.top = this.state.time.interpolate({
            inputRange:[0,100],
            outputRange:[0,4]
        });
        this.state.width = this.state.time.interpolate({
            inputRange:[0,100],
            outputRange:[300,50]
        });
        this.state.height = this.state.time.interpolate({
            inputRange:[0,100],
            outputRange:['30%','10%']
        });
        this.state.scaleX = this.state.time.interpolate({
            inputRange:[0,100],
            outputRange:[1,0.2]
        });
        this.state.scaleY = this.state.time.interpolate({
            inputRange:[0,100],
            outputRange:[1,0.3]
        });
        this.state.left = this.state.time.interpolate({
            inputRange:[0,100],
            outputRange:[0,150]
        });
        this.state.opacity = this.state.time.interpolate({
            inputRange:[0,10,20,30,40,50,60,70,80,90,100],
            outputRange:[1,0.3,0,0,0,0,0,0,0,0,1]
        });

    }
    startAnim=()=>{
            Animated.timing(                  // Animate over time
              this.state.time,            // The animated value to drive
              {
                toValue: 100,                   // Animate to opacity: 1 (opaque)
                duration:600,
                easing:Easing.out (Easing.sin) ,
             // Make it take a while
              }
            ).start();
    }
    closeAnim = ()=>{
        Animated.timing(                  // Animate over time
          this.state.time,            // The animated value to drive
          {
            toValue: 0,                   // Animate to opacity: 1 (opaque)
            duration:400,
            easing:Easing.out(Easing.sin),
            // Make it take a while
          }
        ).start();
    }

    buttPressed = (type) => {
        if(type==='des'){
            if(this.state.allBig===true)
                {
                    this.startAnim();
                    this.showView();
                    this.setState({allBig:false,desClicked:true})
                }
            else if(this.state.desClicked===false)
            {
                this.showView();
                this.setState({desClicked:true,devClicked:false,bizClicked:false});
            }
            else{
                this.closeAnim();
                this.setState({allBig:true,desClicked:false});
            }
        }
        else if(type==="dev"){
            if(this.state.allBig===true)
                {
                    this.startAnim();
                    this.showView();
                    this.setState({allBig:false,devClicked:true})
                }
            else if(this.state.devClicked===false)
            {
                this.showView();
                this.setState({devClicked:true,desClicked:false,bizClicked:false});
            }
            else{
                this.closeAnim();
                this.setState({allBig:true,devClicked:false});
            }

        }
        else{
            if(this.state.allBig===true)
                {
                    this.startAnim();
                    this.showView();
                    this.setState({allBig:false,bizClicked:true})
                }
            else if(this.state.bizClicked===false)
            {
                this.showView();
                this.setState({bizClicked:true,devClicked:false,desClicked:false});
            }
            else{
                this.closeAnim();
                this.setState({allBig:true,bizClicked:false});
            }
        }
    }

    showView = () => {
        alert('showingView');
    }

render(){
    return (
        <View style={styles.infoSectionContainer}>
            {/* <BigSection1 type="des"/>
            <BigSection2 type="dev"/>
            <BigSection3 type="biz"/> */}

        <Animated.View style={[styles.animBox,{height:this.state.height}]} >
                <Animated.View
                  style={
                      [styles.insAnimBox,
                      {
                      top:this.state.top,
                      transform:[{translateY:this.state.top},{scaleX:this.state.scaleX},{scaleY:this.state.scaleY}],
                      // height:this.state.height,
                      // width:this.state.width,
                      left:this.state.left,
                      opacity:this.state.opacity
                  }
              ]}
                >
                    <TouchableOpacity onPress={()=>this.buttPressed('des')}>
                        <SmallSection type="des"/>
                    </TouchableOpacity>

                </Animated.View>
            </Animated.View>

            <Animated.View style={[styles.animBox,{height:this.state.height}]} >
                <Animated.View
                  style={
                      [styles.insAnimBox,
                      {
                      top:this.state.top,
                      transform:[{translateY:this.state.top},{scaleX:this.state.scaleX},{scaleY:this.state.scaleY}],
                      // height:this.state.height,
                      // width:this.state.width,
                      left:this.state.left,
                      opacity:this.state.opacity


                  }
              ]}
                >
                    <TouchableOpacity onPress={()=>this.buttPressed('dev')}>
                        <SmallSection type="dev"/>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>

            <Animated.View style={[styles.animBox,{height:this.state.height}]} >
                <Animated.View
                  style={
                      [styles.insAnimBox,
                      {
                      top:this.state.top,
                      transform:[{translateY:this.state.top},{scaleX:this.state.scaleX},{scaleY:this.state.scaleY}],
                      // height:this.state.height,
                      // width:this.state.width,
                      left:this.state.left,
                      opacity:this.state.opacity


                  }
              ]}
                >
                    <TouchableOpacity onPress={()=>this.buttPressed('biz')}>
                        <SmallSection type="biz"/>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>




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

const {width,height} = Dimensions.get('window')

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
        flex:1,
        margin:4,
        backgroundColor:'#26a69a',
        alignItems:'center',
        justifyContent:'center',
        padding:30,
    },
    animBox:{
    // flex:1,
    // height:'30%',
    margin:4,
    // backgroundColor:'#05a5d1',
    // alignItems:'center',
    // padding:10,
    justifyContent:'center',
    // paddingBotom
    overflow: 'hidden',

   // position: 'absolute',


    },
    insAnimBox:{
        width:'60%',
        // height:'70%',
        alignSelf:'center',
        // marginTop:20

    },
    SmallSection:{
        // flex:1,
        borderRadius:15,
        // aspectRatio:2,
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
        margin:20,
        aspectRatio:1,
        alignSelf:'center',
        // justifyContent:'center',
        // padding:13
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
    },
    view1:{
        width:'82%',
        // flex:1,
        margin:4,
        overflow: 'hidden',
       // top: 0,
       left: 0,
       right: 0,
       // bottom: 0,
       position: 'absolute',
       alignItems: 'center',
       justifyContent:'center',
        backgroundColor:'#484a90'
    },
    hiddenBro:{
        top: window.height,
        bottom: -window.height


    }

});

export default OurServices;
