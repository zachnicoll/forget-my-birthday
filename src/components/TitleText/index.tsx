import {css} from '@emotion/native';
import {StyledText} from 'components';
import React from 'react';

const TitleText: React.FC = ({children}) => {
  return (
    <StyledText
      fontSize={24}
      type="Title"
      style={css`
        text-align: center;
      `}>
      {children}
    </StyledText>
  );
};

export default TitleText;
