import React, { Component } from 'react';
import { MenuContentWrapper } from '@wingscms/crane';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import { ContentContainer, Title, Wrapper } from '../../components/Petition/ConfirmationPages';
import Layout from '../../components/Layout';

import { makeShareUrls } from '../../../lib/utils';

export default class ConfirmPage extends Component {
  state = {
    shareUrls: makeShareUrls(
      this.props.pageContext.petition.platforms,
      this.props.location.href ? this.props.location.href : '',
      this.props.pageContext.petition.meta,
    ),
  };

  render() {
    const { shareUrls } = this.state;
    const { petition } = this.props.pageContext;
    const metaObj = petition.meta;
    return (
      <Layout>
        <MenuContentWrapper id="content-wrapper" className="petition">
          <div id="content-wrapper" className="petition">
            <Navigation shareUrls={shareUrls} items={petition.menu && petition.menu.items} />
            <Wrapper backgroundImage={petition.image ? petition.image.url : ''}>
              <ContentContainer>
                <Title>{metaObj.confirmationTitle || 'We zijn er nog niet...'}</Title>
                <p>
                  {metaObj.confirmationText ||
                    'We hebben je een mailtje gestuurd met een bevestigingslink, om te zorgen dat alle ondertekeningen echt zijn. Als je daarop klikt, telt je ondertekening mee. Alvast bedankt!'}
                </p>
              </ContentContainer>
            </Wrapper>
            <Footer />
          </div>
        </MenuContentWrapper>
      </Layout>
    );
  }
}
