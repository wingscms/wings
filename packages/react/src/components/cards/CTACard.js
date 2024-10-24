import React from 'react';
import { CallToAction } from '@wingscms/components';
import createCard from '../../createCard';
import _OffGridContainer from '../OffGridContainer';
import styled from '../../lib/styled';
import { t } from '../../theme';

const OffGridContainer = styled(_OffGridContainer)`
  margin-top: ${t(_ => _.mediumSpacing)};
  margin-bottom: ${t(_ => _.mediumSpacing)};
`;

function CallToActionView({
  align,
  backgroundImage,
  buttonText,
  buttonUrl,
  buttonType,
  buttonBackgroundColor,
  buttonBackgroundHoverColor,
  buttonBorderColor,
  buttonBorderHoverColor,
  type,
  spacing,
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
        buttonType={buttonType}
        backgroundColor={buttonBackgroundColor}
        backgroundHoverColor={buttonBackgroundHoverColor}
        borderColor={buttonBorderColor}
        borderHoverColor={buttonBorderHoverColor}
        type={type}
        spacing={spacing}
        title={title}
        text={text}
        reveal
        {...props}
      />
    </OffGridContainer>
  );
}

export default createCard({
  name: 'CTACard',
  renderWith: CallToActionView,
});
