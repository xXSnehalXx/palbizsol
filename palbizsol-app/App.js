import React , {Component} from 'react';
import { StyleSheet, Text, View ,Image ,Platform ,TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderContainer/>
        <InfoSectionContainer/>
      </View>
    );
  }
}

const HeaderContainer = () => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Palnesto Business Solutions</Text>
        </View>
    );
}
const InfoSectionContainer = () => {
    return (
        <View style={styles.infoSectionContainer}>
            <UtilitySectionContainer/>
            <MyProjButtContainer/>
        </View>
    );
}

const UtilitySectionContainer = () => {
    return (
        <View style={styles.utilitySectionContainer}>
            <UtilitySectionInnerContainer/>
        </View>
    );
}
const UtilitySectionInnerContainer = () => {
    return (
        <View style={styles.utilitySectionInnerContainer}>
            <UtilityButtons name='home'/>
            <UtilityButtons name='services'/>
            <UtilityButtons name='ourworks'/>
            <UtilityButtons name='contactus'/>
        </View>
    );
}
//Above buttons have repetitive code so make a utilityButtons and send props as the buttons to render different shiz
const MyProjButtContainer = () => {
    return (
        <View style={styles.myProjButtContainer}>
            <ProjectsButt/>
        </View>
    );
}

class UtilityButtons extends Component {
   constructor(props){
       super();
    //    this.i="";
    //    this.tex="";
   }
   
    render(){
        const gear = require('./images/gear.png');
        const diamond = require('./images/diamond.png');
        const plane = require('./images/plane.png');
        const atom = require('./images/atom.png');
        
        switch(this.props.name){
            case 'home'     : i = diamond;
                             tex = 'Home';
                            break;
            case 'services': i = gear;
                             tex = 'Services';
                            break;
            case 'ourworks':i = atom;
                            tex = 'Our Works';
                            break;
            case 'contactus':i = plane;
                             tex = 'Contact Us';
                            break;
        }
        return(
            <View>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.utilityButton}>
                        <ImageContainer i={i}/>
                        <TextContainer  tex={tex}/>
                    </View>
                </TouchableOpacity>
            </View>
      );
    }
}
const ImageContainer = (props) => {
    return (
        <View style={styles.imageContainer}>
            <Image
                source={props.i}
                style={styles.imagey}
            />
        </View>
    );
}
const TextContainer = (props) => {
    return (
        <View style={styles.textContainer}>
            <Text style = {styles.texty}>{props.tex}</Text>
        </View>
    );
}

const ProjectsButt = () => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.projectsButton}>
                    <Text style={styles.texty}>My Projects</Text>
                </View>
            </TouchableOpacity>
        </View>
        
    );
}
const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    marginTop:(Platform.OS=='ios'?20:24),
    backgroundColor: '#37C1A0'
  },
  headerContainer:{
    flex:1,
    margin:4,
    backgroundColor: '#ECD241',
    alignItems:'center',
    justifyContent:'center',
  },
  headerText:{
    fontWeight:'300',
    fontSize:20
  },
  infoSectionContainer:{
    flex:9,
    margin:4,
    backgroundColor:'#ECD241' 
  },
  utilitySectionContainer:{
    flex:3,
    margin:4,
    backgroundColor: '#BA4F43',
    flexDirection:'row'
},
  utilitySectionInnerContainer:{
    margin:4,
    backgroundColor: '#ffffff',
    flexDirection:'row',
    flexWrap:'wrap',
    alignSelf:'center',
},
  myProjButtContainer:{
    flex:1,
    margin:4,
    backgroundColor: '#BA4F43',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:30
  },
  utilityButton:{
    margin:4,
    backgroundColor: '#0E7195',
    height:140,
    width:140,
    borderRadius:15
  },
  projectsButton:{
    height:30,
    width:100,
    backgroundColor: '#0E7195',
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center',    
  },
  imageContainer:{
    flex:2,
    backgroundColor:'lightpink',
    margin:4,
    alignItems:'center',
    justifyContent:'center'
  },
  textContainer:{
    flex:1,
    backgroundColor:'lightpink',
    margin:4,
    alignItems:'center',
    justifyContent:'center'
  },
  imagey:{
      height:70,
      width:70,
  },
  texty:{
    fontSize:18,
    fontWeight:'200'
  }



});
