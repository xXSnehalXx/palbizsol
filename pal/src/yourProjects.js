import React, { Component } from 'react';
import { StyleSheet , Text, View , Image , Platform , TouchableOpacity,FlatList} from 'react-native';

const data =[
    {type:'W',name:'IICS Website',dealsign:'2017-12-09',start:'2017-12-13',end:'2018-1-02'},
    {type:'HA',name:'Snehal App',dealsign:'2017-12-20',start:'2017-12-25',end:'2018-1-10'},
    {type:'M',name:'IICS Marketing',dealsign:'2018-02-02',start:'2018-2-4',end:'2018-2-23'},
    {type:'W',name:'Pranav Website',dealsign:'2017-12-09',start:'2017-12-13',end:'2018-1-02'},
    {type:'HA',name:'IICS App',dealsign:'2017-12-20',start:'2017-12-25',end:'2018-1-10'},
    {type:'M',name:'Broo Marketing',dealsign:'2018-02-02',start:'2018-2-4',end:'2018-2-23'},
];

class YourProjects extends Component {
  render(){
    return (
      <View style={styles.mainContainer}>
        <HeaderContainer/>
        <InfoSectionContainer/>
      </View>
    )
  }
}

const HeaderContainer = () => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Palnesto Business Solutions</Text>
        </View>
    );
}
class InfoSectionContainer extends Component{
    constructor(props){
        super(props);

        this.w = require('../images/webLogo.png');
        this.ha = require('../images/hybridAppLogo.png');
        this.m = require('../images/marketingLogo.png');
    }
    getImage = (type) =>{
        switch (type) {
            case 'W':return this.w;
                    break;
            case 'HA':return this.ha;
                    break;
            case 'M':return this.m;
                    break;
            default:
                break;
        }

    }
    render(){
        var shortid = require('shortid');

        let projects = Object.values(data).map(({type,...rem})=>{

        return <ProjContainer imaSrc={this.getImage(type)} rem={rem} key={shortid.generate()}/>

    });
        return (
                <View style={styles.infoSectionContainer}>
                    <FlatList
                         data={data}
                         renderItem={({item}) => {
                             let {type,...rem} = item;
                             return <ProjContainer imaSrc={this.getImage(type)} rem={rem}/>
                             }
                         }
                         keyExtractor={(value,index)=>shortid.generate()}
                         bounces={false}
                         indicatorStyle={"default"}
                    />
                </View>
            );
        }
}
const ProjContainer = (props) => {
    return (
        <View style={styles.projContainer}>
            <View style={styles.projBox}>
                <ProjImage sr={props.imaSrc}/>
                <ProjDet/>
                <ProjDetails det={props.rem}/>
            </View>
        </View>
    );
  }

const ProjImage = ({sr}) => {
    return(
      <View style={styles.projImage}>
          <Image
              source={sr}
          />
      </View>
    );
}
const ProjDet = () => {
    return(
      <View style={styles.projDet}>
          <Text style={styles.detText}>Name</Text>
          <Text style={styles.detText}>Deal on</Text>
          <Text style={styles.detText}>Start</Text>
          <Text style={styles.detText}>End</Text>
      </View>
    );
}
const ProjDetails = ({det}) => {
    const {name,dealsign,start,end} = det;
    return(
      <View style={styles.projDetails}>
          <Text style={styles.detailsText}>{name}</Text>
          <Text style={styles.detailsText}>{dealsign}</Text>
          <Text style={styles.detailsText}>{start}</Text>
          <Text style={styles.detailsText}>{end}</Text>
      </View>
    );
}
const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    marginTop:(Platform.OS=='ios'?20:0),
    backgroundColor: '#D1D1D1'
  },
  headerContainer:{
    flex:1,
    backgroundColor: '#FC7753',
    alignItems:'center',
    justifyContent:'center',
  },
  headerText:{
    fontWeight:'300',
    fontSize:24,
    color:'white'
  },
  infoSectionContainer:{
    flex:9,
    backgroundColor:'#F7F0D7',
    padding:15

},
    projContainer:{
        flex:0.23,
        padding:10,
        justifyContent:'center'
    },
    projBox:{
        flex:0.8,
        backgroundColor:'white',
        padding:5,
        flexDirection:'row',
        borderRadius:10,
        borderWidth:1
    },
    projImage:{
        flex:1,
        aspectRatio:1,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    projDet:{
        marginLeft:10,
        marginRight:13,
        justifyContent:'center'
    },
    projDetails:{
        flex:2,
        justifyContent:'center'
    },
    detText:{
        fontWeight:'bold',
        color:'black',
        flex:1
    },
    detailsText:{
        fontWeight:'100',
        flex:1,
    }
});

export default YourProjects;
