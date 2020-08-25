import React from 'react';
import faker from 'faker';
import { Card } from '@wingscms/components';
import { number, text } from '@storybook/addon-knobs/react';
import { paddingWrap, image } from '../../../../utils';

const cardProps = ({ width = '320px', ratio = undefined } = {}) => ({
  width: text('width', width, 'Card Props'),
  ratio: text('ratio', ratio, 'Card Props'),
});

const imageProps = ({ ratio = '16:9' } = {}) => ({
  ratio: text('ratio', ratio, 'Image Props'),
});

const titleProps = ({ characterLimit = 50 } = {}) => ({
  characterLimit: number('characterLimit', characterLimit, {}, 'Title Props'),
  title: text('title text', faker.lorem.sentences(1), 'Title Props'),
});

const subtitleProps = ({ characterLimit = 150 } = {}) => ({
  characterLimit: number('characterLimit', characterLimit, {}, 'Subtitle Props'),
  subtitle: text('title text', faker.lorem.sentences(3), 'Subtitle Props'),
});

export default () => (
  <Card {...cardProps()}>
    <Card.Header>
      <Card.Image image={{ src: image() }} {...imageProps()} />
    </Card.Header>
    <Card.Main></Card.Main>
    <Card.Footer>
      <Card.Heading>
        <Card.Heading.Title {...titleProps()} />
        <Card.Heading.Subtitle {...subtitleProps()} />
      </Card.Heading>
    </Card.Footer>
  </Card>
);

export const AspectRatio = () => (
  <Card {...cardProps({ ratio: '3:4' })}>
    <Card.Header>
      <Card.Image image={{ src: image() }} {...imageProps()} />
    </Card.Header>
    <Card.Main>
      <Card.Heading>
        <Card.Heading.Title {...titleProps()} />
        <Card.Heading.Subtitle {...subtitleProps()} />
      </Card.Heading>
    </Card.Main>
    <Card.Footer></Card.Footer>
  </Card>
);

export const BackgroundImage = () => (
  <Card backgroundImage={image()} {...cardProps({ ratio: '3:4' })}>
    <Card.Header>
      <Card.Heading>
        <Card.Heading.Title
          style={{ color: '#fff', textShadow: '0px 0px 3px #000' }}
          {...titleProps({ characterLimit: 0 })}
        />
      </Card.Heading>
    </Card.Header>
    <Card.Main></Card.Main>
    <Card.Footer>
      <Card.Heading>
        <Card.Heading.Subtitle
          style={{ color: '#fff', textShadow: '0px 0px 3px #000' }}
          {...subtitleProps({ characterLimit: 0 })}
        />
      </Card.Heading>
    </Card.Footer>
  </Card>
);

export const ContentReveal = () => (
  <Card backgroundImage={image()} {...cardProps({ ratio: '3:4' })}>
    <Card.HeadingReveal
      title={text('title text', faker.lorem.sentences(1))}
      subtitle={text('subtitle text', faker.lorem.sentences(2))}
    />
  </Card>
);

export const wrapStory = paddingWrap;
