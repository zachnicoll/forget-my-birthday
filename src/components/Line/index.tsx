import styled from '@emotion/native';
import React from 'react';
import {View} from 'react-native';
import * as styles from './styles';

// interface LineProps {
//   borderColor: string;
// }

// export const Line = styled.View<LineProps>`
//   width: 100%;
//   border-width: 2px;
//   border-color: ${({borderColor}) => borderColor};
//   margin-vertical: 10px;
//   border-style: dashed;
// `;

interface LineProps {
  numDashes: number;
  color: string;

  /**
   * Gap, as a pecentage, between each dash
   */
  gap?: number;
}

export const Line: React.FC<LineProps> = ({numDashes, color, gap = 1}) => {
  // Create a dummy array to map the dashes
  const numArr = new Array(numDashes).fill(0);

  // Calculate dash width as a percentage
  const dashWidth = (1 / numDashes) * 100 - gap;

  return (
    <styles.LineContainer>
      {numArr.map((_, i) => (
        <styles.Dash key={i} color={color} width={`${dashWidth}%`} />
      ))}
    </styles.LineContainer>
  );
};
