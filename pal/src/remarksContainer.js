import React, {Component} from 'react';
import {withFormik,Formik} from 'formik';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    TouchableOpacity,
    FlatList,
    ScrollView,
    TextInput,
    TextArea,
    KeyboardAvoidingView,
    PanResponder

} from 'react-native';

const data = {
    remarks:{
        '2018-02-20':[
            {C:'Work shall have started , Yay!'},
            {P:'Yes Ma\'am'},
            {C:'I shall expect a wireframe of the page in a coulple of days right?'},
            {P:'Definetly'}
        ],
        '2018-02-21':[
            {C:'Work going good right?'},
            {P:'Yes Ma\'am'}
        ],
        '2018-02-22':[
            {P:'Ma\'am well be hosting the wireframe soon and provide a link for you to view it'},
            {C:'Yes definetly'},
            {P:'https://wwww.palnesto.com'},
            {C:'Yes , The overal structure looks pretty , there are few tweaks i want to make thought , will come tomorrow around 11:00 and discuss'}
        ],
    }
};

class RemarksContainer extends Component {

    render() {
        return (
            <View style={styles.remarksContainer}>
                <RemarksMessagesContainer/>
                <TextField_ButtonContainer/>
            </View>

    );
    }

}

const RemarksMessagesContainer = () => {
    return (<View style={styles.remarksMessagesContainer} >
        <View style={styles.remarksLabelContainer}>
            <Text style={styles.remarksLabel}>Remarks</Text>
        </View>
        <MessagesSection/>
    </View>);
}


class MessagesSection extends Component {
    componentWillMount () {
         this._panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
       onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
       onMoveShouldSetPanResponder: (evt, gestureState) => true,
       onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

       onPanResponderGrant: (evt, gestureState) => {
         // The gesture has started. Show visual feedback so the user knows
         // what is happening!
         alert('broGrant');
         // gestureState.d{x,y} will be set to zero now
       },
       onPanResponderMove: (evt, gestureState) => {
         // The most recent move distance is gestureState.move{X,Y}

         // The accumulated gesture distance since becoming responder is
         // gestureState.d{x,y}
       },
       onPanResponderTerminationRequest: (evt, gestureState) => true,
       onPanResponderRelease: (evt, gestureState) => {
         // The user has released all touches while this view is the
         // responder. This typically means a gesture has succeeded
         alert('broRelease');

       },
       onPanResponderTerminate: (evt, gestureState) => {
         // Another component has become the responder, so this gesture
         // should be cancelled

       },
       onShouldBlockNativeResponder: (evt, gestureState) => {
         // Returns whether this component should block native components from becoming the JS
         // responder. Returns true by default. Is currently only supported on android.
         return true;
       }
      });
    }
    render() {
        return (
        <MessageView style={styles.MessagesSection}>
            <ScrollView
                bounces={false}
                ref={ref => this.scrollView = ref}
                onContentSizeChange={(contentWidth, contentHeight)=>{
                                        this.scrollView.scrollToEnd({animated: false});
                                        }}
                >
                    <DateStamp/>
                    <Mess />
                    <Mess rev/>
                    <Mess />
                    <Mess rev/>
                    <DateStamp/>
                    <Mess />
                    <Mess rev/>
                    <Mess />
                    <Mess rev/>
                </ScrollView>


        </MessageView>
    );
    }
}
const DateStamp = () => {
    return(
      <View style={styles.DateStampContainer}>
          <Text style={styles.DateStampText}>2018-04-20</Text>
      </View>
    );
}

const MessageView = (props) => {
    return(
      <View style={props.style} >
          {
              props.children?

                      props.children

              :
              <View style={{height:50,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:21,color:'black',fontWeight:'300'}}>No Remarks</Text>
              </View>
          }
      </View>
    );
}

const Mess = (props) => {
    return(
      <View style={(props.rev)?(styles.MessRev):(styles.Mess)}>
          <View style={styles.MessImage}>

          </View>
          <View style={styles.MessTextContainer}>
              <Text style={styles.txtInp}>HEy bro this thing is ok fot he poks</Text>
          </View>
      </View>
    );
}

const TextField_ButtonContainer = () => {
    return (
        // <View style={styles.textFieldButtonContainer}>

        <Formik
            onSubmit={(values, actions) => {
                      if(values){
                          alert(JSON.stringify(values))
                      }
                    }}
            render={(props)=>(
                <View style={styles.MessagePostContainer}>
                    <View style={styles.MessageBox}>

                        <TextInput
                            multiline={true}
                            // numberOfLines={4
                            underlineColorAndroid={false}
                            placeholder="Type message"
                            underlineColorAndroid='rgba(0,0,0,0)'
                            style={styles.txtInp}
                            onChangeText={text =>props.setFieldValue('username', text)}
                            value={props.values.username}
                        />


                    </View>
                    <View style={styles.PostBox}>

                    </View>
                </View>
            )}
        />
    // </View>
);
}
const styles = StyleSheet.create({
    remarksContainer:{
        backgroundColor:'#1E00F6',
        margin:4,
        // minHeight:150 //this needs to have a min height so that it can display message textfield,remark label,post button in an elegant way

    },
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
      padding:10

  },remarksMessagesContainer:{
      flex:1,
      backgroundColor:'#ADADAD',
      margin:4,

  },
  remarksLabelContainer:{
      backgroundColor:'#3C9767',
    alignItems:'baseline',
    paddingLeft:10,
    margin:4,
// margin:4
  },
  remarksLabel:{
      fontWeight:'bold',
      fontSize:25,
      color:'#000000',
      lineHeight:40
  },
  MessagesSection:{
    backgroundColor:'#3C9767',
    maxHeight:400
  },
  Mess:{
      // minHeight:60,
      backgroundColor:'lightpink',
      // margin:4,
      flexDirection:'row',
  },
  MessRev:{
      // minHeight:60,
      backgroundColor:'lightpink',
      margin:4,
      flexDirection:'row-reverse'
  },
  MessImage:{
      height:40,
      backgroundColor:'lightblue',
      margin:4,
      aspectRatio:1,
      borderRadius:25
  },
  MessTextContainer:{
      flex:1,
      backgroundColor:'lightblue',
      margin:4,
      borderRadius:10
  },

MessagePostContainer:{
    backgroundColor:'#3C9767',
    margin:4,
    flexDirection:'row',
    alignItems:'flex-end',
    padding:4
},
textFieldContainer:{
    flex:1,
    backgroundColor:'#ADADAD',
    margin:4,
    borderRadius:10
    // minHeight:150
},
MessageBox:{
    flex:1,
    borderRadius:20,
    backgroundColor:'lightpink',
    // margin:4,
    marginRight:4
    // padding:2
},
PostBox:{
    height:(Platform.OS=='ios'?47:48),
    aspectRatio:1,
    borderRadius:25,
    backgroundColor:'lightpink',
    // margin:4
},
txtInp:{
    fontSize:18,
    flexWrap:'wrap',
    minHeight:47,
    paddingTop:(Platform.OS=='ios'?12:8),
    paddingBottom:(Platform.OS=='ios'?10:10),
    paddingLeft:13,
    paddingRight:12,
    color:'#000000'
},
DateStampContainer:{
    backgroundColor:'lightpink',
    margin:4,
    alignItems:'center',
    justifyContent:'center'
},
DateStampText:{
    backgroundColor:'lightblue',
    margin:4,
    color:'grey',
    fontSize:13
}

});
export default RemarksContainer;
