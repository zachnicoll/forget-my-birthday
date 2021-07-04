import styled from '@emotion/native';
import {FlexColBetween, TouchableIcon} from 'components';
import Colors from 'helpers/colourPalette';

export const Container = styled(FlexColBetween)`
  flex-grow: 1;
`;

export const ImageSelectButton = styled(TouchableIcon)`
  width: 45%;
  background-color: ${Colors.caribbeanGreen};
`;

export const DoneButton = styled(TouchableIcon)`
  width: 100%;
  background-color: ${Colors.caribbeanGreen};
  height: 64px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;
