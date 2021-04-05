import styled from '@emotion/native';
import {FlexRowBetween, TouchableFlexColCenter} from 'components';

export const HeroContainter = styled(TouchableFlexColCenter)`
  padding-top: 10px;
`;

export const HeroImage = styled.View`
  width: 200px;
  height: 200px;
  border-color: black;
  border-width: 1px;
  border-radius: 400px;
`;

export const FooterContainer = styled(FlexRowBetween)`
  padding-top: 10px;
`;
