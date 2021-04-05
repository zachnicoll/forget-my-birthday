import styled from '@emotion/native';

export const Flex = styled.View`
  flex: 1;
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
  align-items: center;
`;

export const FlexRowBetween = styled(FlexRow)`
  justify-content: space-between;
`;

export const FlexColCenter = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

export const TouchableFlex = styled.TouchableOpacity`
  flex: 1;
`;

export const TouchableFlexRow = styled(TouchableFlex)`
  flex-direction: row;
  align-items: center;
`;

export const TouchableFlexRowBetween = styled(TouchableFlexRow)`
  justify-content: space-between;
`;

export const TouchableFlexColCenter = styled(TouchableFlex)`
  align-items: center;
  justify-content: center;
`;
