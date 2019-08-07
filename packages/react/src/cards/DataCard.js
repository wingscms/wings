import { useEffect } from 'react';
import createCard from '../createCard';

export default createCard({
  name: 'DataCard',
  renderWith: () => {
    useEffect(
      () =>
        console.warn(
          '[hummingbird] No `DataCard` shadow found: to use the `DataCard`, shadow it in `src/@wingscms/hummingbird/cards/DataCard`',
        ),
      [],
    );
    return null;
  },
});
