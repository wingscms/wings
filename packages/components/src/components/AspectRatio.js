import React from 'react';
import styled from '../lib/styled';

const Container = styled.div`
  padding-bottom: ${({ paddingBottom }) => paddingBottom}%;
  position: relative;
`;

const ContainerOuter = styled.div`
  position: relative;
`;

export default function AspectRatio({ ratio, children, ...props }) {
  let paddingBottom;
  if (typeof ratio === 'string' && /\d+:\d+/.exec(ratio)) {
    const [n1, n2] = ratio.split(':');
    paddingBottom = 100 / (Number(n1) / Number(n2));
  } else {
    console.error('Ratio provided to <AspectRatio /> should conform to format "16:9".');
    return null;
  }

  return (
    <ContainerOuter {...props}>
      <Container paddingBottom={paddingBottom}>{children}</Container>
    </ContainerOuter>
  );
}

// AspectRatio.Ratio = Ratio;
