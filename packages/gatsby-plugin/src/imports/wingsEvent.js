import { compose, mapProps } from 'recompose';
import withSeo from './withSeo';

const mp = mapProps(({ pathContext: { event } = {} }) => ({ event }));

export default compose(mp, withSeo('event'));
