---
title: Shadowing
---

## Shadowing templates

Hummingbird supports shadowing its internal templates. Also, each individual template has its own API to allow for customizations to prevent you from having to reimplement an entire template.

> WARNING: these APIs are _not_ stable yet.

Example for template `Article`:

`src/@wingscms/hummingbird/templates/Article`:

```js
import React from 'react';
import { Article } from '@wingscms/hummingbird';

export default props => (
  <Article {...props}>
    <Article.CornerMenu />
    <Article.Navigation />
    <Article.Header />
    <Article.Main />
  </Article>
);

```

> WARNING: we don't recommend shadowing unsupported internal components directly, as these internals may change in the future. We recommend to stick to the officially supported public APIs.