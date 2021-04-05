import styled from '@emotion/native';

export const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FlexRowBetween = styled(FlexRow)`
  justify-content: space-between;
`;

export const FlexColCenter = styled.View`
  align-items: center;
  justify-content: center;
`;

export const FlexColBetween = styled.View`
  justify-content: space-between;
`;

export const TouchableFlexRow = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const TouchableFlexRowBetween = styled(TouchableFlexRow)`
  justify-content: space-between;
`;

export const TouchableFlexColCenter = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
