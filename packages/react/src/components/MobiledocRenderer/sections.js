import { Heading } from '@wingscms/components';

export default [
  {
    name: 'h2',
    component: props => (
      <Heading rank={2} {...props}>
        {props.children}
      </Heading>
    ),
  },
  {
    name: 'h3',
    component: props => (
      <Heading rank={3} {...props}>
        {props.children}
      </Heading>
    ),
  },
  {
    name: 'h4',
    component: props => (
      <Heading rank={4} {...props}>
        {props.children}
      </Heading>
    ),
  },
  {
    name: 'h5',
    component: props => (
      <Heading rank={5} {...props}>
        {props.children}
      </Heading>
    ),
  },
  {
    name: 'h6',
    component: props => (
      <Heading rank={6} {...props}>
        {props.children}
      </Heading>
    ),
  },
];
