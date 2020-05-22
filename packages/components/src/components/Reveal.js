import React from 'react';
import _Reveal from 'react-reveal/Reveal';

export default function Reveal({ reveal, children, ...props }) {
  return reveal ? (
    <_Reveal bottom distance="10px" delay={300} {...props}>
      {children}
    </_Reveal>
  ) : (
    children
  );
}
