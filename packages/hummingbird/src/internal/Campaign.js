import React from 'react';
import { injectIntl as withIntl } from 'react-intl';
import campaignProps from './campaignProps';
import Campaign from '../components/Campaign';

export default withIntl(({ intl, ...props }) => <Campaign {...campaignProps(intl)} {...props} />);
