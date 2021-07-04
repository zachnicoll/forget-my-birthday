import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {Dimensions} from 'react-native';
import ConfettiPiece from './molecules/ConfettiPiece';

import * as styles from './styles';

interface ConfettiProps {
  numPieces: number;
}

const Confetti: React.FC<ConfettiProps> = ({numPieces}) => {
  const [pieces, setPieces] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    let _pieces = [];

    for (let i = 0; i < numPieces; i++) {
      _pieces.push(
        <ConfettiPiece
          key={i}
          initialY={-50 - Math.random() * 500}
          initialX={Dimensions.get('window').width * Math.random()}
        />,
      );
    }

    setPieces(_pieces);
  }, []);

  return (
    <styles.ConfettiContainer>
      {/* Confetti */}
      {pieces.map(piece => piece)}
    </styles.ConfettiContainer>
  );
};

export default Confetti;
