import { compose, mapProps } from 'recompose';
import withSeo from './withSeo';

const mp = mapProps(({ pathContext: { entry } = {} }) => ({ entry }));

export default compose(mp, withSeo('entry'));
