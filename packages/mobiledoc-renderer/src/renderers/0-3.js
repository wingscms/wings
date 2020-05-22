import React from 'react';

export const MOBILEDOC_VERSION_0_3_0 = '0.3.0';
export const MOBILEDOC_VERSION_0_3_1 = '0.3.1';

export const MARKUP_SECTION_TYPE = 1;
export const IMAGE_SECTION_TYPE = 2;
export const LIST_SECTION_TYPE = 3;
export const CARD_SECTION_TYPE = 10;

export const MARKUP_MARKER_TYPE = 0;
export const ATOM_MARKER_TYPE = 1;

export default class Renderer {
  static render(...args) {
    const r = new Renderer(...args);
    return r.render();
  }
  constructor(
    mobiledoc,
    { atoms = [], cards = [], sections = [], markups = [], className, additionalProps = {} },
  ) {
    this.mobiledoc = mobiledoc;
    this.className = className;
    this.atoms = atoms;
    this.cards = cards;
    this.markups = markups;
    this.sections = sections;
    this.additionalProps = additionalProps;

    this.renderCallbacks = [];
  }

  render() {
    const renderedSections = <div className={this.className}>{this.renderSections()}</div>;
    this.renderCallbacks.forEach(cb => cb());

    return renderedSections;
  }

  renderSections() {
    return this.mobiledoc.sections.map((section, index) => this.renderSection(section, index));
  }

  renderSection(_section, nodeKey) {
    const [type, TagName, markers] = _section;
    const customSection = this.sections.find(s => s.name === TagName);
    const Component = customSection?.component || TagName;
    const section = [type, Component, markers];

    switch (type) {
      case MARKUP_SECTION_TYPE:
        return this.renderMarkupSection(section, nodeKey);
      case LIST_SECTION_TYPE:
        return this.renderListSection(section, nodeKey);
      case CARD_SECTION_TYPE:
        return this.renderCardSection(section, nodeKey);
      default:
        return null;
    }
  }

  renderMarkupSection([, TagName, markers], nodeKey) {
    return this.renderMarkersOnElement(
      <TagName key={nodeKey} {...this.additionalProps}>
        {[]}
      </TagName>,
      markers,
    );
  }

  renderListSection([, TagName, markers], nodeKey) {
    return (
      <TagName key={nodeKey} {...this.additionalProps}>
        {markers.map((item, index) => this.renderMarkersOnElement(<li key={index}>{[]}</li>, item))}
      </TagName>
    );
  }

  renderAtomSection(atomIndex) {
    const [name, text, payload] = this.mobiledoc.atoms[atomIndex];
    const atom = this.atoms.find(a => a.name === name);

    if (atom) {
      const key = `${name}-${text.length}`;
      const env = {
        name,
        isInEditor: false,
      };
      const options = {};
      const props = {
        key,
        env,
        options,
        payload: { ...payload, ...this.additionalProps },
        text,
      };

      return atom.render(props);
    }

    return null;
  }

  renderCardSection([, index], nodeKey) {
    const [name, payload] = this.mobiledoc.cards[index];
    const card = this.cards.find(c => c.name === name);

    if (card) {
      const env = {
        name,
        isInEditor: false,
        didRender: callback => this.registerRenderCallback(callback),
        onTeardown: callback => this.registerRenderCallback(callback),
      };
      const options = {};
      const props = {
        env,
        options,
        payload: { ...payload, key: nodeKey, ...this.additionalProps },
      };

      return card.render(props);
    }

    return null;
  }

  renderMarkersOnElement(element, markers) {
    const elements = [element];
    const pushElement = openedElement => {
      element.props.children.push(openedElement);
      elements.push(openedElement);
      element = openedElement;
    };

    markers.forEach((marker, i) => {
      let [type, openTypes, closeCount, value] = marker; // eslint-disable-line prefer-const

      openTypes.forEach((openType, j) => {
        const key = [i, j].join('-');
        const [TagName, attrs] = this.mobiledoc.markups[openType];
        const props = { children: [], ...this.parseProps(attrs) };

        if (TagName) {
          const definedMarkup = this.markups.find(markup => markup.name === TagName);
          if (definedMarkup) {
            const { render: Markup } = definedMarkup;
            pushElement(<Markup key={key} {...props} {...this.additionalProps} />);
          } else {
            pushElement(<TagName key={key} {...props} />);
          }
        } else {
          closeCount -= 1;
        }
      });

      switch (type) {
        case MARKUP_MARKER_TYPE:
          element.props.children.push(value);
          break;
        case ATOM_MARKER_TYPE:
          element.props.children.push(this.renderAtomSection(value));
          break;
        default:
      }

      for (let j = 0, m = closeCount; j < m; j += 1) {
        elements.pop();
        element = elements[elements.length - 1];
      }
    });

    return element;
  }

  parseProps(attrs) {
    if (attrs) {
      return {
        [attrs[0]]: attrs[1],
        [attrs[2]]: attrs[3],
      };
    }

    return null;
  }

  registerRenderCallback(cb) {
    this.renderCallbacks.push(cb);
  }
}
