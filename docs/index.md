# Hello World


## Install

```sh
npm install @wingsplatform/react
```

## Use

```js
import React from 'react';
import Wings, { Content } from '@wingsplatform/react';

const wings = new Wings({
  project: 'YOUR_PROJECT_ID',
  appKey: 'YOUR_APP_KEY',
});

export default class App extends React.Component {
  state = { articles: [] };

  async componentWillMount() {
    const articles = await wings.query(
      `
      {
        articles {
          content
        }
      }
    `,
    );
    this.setState({ articles });
  }

  render() {
    return (
      <div>
        <Content content={this.state.articles[0].content} />
      </div>
    );
  }
}

```
