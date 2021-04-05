import React from 'react';
import {ScrollViewProps} from 'react-native';
import * as styles from './styles';

interface PageProps extends ScrollViewProps {}

export const Page: React.FC<PageProps> = ({children, ...scrollViewProps}) => {
  return (
    <styles.PageContainer {...scrollViewProps}>{children}</styles.PageContainer>
  );
};
