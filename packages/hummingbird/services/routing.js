module.exports = {
  getPath(node) {
    const parts = [this.getLocalePrefix(node), this.getPrefix(node), this.getSlug(node)].filter(
      p => !!p,
    );
    return [''].concat(parts).join('/') || '/';
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
