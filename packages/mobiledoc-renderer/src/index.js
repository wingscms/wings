import Renderer_0_3, { MOBILEDOC_VERSION_0_3_0, MOBILEDOC_VERSION_0_3_1 } from './renderers/0-3';

export default class MobiledocRenderer {
  constructor({
    atoms = [],
    cards = [],
    markups = [],
    sections = [],
    additionalProps = {},
    className = 'Mobiledoc',
  }) {
    this.options = {
      atoms,
      cards,
      markups,
      sections,
      className,
      additionalProps,
    };
  }

  render(mobiledoc) {
    const { version } = mobiledoc;
    switch (version) {
      case MOBILEDOC_VERSION_0_3_0:
      case MOBILEDOC_VERSION_0_3_1:
        return Renderer_0_3.render(mobiledoc, this.options);
      default:
        return null;
    }
  }
}
