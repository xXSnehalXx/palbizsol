import React, { Component } from 'react';
import { StyleSheet , Text, View , Image , Platform , TouchableOpacity,FlatList} from 'react-native';

class StatusInfo extends Component {
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

    }

    render(){
        return (
                <View style={styles.infoSectionContainer}>

                </View>
            );
        }
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

}

});
export default StatusInfo;
