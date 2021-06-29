import React from 'react';
import {ViewProps} from 'react-native';
import * as styles from './styles';

interface PageProps extends ViewProps {}

export const Page: React.FC<PageProps> = ({children, ...viewProps}) => {
  return (
    <styles.PageContainer {...viewProps}>
      <styles.InnerPage>{children}</styles.InnerPage>
    </styles.PageContainer>
  );
};
