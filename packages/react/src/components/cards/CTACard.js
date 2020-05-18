import React from 'react';
import { CallToAction } from '@wingscms/components';
import createCard from '../../createCard';
import OffGridContainer from '../OffGridContainer';

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
    <OffGridContainer>
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
    </OffGridContainer>
  );
}

export default createCard({
  name: 'CTACard',
  renderWith: CallToActionView,
});
