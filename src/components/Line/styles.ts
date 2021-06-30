import styled from '@emotion/native';

export const LineContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface DashProps {
  width: string;
  color: string;
}

export const Dash = styled.View<DashProps>`
  width: ${({width}) => width};
  background-color: ${({color}) => color};
  border-radius: 1000px;
  height: 4px;
`;
