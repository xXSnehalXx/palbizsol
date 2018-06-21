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


// BElow code for material type tab bar customizable af tho
// console.disableYellowBox = true;
//
// import  React,{Component} from 'react';
// import { View, StyleSheet, Dimensions ,Platform,Text} from 'react-native';
// import { TabView, TabBar, SceneMap ,PagerPan} from 'react-native-tab-view';
//
// const FirstRoute = () => (
//   <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
// );
// const SecondRoute = () => (
//   <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
// );
//
//
//
// export default class TabViewExample extends Component {
//     render(){
//         return (
//           <View style= { styles.mainContainer } >
//             <HeaderContainer/>
//             <InfoSectionContainer/>
//           </View>
//         )
//     }
//
// }
// const HeaderContainer = () => {
//     return(
//         <View style={styles.headerContainer}>
//             <Text style={styles.headerText}>Client Login</Text>
//         </View>
//     );
// }
// const InfoSectionContainer = () => {
//     return (
//         <View style={styles.infoSectionContainer}>
//             <KohanaInput/>
//         </View>
//     );
// }
//
// class TabViewEx extends React.Component {
//   state = {
//     index: 0,
//     routes: [
//       { key: 'first', title: 'Why Us' },
//       { key: 'second', title: 'Our Developers' },
//     ],
//   };
//
//   render() {
//     return (
//
//       <TabView
//         navigationState={this.state}
//         renderScene={SceneMap({
//           first: FirstRoute,
//           second: SecondRoute,
//         })}
//         tabBarPosition={'bottom'}
//         onIndexChange={index => this.setState({ index })}
//         initialLayout={{ width: Dimensions.get('window').width}}
//         renderTabBar={props =>
//               <TabBar
//                 {...props}
//                 pressOpacity={0.4}
//                 indicatorStyle={{backgroundColor:'transparent'}}
//                 style={{height:50,justifyContent:'flex-start' , backgroundColor:'darkgrey'}}
//                 getLabelText={(evt)=>evt.route.title}
//                 labelStyle={{color:'#5f1139'}}
//                 useNativeDriver={true}
//                 pressColor={'transparent'}
//               />
//             }
//         renderPager={props =>
//             <PagerPan
//                 {...props}
//                 swipeEnabled={false}
//           />
//         }
//
//       />
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//     },
//     mainContainer: {
//       flex: 1,
//       marginTop:(Platform.OS=='ios'?20:0),
//       backgroundColor: '#37C1A0'
//     },
//     headerContainer:{
//       flex:1,
//       backgroundColor: 'darkgrey',
//       alignItems:'center',
//       justifyContent:'center',
//     },
//     headerText:{
//       fontWeight:'300',
//       fontSize:20,
//       color:'white'
//     },
//     infoSectionContainer:{
//       flex:9,
//       backgroundColor:'#F7F0D7'
//     },
// })




//Below is code for custom text inputs


import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

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

