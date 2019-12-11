import React from 'react';
import { injectIntl as withIntl } from 'react-intl';
import { navigate } from 'gatsby';
import routing from '../../services/routing';
import useCampaignProps from '../hooks/campaignProps';
import Content from '../components/Content';

export default withIntl(({ intl, ...props }) => {
  const campaignProps = useCampaignProps(intl);
  return (
    <Content
      {...props}
      cardProps={{
        CampaignCard: {
          ...campaignProps,
        },
        NodesCard: {
          onNodeClick: (node) => {
            navigate(routing.getPath(node));
          },
          nodeFragment: `
            fragment NodeFields on Node {
              resourceType
              locale {
                id
                name
                primary
              }
            }
          `,
        },
      }}
    />
  );
});
