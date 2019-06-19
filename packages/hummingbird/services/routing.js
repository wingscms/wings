module.exports = {
  getPath(node) {
    const parts = [this.getLocalePrefix(node), this.getPrefix(node), node.slug].filter(p => !!p);
    return [''].concat(parts).join('/');
  },
  getLocalePrefix(node) {
    return node.locale.primary ? '' : node.locale.id;
  },
  getPrefix({ resourceType, isHome }) {
    if (isHome) return '';
    switch (resourceType) {
      case 'node.entry.article':
        return 'articles';
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
