import React from 'react';
import _Fade from 'react-reveal/Fade';

export default function Fade({ fade, children, ...props }) {
  return fade ? (
    <_Fade bottom distance="10px" delay={300} {...props}>
      {children}
    </_Fade>
  ) : (
    children
  );
}
