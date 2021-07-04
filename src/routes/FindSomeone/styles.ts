import styled from '@emotion/native';
import Colors from 'helpers/colourPalette';

export const SearchInput = styled.TextInput`
  width: 100%;
  background-color: ${Colors.orangeYellowCrayola};
  height: 40px;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 32px;
  color: white;
  font-family: Catamaran-Regular;
  font-size: 18px;
  margin-top: 12px;
  margin-bottom: 20px;
`;

export const SectionContainer = styled.View`
  margin-top: 4px;
`;
