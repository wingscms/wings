import React from 'react';
import styled from '../lib/styled';
import useDimensions from '../hooks/useDimensions';

const Container = styled.div`
  padding-bottom: ${({ paddingBottom }) => paddingBottom}%;
  position: relative;
`;

const ContainerOuter = styled.div`
  position: relative;
`;

const verifyRatioString = str => {
  if (typeof str === 'string' && /^\d+:\d+$/.exec(str)) {
    return true;
  }
  console.error(
    `Ratio provided to <AspectRatio /> should conform to format "16:9" or "16:9/768". Received ${str}`,
  );
  return false;
};

const getPadding = ratio => {
  const [n1, n2] = ratio.split(':');
  return 100 / (Number(n1) / Number(n2));
};

const constructRatioObject = r => {
  const [ratio, width = null] = r.split('/');
  return !verifyRatioString(ratio)
    ? { ratio: '1:1', padding: getPadding('1:1'), width: null }
    : {
        ratio,
        padding: getPadding(ratio),
        width,
      };
};

const sortByWidth = (a, b) => (a.width === null ? 1 : a.width - b.width);

const getRatios = ratios =>
  ratios
    .split(',')
    .map(constructRatioObject)
    .sort(sortByWidth);

const getPaddingValue = (ratios, width) => {
  for (let i = 0; i < ratios.length; i++) {
    if (ratios[i].width <= width) {
      return ratios[i].padding;
    }
    if (i === ratios.length - 1) {
      return ratios[i].padding;
    }
  }
};

// Ratio input is defined as "16:9/768,1:1".
// First part is aspect ratio.
// Part after slash is a max media query in pixels for that ratio.

export default function AspectRatio({ ratio, children, ...props }) {
  const { width } = useDimensions();
  const _ratios = getRatios(ratio);
  const padding = getPaddingValue(_ratios, width);

  return (
    <ContainerOuter {...props}>
      <Container paddingBottom={padding}>{children}</Container>
    </ContainerOuter>
  );
}

// AspectRatio.Ratio = Ratio;
