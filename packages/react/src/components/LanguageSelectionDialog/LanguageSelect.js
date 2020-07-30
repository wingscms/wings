import React from 'react';
import { Button as _Button } from '@wingscms/components';

import { t } from '../../theme';
import styled, { css } from '../../lib/styled';

const Container = styled.div`
  padding: ${t(_ => _.smallSpacing)};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  a {
    width: calc(33% - ${t(_ => _.extraSmallSpacing)});
    ${t(_ =>
      _.mobileQuery(css`
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
  const Link = wrapTranslation(({ children, ...props }) => (
    <a style={{ textDecoration: 'none' }} {...props}>
      {children}
    </a>
  ));
  return (
    <Container>
      {translations.map(({ name, url }, idx) => (
        <Link href={url}>
          <Button size={Button.Size.SMALL} intent={Button.Intent.PRIMARY} key={idx} href={url}>
            {name}
          </Button>
        </Link>
      ))}
    </Container>
  );
}
