import React from "react";
import { StyleSheet, View, VrButton, Text, Animated } from "react-360";
import { connect } from "../../store";

class HUD extends React.Component {
  state = {
    rotating: false,
    animations: {
      sun: Animated.timing(this.props.sunRotation, {
        toValue: 360,
        duration: 20000
      }),
      moon: Animated.timing(this.props.moonRotation, {
        toValue: 360,
        duration: 20000
      }),
      earth: Animated.timing(this.props.earthRotation, {
        toValue: 360,
        duration: 20000
      }),
      mars: Animated.timing(this.props.marsRotation, {
        toValue: 360,
        duration: 20000
      })
    },
    rotatingReverse: false,
    animationsReverse: {
      sun: Animated.timing(this.props.sunRotation, {
        toValue: 360,
        duration: 20000
      }),
      moon: Animated.timing(this.props.moonRotation, {
        toValue: 360,
        duration: 20000
      }),
      earth: Animated.timing(this.props.earthRotation, {
        toValue: 360,
        duration: 20000
      }),
      mars: Animated.timing(this.props.marsRotation, {
        toValue: 360,
        duration: 20000
      })
    }
  };

  rotate = () => {
    const { animations, rotating } = this.state;
    if (rotating) {
      animations.sun.stop();
      animations.moon.stop();
      animations.earth.stop();
      animations.mars.stop();
      this.setState({ rotating: false });
    } else {
      Animated.loop(animations.sun).start();
      Animated.loop(animations.moon).start();
      Animated.loop(animations.earth).start();
      Animated.loop(animations.mars).start();
      this.setState({ rotating: true });
    }
  };

  reverse = () => {
    const { animationsReverse, rotatingReverse } = this.state;
    if (rotatingReverse) {
      animationsReverse.sun.stop();
      animationsReverse.moon.stop();
      animationsReverse.earth.stop();
      animationsReverse.mars.stop();
      this.setState({ rotatingReverse: false });
    } else {
      Animated.loop(animationsReverse.sun).start();
      Animated.loop(animationsReverse.moon).start();
      Animated.loop(animationsReverse.earth).start();
      Animated.loop(animationsReverse.mars).start();
      this.setState({ rotatingReverse: true });
    }
  };

  render() {
    return (
      <View style={styles.panel}>
        <VrButton onClick={this.rotate}>
          <Text>Rotate</Text>
        </VrButton>
        <VrButton onClick={this.reverse}>
          <Text>Reverse</Text>
        </VrButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect(HUD);
