import React, {Component} from 'react';
import {withFormik,Formik} from 'formik';
import Hyperlink from 'react-native-hyperlink';
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
    PanResponder,
    Linking

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
            {P:'This one maam https://palnesto.com'},
            {C:'Yes , The overal structure looks pretty , there are few tweaks i want to make though , will come tomorrow around 11:00 and discuss'}
        ],
    }
};

class RemarksContainer extends Component {

    constructor(props){
        super(props);
        this.state={
            type:'P'
        };
    }
    enterMessage=({mess})=>{
        let dates = Object.keys(data.remarks).map((value)=>value);
        let d = new Date();
        let newd = `${d.getFullYear()}-${(d.getMonth()+1)<10?'0'+(d.getMonth()+1):d.getMonth()+1}-${d.getDate()}`;
        if(dates.includes(newd))
        {
            data.remarks[`${newd}`].push({[this.state.type]:mess});
        }
        else{
            data.remarks[`${newd}`]=[{[this.state.type]:mess}];
        }
        this.setState(this.state);
    }

    render() {
        return (
            <View style={styles.remarksContainer}>
                <RemarksMessagesContainer  enable={this.props.enable} disable = {this.props.disable} type={this.state.type}/>
                <TextField_ButtonContainer enterMessage={({mess})=>this.enterMessage({mess})}/>
            </View>

    );
    }

}

const RemarksMessagesContainer = (props) => {
    return (<View style={styles.remarksMessagesContainer} >
        <View style={styles.remarksLabelContainer}>
            <Text style={styles.remarksLabel}>Remarks</Text>
            {/* <Text style={styles.remarksLabel} onPress={ ()=> Linking.openURL('https://google.com') } >Click Here To Open Google.</Text> */}
        </View>
        <MessagesSection  enable={props.enable} disable = {props.disable}  type={props.type}/>
    </View>);
}


class MessagesSection extends Component {

