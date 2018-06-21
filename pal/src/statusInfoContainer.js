import React, { Component } from 'react';
import { StyleSheet , Text, View , Image , Platform , TouchableOpacity,FlatList,ScrollView,Alert} from 'react-native';
import LocalImage from './LocalImage.js';
import { WebView  } from 'react-native';
import {VictoryPie} from 'victory-native';

const data = {
    status:{
        perDone:"35",
        daysLeft:"11",
        statusInfo:[
            {"Project Name":"PalNesto Biz Soln"},
            {"Type":"Hybrid App"},
            {"Project Deal on":"2018-2-14"},
            {"Start Date":"2018-2-20"},
            {"Completion Date":"2018-3-20"},
            {"Cost":"45000"},
            {"Paid":"6000"},
            {"Balance":"39000"},
            {"Payment Date":"2018-03-15"}
        ]
    }
};

 const StatusInfoContainer = () => {

    percent = data.status.perDone;
    days = data.status.daysLeft;

    return(
      <View style={styles.statusContainer}>
          <PiePercentRemContainer percent={percent} days={days}/>
          <DetailsContainer data = {data.status.statusInfo}/>
      </View>
    )
}
const PiePercentRemContainer = (props) => {
    return(
      <View style={styles.piePercentRemContainer}>
          <Pie {...props}/>
          <PercentRem {...props}/>
      </View>
    );
}
const DetailsContainer = ({data}) => {
    let x = data;
    let detLabels = new Array();
    let shortid = require('shortid');
let details = new Array();
for(let i in x){
 for(let j in x[i]){
  detLabels.push(<EachDetailsWithHeading label={j} text={x[i][j]} key={shortid.generate()}/>);
 }
}

    return(
      <View style={styles.DetailsContainer}>
          {detLabels}
      </View>
    );
}
const EachDetailsWithHeading = (props) => {
    return(
      <View style={styles.EachDetailsWithHeading}>
          <Text style={styles.boldLabel} >{'\u2022'} {props.label}</Text>
          <Text style={styles.detailsText} >{props.text}</Text>
      </View>
    );
}
class Pie extends Component{

    constructor(props){
        super(props);
        this.state={
            w:0,
            h:0
        };
    }


    render(){
        const p = parseInt(this.props.percent);
        const op = 100-p;
    return(
      <View style={styles.pie} ref="pieView" onLayout={(eve)=>{this.setState({w:eve.nativeEvent.layout.width,h:eve.nativeEvent.layout.height})
}} >
          {
              (this.state.w>0 && this.state.h>0)?
              <VictoryPie
                  data={[
                    { x: ' ', y: p},
                    { x: ' ', y:op}
                  ]}
                  colorScale={["orange", "lightgrey"]}
                  width={this.state.w} height={this.state.h}
                  padding={12}
                />
                :
                <Text>Loading</Text>
          }
      </View>
    );
}
}



const PercentRem = (props) => {
    return(
      <View style={styles.percentRem}>
         <View style={styles.percent}>
             <Text style={styles.percentLabel}>
                 {`${props.percent}%`}
             </Text>
         </View>
         <View style={styles.rem}>
             <Text style={styles.remainingLabel}>
                 {`${props.days} days left`}
             </Text>
         </View>
      </View>
    );
}


const styles=StyleSheet.create({
    statusContainer:{
        backgroundColor:'white',
        borderWidth:1,
        marginBottom:4,
        margin:8
    },

    piePercentRemContainer:{
        // backgroundColor:'#000000',
        // margin:4,
        flexDirection:'row',
        minHeight:150
    },
    DetailsContainer:{
        // backgroundColor:'#B7D3F2',
        // margin:4,
        minHeight:150
    },
    pie:{
        // backgroundColor:'#1DCB70',
        aspectRatio:1,
        flex:1,

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
        backgroundColor:'#1DCB70',
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
        backgroundColor:'#1DCB70',
        padding:2,
        paddingLeft:10


    },
    detailsText:{
        fontWeight:'100',
        flex:1,
        lineHeight:30,
        fontSize:17,

    },
    EachDetailsWithHeading:{
        flexDirection:'row',
        flex:1
    }
});
export default StatusInfoContainer;
