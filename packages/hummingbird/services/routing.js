module.exports = {
  _getUrl(path) {
    return (typeof window !== 'undefined' && [window.location.origin, path].join('')) || '';
  },
  getPath(node) {
    if (!node.id) return null;
    const parts = [this.getLocalePrefix(node), this.getPrefix(node), this.getSlug(node)].filter(
      p => !!p,
    );
    return [''].concat(parts).join('/') || '/';
  },
  getCampaignConfirmedUrl(node) {
    return this._getUrl(this.getCampaignConfirmedPath(node));
  },
  getCampaignConfirmedPath(node) {
    if (!node.id) return null;
    if (node.isHome) {
      return `${this.getPrefix({
        resourceType: node.resourceType,
        isHome: false,
      })}/${node.slug}/confirmed`;
    }
    return `${this.getPath(node)}/confirmed`;
  },
  getLocalePrefix(node) {
    return node.locale.primary ? '' : node.locale.id;
  },
  getSlug(node) {
    return node.isHome ? '' : node.slug;
  },
  getPrefix({ resourceType, isHome }) {
    if (isHome) return '';
    switch (resourceType) {
      case 'node.entry.article':
        return 'articles';
      case 'node.signup':
        return 'signups';
      case 'node.petition':
        return 'petitions';
      case 'node.event':
        return 'events';
      case 'node.fundraiser':
        return 'fundraisers';
      default:
        return '';
    }
  },
};
