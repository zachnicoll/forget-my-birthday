import styled from '@emotion/native';
import {TouchableFlexRowBetween} from 'components/Flex';

export const Wrapper = styled(TouchableFlexRowBetween)`
  margin-vertical: 5px;
`;

interface ImageContainerProps {
  color: string;
}

export const ImageContainer = styled.View<ImageContainerProps>`
  width: 48px;
  height: 48px;
  border-color: ${({color}) => color};
  border-width: 2px;
  border-radius: 400px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InfoContainer = styled.View`
  flex-grow: 1;
  margin-horizontal: 10px;
`;
