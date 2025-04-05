import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { colors } from '../theme/colors';

interface StarProps {
  size: number;
  top: `${number}%`;
  left: `${number}%`;
  delay: number;
}

const Star = ({ size, top, left, delay }: StarProps) => {
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1500,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.star,
        {
          width: size,
          height: size,
          top,
          left,
          opacity,
        },
      ]}
    />
  );
};

export function Stars() {
  return (
    <View style={styles.container}>
      <Star size={2} top="10%" left="20%" delay={0} />
      <Star size={3} top="15%" left="40%" delay={400} />
      <Star size={2} top="25%" left="65%" delay={800} />
      <Star size={2} top="35%" left="25%" delay={1200} />
      <Star size={3} top="45%" left="70%" delay={1600} />
      <Star size={2} top="55%" left="35%" delay={2000} />
      <Star size={2} top="65%" left="60%" delay={2400} />
      <Star size={3} top="75%" left="30%" delay={2800} />
      <Star size={2} top="85%" left="75%" delay={3200} />
      <Star size={2} top="90%" left="15%" delay={3600} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  star: {
    position: 'absolute',
    backgroundColor: colors.text.accent,
    borderRadius: 10,
  },
}); 