import React, { Component } from 'react';
import { MenuContentWrapper } from '@wingscms/crane';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

import { ContentContainer, Title, Wrapper } from '../../components/Petition/ConfirmationPages';
import Layout from '../../components/LayoutDefault';

import { makeShareUrls } from '../../../lib/utils';

export default class ConfirmPage extends Component {
  state = {
    shareUrls: makeShareUrls(
      this.props.pageContext.event.platforms,
      this.props.location.href ? this.props.location.href : '',
      this.props.pageContext.event.meta || this.props.pageContext.data.seo,
    ),
  };

  render() {
    const { shareUrls } = this.state;
    const { event } = this.props.pageContext;
    return (
      <Layout>
        <MenuContentWrapper id="content-wrapper" className="event">
          <Navigation shareUrls={shareUrls} items={event.menu && event.menu.items} />
          <Wrapper backgroundImage={event.image ? event.image.url : ''}>
            <ContentContainer>
              <Title>Nog één ding..</Title>
              <p>
                We hebben je een mailtje gestuurd met een bevestigingslink. Als je daar even op
                klikt, telt je ondertekening helemaal mee. Bedankt alvast!
              </p>
            </ContentContainer>
          </Wrapper>
          <Footer />
        </MenuContentWrapper>
      </Layout>
    );
  }
}
