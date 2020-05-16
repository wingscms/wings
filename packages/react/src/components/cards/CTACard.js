import React from 'react';
import { CallToAction as _CallToAction, wide } from '@wingscms/components';
import styled from '../../lib/styled';
import createCard from '../../createCard';

const CallToAction = styled(_CallToAction)`
  ${wide}
`;

function CallToActionView({
  align,
  backgroundImage,
  buttonText,
  buttonUrl,
  fade,
  text,
  title,
  actionText,
  actionUrl,
  ...props
}) {
  return (
    <CallToAction
      align={align}
      backgroundImage={backgroundImage}
      buttonText={buttonText || actionText}
      buttonUrl={buttonUrl || actionUrl}
      fade={fade}
      title={title}
      text={text}
      {...props}
    />
  );
}

export default createCard({
  name: 'CTACard',
  renderWith: CallToActionView,
});