export default class TextInputEffectsExample extends Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <View style={[styles.card1, { backgroundColor: '#F9F7F6' }]}>
          <Text style={styles.title}>Kaede</Text>
          <Kaede label={'Website'} defaultValue={'Github'} editable={false} />
          <Kaede
            style={styles.input}
            label={'Number'}
            labelStyle={{
              color: 'white',
              backgroundColor: '#fcb794',
            }}
            inputStyle={{
              color: 'white',
              backgroundColor: '#db8d67',
            }}
            keyboardType="numeric"
          />
        </View>
        <View style={[styles.card2, { backgroundColor: '#8781bd' }]}>
          <Text style={styles.title}>Sae</Text>
          <Sae
            label={'Email Address'}
            iconClass={FontAwesomeIcon}
            iconName={'pencil'}
            iconColor={'white'}
          />
          <Sae
            style={styles.input}
            label={'Invitation Code'}
            iconClass={FontAwesomeIcon}
          />
        </View>
        <View style={[styles.card1, { backgroundColor: '#F9F7F6' }]}>
          <Text style={styles.title}>Hoshi</Text>
          <Hoshi label={'Town'} borderColor={'#b76c94'} maskColor={'#F9F7F6'} />
          <Hoshi
            style={styles.input}
            label={'Street'}
            maskColor={'#F9F7F6'}
            borderColor={'#7ac1ba'}
          />
        </View>
        <View style={[styles.card1, { backgroundColor: '#dee0e0' }]}>
          <Text style={styles.title}>Jiro</Text>
          <Jiro
            label={"Dog's name"}
            borderColor={'#9b537a'}
            inputStyle={{ color: 'white' }}
          />
          <Jiro
            style={styles.input}
            label={"Cat's name"}
            borderColor={'#f7c665'}
            inputStyle={{ color: 'white' }}
          />
        </View>
        <View style={[styles.card2, { backgroundColor: '#a9ceca' }]}>
          <Text style={styles.title}>Fumi</Text>
          <Fumi
            label={'Course Name'}
            labelStyle={{ color: '#a3a3a3' }}
            inputStyle={{ color: '#f95a25' }}
            iconClass={FontAwesomeIcon}
            iconName={'university'}
            iconColor={'#f95a25'}
            iconSize={15}
          />
          <Fumi
            style={styles.input}
            label={'Degree'}
            iconClass={FontAwesomeIcon}
            iconName={'graduation-cap'}
            iconColor={'#77116a'}
          />
        </View>
        <View style={[styles.card1, { backgroundColor: '#7f3e61' }]}>
          <Text style={styles.title}>Isao</Text>
          <Isao
            label={'First Name'}
            activeColor={'#da7071'}
            passiveColor={'#dadada'}
          />
          <Isao
            style={styles.input}
            label={'Middle Name'}
            activeColor={'#da7071'}
            passiveColor={'#dadada'}
          />
        </View>
        <View style={[styles.card2, { backgroundColor: '#f9f3cf' }]}>
          <Text style={styles.title}>Akira</Text>
          <Akira
            label={'First Name'}
            borderColor={'#a5d1cc'}
            labelStyle={{ color: '#ac83c4' }}
          />
          <Akira
            style={styles.input}
            label={'Maiden Name'}
            borderColor={'#a5d1cc'}
            labelStyle={{ color: '#ac83c4' }}
          />
        </View>
        <View style={styles.card2}>
          <Text style={styles.title}>Madoka</Text>
          <Madoka
            style={styles.input}
            label={'Frequency'}
            borderColor={'#aee2c9'}
            labelStyle={{ color: '#008445' }}
            inputStyle={{ color: '#f4a197' }}
          />
          <Madoka
            style={styles.input}
            label={'Weight'}
            borderColor={'#aee2c9'}
            labelStyle={{ color: '#008445' }}
            inputStyle={{ color: '#f4a197' }}
          />
        </View>
        <View style={[styles.card2, { backgroundColor: '#6b6b6b' }]}>
          <Text style={styles.title}>Hideo</Text>
          <Hideo
            iconClass={FontAwesomeIcon}
            iconName={'envelope'}
            iconColor={'white'}
            iconBackgroundColor={'#f2a59d'}
            inputStyle={{ color: '#464949' }}
            iconSize={30}
          />
          <Hideo
            style={styles.input}
            iconClass={FontAwesomeIcon}
            iconName={'user'}
            iconColor={'white'}
            iconBackgroundColor={'#f2a59d'}
            inputStyle={{ color: '#464949' }}
          />
        </View>
        <View style={[styles.card2, { backgroundColor: '#b792a6' }]}>
          <Text style={styles.title}>Kohana</Text>
          <Kohana
            style={{ backgroundColor: '#f9f5ed' }}
            label={'Username'}
            iconClass={FontAwesomeIcon}
            iconName={'bus'}
            iconColor={'#f4d29a'}
            // iconSize={40
            labelStyle={{ color: '#91627b' }}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
          />
          <Kohana
            style={[styles.input, { backgroundColor: '#f9f5ed' }]}
            label={'Phone'}
            iconClass={FontAwesomeIcon}
            iconName={'phone'}
            iconColor={'#ddd'}
            iconColor={'#f4d29a'}
            labelStyle={{ color: '#91627b' }}
            inputStyle={{ color: '#91627b' }}
            useNativeDriver
          />
        </View>
        <View style={[styles.card2, { backgroundColor: '#d0efe0' }]}>
          <Text style={styles.title}>Makiko</Text>
          <Makiko
            label={'Destination'}
            iconClass={FontAwesomeIcon}
            iconName={'heart'}
            iconColor={'white'}
            iconSize={35}
            inputStyle={{ color: '#db786d' }}
          />
          <Makiko
            style={styles.input}
            label={'Comment'}
            iconClass={FontAwesomeIcon}
            iconName={'comment'}
            iconColor={'white'}
            inputStyle={{ color: '#db786d' }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'white',
  },
  content: {
    // not cool but good enough to make all inputs visible when keyboard is active
    paddingBottom: 300,
  },
  card1: {
    paddingVertical: 16,
  },
  card2: {
    padding: 16,
  },
  input: {
    marginTop: 4,
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
});
