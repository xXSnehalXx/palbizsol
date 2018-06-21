// import React, { Component } from 'react'
// import {
//   Text,
//   View,
//   Image,
//   Dimensions
// } from 'react-native'
// import Swiper from './Components/Swiper.js';
// const { width } = Dimensions.get('window')
//
// const styles = {
//   container: {
//     flex: 1
//   },
//
//   wrapper: {
//   },
//
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'transparent'
//   },
//
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB'
//   },
//
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#97CAE5'
//   },
//
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#92BBD9'
//   },
//
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   },
//
//   image: {
//     width,
//     flex: 1
//   }
// }
//
// export default class Tester extends Component {
//   render () {
//     return (
//       <View style={styles.container}>
//         <Swiper style={styles.wrapper} height={200} horizontal={false} >
//           <View style={styles.slide1}>
//             <Text style={styles.text}>Hello Swiper</Text>
//           </View>
//           <View style={styles.slide2}>
//             <Text style={styles.text}>Beautiful</Text>
//           </View>
//           <View style={styles.slide3}>
//             <Text style={styles.text}>And simple</Text>
//           </View>
//         </Swiper>
//
//         <Swiper style={styles.wrapper} height={240}
//           onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
//           dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
//           activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
//           paginationStyle={{
//             bottom: -23, left: null, right: 10
//           }} loop>
//           <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
//             <Image resizeMode='stretch' style={styles.image} source={require('./img/1.jpg')} />
//           </View>
//           <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
//             <Image resizeMode='stretch' style={styles.image} source={require('./img/2.jpg')} />
//           </View>
//           <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
//             <Image resizeMode='stretch' style={styles.image} source={require('./img/3.jpg')} />
//           </View>
//           <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
//             <Image resizeMode='stretch' style={styles.image} source={require('./img/4.jpg')} />
//           </View>
//         </Swiper>
//       </View>
//     )
//   }
// }


//
// import React from 'react';
// import {
//   Text,
// } from 'react-native';
//
// import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
//
// export default () => {
//   return <ScrollableTabView
//     style={{marginTop: 20, }}
//     initialPage={1}
//     renderTabBar={() => <DefaultTabBar />}
//   >
//     <Text tabLabel='Tab #1'>My</Text>
//     <Text tabLabel='Tab #2'>favorite</Text>
//     <Text tabLabel='Tab #3'>project</Text>
//   </ScrollableTabView>;
// }


//Multiple tab TabBar
//
// import React from 'react';
// import {
//   Text,
//   View,
// } from 'react-native';
//
// import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
//
// export default () => {
//   return <ScrollableTabView
//     style={{marginTop: 20, }}
//     initialPage={0}
//     renderTabBar={() => <ScrollableTabBar />}
//   >
//     <Text tabLabel='Tab #1'>My</Text>
//     <Text tabLabel='Tab #2 word word'>favorite</Text>
//     <Text tabLabel='Tab #3 word word word'>project</Text>
//     <Text tabLabel='Tab #4 word word word word'>favorite</Text>
//     <Text tabLabel='Tab #5'>project</Text>
//   </ScrollableTabView>;
// }


//BElow code for material type tab bar customizable af tho
console.disableYellowBox = true;

import  React,{Component} from 'react';
import { View, StyleSheet, Dimensions ,Platform,Text} from 'react-native';
import { TabView, TabBar, SceneMap ,PagerPan} from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);



export default class TabViewExample extends Component {
    render(){
        return (
          <View style= { styles.mainContainer } >
            <HeaderContainer/>
            <InfoSectionContainer/>
          </View>
        )
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
            <TabViewEx/>
        </View>
    );
}

class TabViewEx extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Why Us' },
      { key: 'second', title: 'Our Developers' },
    ],
  };

  render() {
    return (

      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        tabBarPosition={'bottom'}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width}}
        renderTabBar={props =>
              <TabBar
                {...props}
                pressOpacity={0.4}
                indicatorStyle={{backgroundColor:'transparent'}}
                style={{height:50,justifyContent:'flex-start' , backgroundColor:'darkgrey'}}
                getLabelText={(evt)=>evt.route.title}
                labelStyle={{color:'#5f1139'}}
                useNativeDriver={true}
                pressColor={'transparent'}
              />
            }
        renderPager={props =>
            <PagerPan
                {...props}
                swipeEnabled={false}
          />
        }

      />
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    mainContainer: {
      flex: 1,
      marginTop:(Platform.OS=='ios'?20:0),
      backgroundColor: '#37C1A0'
    },
    headerContainer:{
      flex:1,
      backgroundColor: 'darkgrey',
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
})
