import React from 'react';
import PropTypes from 'prop-types';
import { classNameFromString, randomString } from '../../util';

function SvgIcon(props) {
  const { children, component: Component, title, viewBox, ...other } = props;

  const ariaLabelledby = title ? `${randomString()}-${classNameFromString(title)}` : null;

  return (
    <Component
      focusable="false"
      viewBox={viewBox}
      aria-hidden={title ? 'false' : 'true'}
      role={title ? 'img' : 'presentation'}
      aria-labelledby={ariaLabelledby}
      {...other}
    >
      {children}
      {title ? <title id={ariaLabelledby}>{title}</title> : null}
    </Component>
  );
}

SvgIcon.propTypes = {
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node.isRequired,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: PropTypes.string,
};

SvgIcon.defaultProps = {
  component: 'svg',
  viewBox: '0 0 24 24',
};

SvgIcon.craneName = 'SvgIcon';

export default SvgIcon;
