import { compose, mapProps } from 'recompose';
import withSeo from './withSeo';

const mp = mapProps(({ pathContext: { article } }) => ({ article }));

export default compose(mp, withSeo('article'));