    constructor(props){
        super(props);
        this.state={
            type:props.type
        };
    }
    isEmpty = (obj) => {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
    render() {
        let shortid = require('shortid');
        let dat = new Array();
        if(!this.isEmpty(data)){
                   let dates = Object.keys(data.remarks).map((value)=>value);
                    dates.sort().forEach((value,index,ob)=>{
                                  var d = new Date(value);
                                  var newd = `${d.getDate()}-${(d.getMonth()+1)<10?'0'+(d.getMonth()+1):d.getMonth()+1}-${d.getFullYear()}`;
                                  dat.push({D:newd})
                                  Object.entries(data.remarks[value]).forEach((value,index,ob)=>{
                                      Object.entries(value[1]).forEach((value,index,ob)=>{
                                        let st = ""+value[0];
                                          dat.push({[st]:value[1]});

                                      });
                                  });
                              });
        }
        disp =Object.values(dat).map((value,index,ob)=>(
             Object.entries(value).map((value,index,ob)=>{
              switch(value[0]){
                    case 'D': return <DateStamp date={value[1]}  key={shortid.generate()}/>
                                break;
                    case this.state.type: return <Mess tex={value[1]}  key={shortid.generate()}/>
                                break;
                    default : return <Mess rev tex={value[1]} key={shortid.generate()}/>
                                break;
                          }
          })
      ));
        return (
        <MessageView style={styles.MessagesSection}>

            <ScrollView
                bounces={false}
                ref={ref => this.scrollView = ref}
                onContentSizeChange={(contentWidth, contentHeight)=>{
                                        this.scrollView.scrollToEnd({animated: false});
                                    }}
                // collapsable={true}
                onStartShouldSetResponder={(evt)=>true}
                onMoveShouldSetResponder={(evt)=>true}
                onResponderTerminationRequest={(evt)=>true}
                onScrollEndDrag={this.props.enable}
                onResponderMove={(evt)=>this.props.disable}


                >
                <TouchableOpacity activeOpacity={1} onPressIn={this.props.disable}  >
                    {disp}
                </TouchableOpacity>

            </ScrollView>


        </MessageView>
    );
    }
}
const DateStamp = (props) => {
    return(
      <View style={styles.DateStampContainer}>
          <Text style={styles.DateStampText}>{props.date}</Text>
      </View>
    );
}

const MessageView = (props) => {
    return(
      <View style={props.style}  >
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
        <View style={props.rev?styles.MessRev:styles.Mess}>
            <View style={styles.MessTextContainer}>
                <Hyperlink linkDefault={true} linkStyle={ { color: '#2980b9', fontSize: 20 } }>
                <Text style={styles.txtInp}>{props.tex}</Text>
            </Hyperlink>
            </View>
            <View style={styles.MessImage}>

            </View>
        </View>
    );

}

class TextField_ButtonContainer extends Component{


sendButtonPressed=(props)=>{
    alert(props.values.username);
}
    render(){
    return (
        // <View style={styles.textFieldButtonContainer}>

        <Formik
            onSubmit={(values, actions) => {
                      if(values){
                          //Here values come
                          // alert(JSON.stringify(values))
                          // alert(values.message.text());
                          let mess = values.message;
                          values.message="";
                          if (mess.replace(/\s/g, '').length) {
                              this.props.enterMessage({mess});
                            }

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
                            onChangeText={text =>props.setFieldValue('message', text)}
                            value={props.values.message}
                        />


                    </View>
                    <View style={styles.PostBox}>
                        <TouchableOpacity onPress={props.handleSubmit}>
                            <Image
                                source={require('../images/send.png')}
                                style={{height:20,width:20}}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
);}
}
const styles = StyleSheet.create({
    remarksContainer:{
        backgroundColor:'#ffffff',
        // margin:4,
        borderWidth:1,
        borderColor:'#000000',
        margin:8
        // minHeight:150 //this needs to have a min height so that it can display message textfield,remark label,post button in an elegant way
    },

    remarksMessagesContainer:{
      // flex:1,
      // backgroundColor:'#ADADAD',
      // margin:4,

  },
  remarksLabelContainer:{
    // backgroundColor:'#3C9767',
    justifyContent:'flex-end',
    paddingLeft:10,
    // margin:4,
    borderBottomWidth:1,
    // height:50
// margin:4
  },
  remarksLabel:{
      fontWeight:'bold',
      fontSize:25,
      color:'#000000',
      lineHeight:40
  },
  MessagesSection:{
    // backgroundColor:'#3C9767',
    maxHeight:350
  },
  Mess:{
      flex:1,
      // backgroundColor:'lightpink',
      // margin:4,
      flexDirection:'row',
      justifyContent:'flex-end',
      // flexWrap:'wrap'
  },
  MessRev:{
      flex:1,
      // backgroundColor:'lightpink',
      // margin:4,
      flexDirection:'row-reverse',
      justifyContent:'flex-end'

  },
  MessImage:{
      height:40,
      backgroundColor:'lightblue',
      margin:4,
      aspectRatio:1,
      borderRadius:25
  },
  MessTextContainer:{
      // flex:1,
      // flex:1,
      maxWidth:'83%',
      backgroundColor:'lightblue',
      margin:4,
      borderRadius:10
  },

MessagePostContainer:{
    backgroundColor:'#E6E8E9',
    // margin:4,
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
    backgroundColor:'white',
    // margin:4,
    marginRight:4,
    borderWidth:1,
    borderColor:'#C5C9CC'
    // padding:2
},
PostBox:{
    height:(Platform.OS=='ios'?47:48),
    aspectRatio:1,
    borderRadius:25,
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'#C5C9CC',
    alignItems:'center',
    justifyContent:'center'
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
    // backgroundColor:'lightpink',
    margin:4,
    alignItems:'center',
    justifyContent:'center'
},
DateStampText:{
    // backgroundColor:'lightblue',
    margin:4,
    color:'grey',
    fontSize:13
}

});
export default RemarksContainer;
