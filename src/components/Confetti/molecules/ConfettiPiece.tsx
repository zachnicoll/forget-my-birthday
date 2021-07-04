import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import Animated, {EasingNode} from 'react-native-reanimated';
import * as styles from '../styles';

interface ConfettiPieceProps {
  initialX: number;
  initialY: number;
}

const ConfettiPiece: React.FC<ConfettiPieceProps> = ({initialX, initialY}) => {
  const x = Animated.useValue(initialX);
  const y = Animated.useValue(initialY);

  useEffect(() => {
    Animated.timing(y, {
      toValue: Dimensions.get('screen').height + 100,
      duration: 5000,
      easing: EasingNode.quad,
    }).start();
  }, []);

  return <styles.ConfettiPieceView style={{top: y, left: x}} />;
};

export default ConfettiPiece;
