import React from 'react';
import { Button as _Button, Surface as _Surface } from '@wingscms/components';

import { t } from '../../theme';
import styled, { css } from '../../lib/styled';

const Surface = styled(_Surface)`
  background-color: ${t(_ => _.dialogBackgroundColor)};
  padding: ${t(_ => _.smallSpacing)};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  a {
    width: calc(33% - ${t(_ => _.extraSmallSpacing)});
    ${t(_ =>
      _.tabletQuery(css`
        width: 100%;
      `),
    )}
  }
`;

const Button = styled(_Button)`
  width: 100%;
  margin-bottom: ${t(_ => _.extraSmallSpacing)};
`;

export default function LanguageSelect({ translations, wrapTranslation = x => x }) {
  return (
    <Surface>
      {translations.map((translation, idx) =>
        wrapTranslation(
          <Button size={Button.Size.SMALL} intent={Button.Intent.PRIMARY} key={idx}>
            {translation.name}
          </Button>,
          { translation },
        ),
      )}
    </Surface>
  );
}
