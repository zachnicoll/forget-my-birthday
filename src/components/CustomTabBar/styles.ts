import styled from '@emotion/native';

interface TabBarContainerProps {
  primaryColor: string;
}

export const TabBarContainer = styled.SafeAreaView<TabBarContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({primaryColor}) => primaryColor};
`;

interface TabContainerProps {
  primaryColor: string;
}

export const TabContainer = styled.TouchableOpacity<TabContainerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: ${({primaryColor}) => primaryColor};
`;
