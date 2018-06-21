import React from 'react';
import { Animated, Text, View ,PanResponder} from 'react-native';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 100,                   // Animate to opacity: 1 (opaque)
        duration: 2000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
              style={{
        ...this.props.style,
        opacity: this.state.fadeAnim, // Binds directly
        transform: [{
          translateY: this.state.fadeAnim.interpolate({
            inputRange: [0,50,100],
            outputRange: [150,0,0],  // 0 : 150, 0.5 : 75, 1 : 0
            extrapolate:'clamp'
          }),
        }],
        borderWidth:this.state.fadeAnim.interpolate({
            inputRange:[0,50,100],
            outputRange:[0,1,8]
        }),
        width:this.state.fadeAnim.interpolate({
            inputRange:[0,50,100],
            outputRange:[250,150,50]
        }),
        }}

      >
        {this.props.children}
      </Animated.View>
    );
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export class Yapp extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          {/* <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text> */}
        </FadeInView>
      </View>
    )
  }
}

export class AnimatedExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { left: new Animated.Value(0) };
  }
  componentDidMount() {
    Animated.spring(this.state.left, { toValue: 100 }).start();
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Animated.View style={{
          left:this.state.left,
          height:100,
          width:100,
          backgroundColor:'blue'}}
        />
      </View>
    );
  }
}

export class ManyAnimatedValuesExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.left = new Animated.Value(0);
    this.state.top = new Animated.Value(0);
    this.state.scale = new Animated.Value(1);
  }
  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(this.state.left, { toValue: 50 }),
        Animated.spring(this.state.top, { toValue: 50 }),
        Animated.spring(this.state.scale, { toValue: 2 }),
      ]),
      Animated.parallel([
        Animated.spring(this.state.left, { toValue: 100 }),
        Animated.spring(this.state.top, { toValue: 100 }),
        Animated.spring(this.state.scale, { toValue: 1 }),
      ]),
    ]).start();
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Animated.View style={{
          left:this.state.left,
          top:this.state.top,
          transform:[{scale:this.state.scale}],
          height:100,
          width:100,
          backgroundColor:'blue'}}
        />
      </View>
    );
  }
}


export class InterpolateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.left = new Animated.Value(0);
    this.state.top = this.state.left;
    this.state.scale = this.state.left.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [1, 2, 1],
    });
  }
  componentDidMount() {
    Animated.spring(this.state.left, { toValue: 100 }).start();
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Animated.View style={{
          left:this.state.left,
          top:this.state.top,
          transform:[{scale:this.state.scale}],
          height:100,
          width:100,
          backgroundColor:'blue'}}
        />
      </View>
    );
  }
}

export class AnimatedNormalizedExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.move = new Animated.Value(0);
    this.state.left = this.state.move.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100],
    });
    this.state.top = this.state.left;
    this.state.scale = this.state.move.interpolate({
      inputRange: [0, .5, 1],
      outputRange: [1, 2, 1],
    });
  }
  componentDidMount() {
    Animated.spring(this.state.left, { toValue: 100 }).start();
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Animated.View style={{
          left:this.state.left,
          top:this.state.top,
          transform:[{scale:this.state.scale}],
          height:100,
          width:100,
          backgroundColor:'blue'}}
        />
      </View>
    );
  }
}

export class PanResponderExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.pan = new Animated.ValueXY({x: 0, y: 0});
    this.state.move = this.state.pan.x.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    this.state.left = this.state.move.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100],
    });
    this.state.top = this.state.left;
    this.state.scale = this.state.move.interpolate({
      inputRange: [0, .5, 1],
      outputRange: [1, 2, 1],
    });
    this.state.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x,
        dy: this.state.pan.y,
      }]),
      onPanResponderRelease: (evt, gestureState) => {
        Animated.spring(
          this.state.pan,
          {toValue: {x: 0, y: 0}}
        ).start();
      },
    });
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Animated.View
          style={{
            left:this.state.left,
            top:this.state.top,
            transform:[{scale:this.state.scale}],
            height:100,
            width:100,
            backgroundColor:'blue'
          }}
          {...this.state.panResponder.panHandlers}
        />
      </View>
    );
  }
}

export class CustomPanResponderExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.move = new Animated.Value(0);
    this.state.left = this.state.move.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100],
    });
    this.state.top = this.state.left;
    this.state.scale = this.state.move.interpolate({
      inputRange: [0, .5, 1],
      outputRange: [1, 2, 1],
    });

    this.state.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove:  (evt, gestureState) => {
        const mindxy = Math.min(gestureState.dx, gestureState.dy);
        // normalize mindxy and restrict its range.
        const value = Math.min(mindxy/100,1);
        this.state.move.setValue(value);
      },
      onPanResponderRelease: (evt, gestureState) => {
        Animated.spring(this.state.move, {toValue:0}).start();
      },
    });
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Animated.View
          style={{
            left:this.state.left,
            top:this.state.top,
            transform:[{scale:this.state.scale}],
            height:100,
            width:100,
            backgroundColor:'blue'
          }}
          {...this.state.panResponder.panHandlers}
        />
      </View>
    );
  }
}
