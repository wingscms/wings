import { compose, mapProps } from 'recompose';
import withSeo from './withSeo';

const mp = mapProps(({ pathContext: { event }, ...rest }) => ({ event, ...rest }));
export default compose(mp, withSeo('event'));
