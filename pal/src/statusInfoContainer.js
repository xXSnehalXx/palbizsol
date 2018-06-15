import React, { Component } from 'react';
import { StyleSheet , Text, View , Image , Platform , TouchableOpacity,FlatList,ScrollView} from 'react-native';
import LocalImage from './LocalImage.js';

 const StatusInfoContainer = () => {
    return(
      <View style={styles.statusContainer}>
          <PiePercentRemContainer/>
          <DetailsContainer/>
      </View>
    )
}
const PiePercentRemContainer = () => {
    return(
      <View style={styles.piePercentRemContainer}>
          <Pie/>
          <PercentRem/>
      </View>
    );
}
const DetailsContainer = () => {
    return(
      <View style={styles.DetailsContainer}>
          <View style={styles.detailsLabels}>
              <Text style={styles.boldLabel}>{'\u2022'} Project Name</Text>
              <Text style={styles.boldLabel}>{'\u2022'} Project Deal on</Text>
              <Text style={styles.boldLabel}>{'\u2022'} Start date</Text>
              <Text style={styles.boldLabel}>{'\u2022'} Completion Date</Text>
              <Text style={styles.boldLabel}>{'\u2022'} Cost</Text>
              <Text style={styles.boldLabel}>{'\u2022'} Paid</Text>
              <Text style={styles.boldLabel}>{'\u2022'} Due</Text>
          </View>
          <View style={styles.detailsTextContainer}>
              <Text style={styles.detailsText}>Palnesto New UI</Text>
              <Text style={styles.detailsText}>2018-2-14</Text>
              <Text style={styles.detailsText}>2018-2-20</Text>
              <Text style={styles.detailsText}>2018-3-20</Text>
              <Text style={styles.detailsText}>45000/-</Text>
              <Text style={styles.detailsText}>7000/-</Text>
              <Text style={styles.detailsText}>38000/-</Text>
          </View>
      </View>
    );
}
const Pie = () => {
    return(
      <View style={styles.pie}>
          <Image
              source = {require('../images/pie.png')}
              style ={styles.pieImage}
          />
      </View>
    );
}



const PercentRem = () => {
    return(
      <View style={styles.percentRem}>
         <View style={styles.percent}>
             <Text style={styles.percentLabel}>
                 80%
             </Text>
         </View>
         <View style={styles.rem}>
             <Text style={styles.remainingLabel}>
                 5 days left
             </Text>
         </View>
      </View>
    );
}

const styles=StyleSheet.create({
    statusContainer:{
        backgroundColor:'white',
        borderWidth:1,
        marginBottom:4
    },
    featuresContainer:{
        backgroundColor:'#B9C804',

    },
    remarksContainer:{
        backgroundColor:'#B9C804',
        // minHeight:400 //this needs to have a min height so that it can display message textfield,remark label,post button in an elegant way
    },
    piePercentRemContainer:{
        // backgroundColor:'#000000',
        // margin:4,
        flexDirection:'row',
        minHeight:150
    },
    DetailsContainer:{
        // backgroundColor:'#000000',
        // margin:4,
        flexDirection:'row' ,
        minHeight:150
    },
    pie:{
        // backgroundColor:'#1DCB70',
        aspectRatio:1,
        // padding:4,
    },
    pieImage:{
        flex:1
    },
    percentRem:{
        flex:1,
        // backgroundColor:'#1DCB70',
    },
    percent:{
        flex:2,
        // backgroundColor:'#F01E1E',
        // margin:4,
        justifyContent:'flex-end',
        // alignItems:'center'

    },
    percentLabel:{
        fontSize:65,
        color:'black'
    },

    rem:{
        flex:1,
        // alignItems:'center',
    },
    remainingLabel:{
        fontSize:30,
        color:'#5D5959'
    },
    detailsLabels:{
        flex:5,
        // backgroundColor:'#1DCB70',
        padding:2,
    },
    boldLabel:{
        flex:1,
        fontSize:17,
        fontWeight:'bold',
        color:'black',
        paddingLeft:10,
        lineHeight:30,

    },
    detailsTextContainer:{
        flex:5,
        // backgroundColor:'#1DCB70',
        padding:2,
        paddingLeft:10


    },
    detailsText:{
        fontWeight:'100',
        flex:1,
        lineHeight:30,
        fontSize:17,

    }
});
export default StatusInfoContainer;
