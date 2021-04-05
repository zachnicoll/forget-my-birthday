import styled from '@emotion/native';
import {TouchableFlexRowBetween} from 'components/Flex';

export const Wrapper = styled(TouchableFlexRowBetween)`
  margin-vertical: 10px;
`;

export const ImageContainer = styled.View`
  width: 80px;
  height: 80px;
  border-color: black;
  border-width: 1px;
  border-radius: 400px;
`;

export const InfoContainer = styled.View`
  flex-grow: 1;
  padding: 10px;
  margin-horizontal: 10px;
  border-color: black;
  border-width: 1px;
  border-radius: 400px;
`;
