import React, { Component } from 'react'

import {
  Image,
  Dimensions,
  View
} from 'react-native'

// const find_dimensions = (layout) => {
// const {x, y, width, height} = layout;
//        this.w = width;
//        this.h = height;
//        alert(`x:${x} , y:${y} , width:${width} , height:${height}`);
//    }

const LocalImage = ({source, originalWidth, originalHeight}) => {
    const ResizedView = (f,g) => (a) => f(g(a));
    return ResizedView(Imager,Sizer)({source, originalWidth, originalHeight})

}
const Imager = ({newWidth,newHeight,source}) => {
    return(
        <View>
            <Image
                source = {source}
                style={{width:newWidth,height:newHeight}}
            />
        </View>
    )
}
class Sizer extends Component{
    constructor(props){
        super()

    }
    calcDimensions = ({width,height}) => {
          let {source,originalWidth,originalHeight} = this.props;
          let windowWidth  = width
          let widthChange = (windowWidth)/originalWidth
          let newWidth = originalWidth * widthChange
          let newHeight = originalHeight * widthChange
          return ({newWidth,
                   newHeight,
                   source
               });
    }

    render(){
        return(
            <View onLayout={(event) => this.calcDimensions(event.nativeEvent.layout)}/>
        );
    }
}



export default LocalImage
