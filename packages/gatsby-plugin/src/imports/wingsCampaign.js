import { compose, mapProps } from 'recompose';
import withSeo from './withSeo';

const mp = mapProps(({ pathContext: { campaign } = {} }) => ({ campaign }));

export default compose(mp, withSeo('campaign'));
