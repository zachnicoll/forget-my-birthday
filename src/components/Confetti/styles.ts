import styled from '@emotion/native';
import Colors from 'helpers/colourPalette';
import Animated from 'react-native-reanimated';

export const ConfettiContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

export const ConfettiPieceView = styled(Animated.View)`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: ${Colors.blueNCS};
  border-radius: 100px;
`;
