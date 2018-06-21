import React,{Component} from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'
import Swiper from './Components/Swiper.js';


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <View style={styles.mainContainer}>
                <ScrollView  bounces={false}>
                    <View style={styles.HeaderTextSlide}>
                        <Text style={styles.HeaderTextStyle}>About Us</Text>
                    </View>
                    <View style={styles.aboutUsSlide}>
                        <Swiper  activeDotColor='#000000' style={styles.wrapper} showsPagination={true} showsButtons={false} loop={false}>
                            <AboutUs/>
                            <AboutUs/>
                        </Swiper>
                    </View>
                    <View style={styles.whyChooseSlide}>
                        <Swiper  activeDotColor='#000000' style={styles.wrapper} showsPagination={true} showsButtons={false} loop={false}>
                            <AboutUs/>
                            <WhyChooseUs/>
                        </Swiper>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

class AboutUs extends Component {
  render() {
    return (
            <View style={styles.AboutUsPage1}>

            </View>
    );
  }
}
class WhyChooseUs extends Component {
  render() {
    return (
        <View style={styles.AboutUsPage1}>
        </View>
    );
  }
}
const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
  },
  mainContainer:{
    flex:1,
    backgroundColor:'#D38B5D'
  },
  HeaderTextSlide:{
    flex:1,
    minHeight:90,
    backgroundColor:'#ED7600',
    justifyContent:'flex-end',
    paddingLeft:15,
    paddingBottom:8


  },
  HeaderTextStyle:{
      fontSize:30,
      fontWeight: 'bold',
      color:'white'
  },
  aboutUsSlide: {
    backgroundColor:'#97CAE5',
    marginTop:22,
    marginBottom:12,
    marginLeft:10,
    marginRight:10,
    borderRadius:25,
    flex:1,

  },
  whyChooseSlide: {
    backgroundColor: '#97CAE5',
    marginTop:12,
    marginBottom:20,
    marginLeft:10,
    marginRight:10,
    borderRadius:25,
    // flex:1

  },
  AboutUsPage1:{
    flex:1,
    borderRadius:25,
    margin:4,
    backgroundColor:'#B5F44A',

  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
},
testerView:{
    flex:1,
    margin:4,
    backgroundColor:'#B5F44A'
},
wrapper:{
    // backgroundColor:"#ffffff",
    minHeight:height*0.9,
    maxHeight:height*0.94,
}
});
