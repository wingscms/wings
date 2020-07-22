import color from 'color';

export default class Color {
  static fromValue(value) {
    if (!value) return null;
    if (value instanceof Color) return value;
    return new Color(value);
  }

  constructor(value) {
    this.value = value;
  }

  alpha() {
    return this.toColor().alpha() || 1;
  }

  toColor() {
    return color(this.value);
  }

  darken(amount) {
    return this.toColor().darken(amount);
  }

  toString() {
    return this.toColor().hex();
  }

  hex() {
    return this.toString();
  }

  hsl() {
    return this.toColor().hsl();
  }

  rgb() {
    return this.toColor()
      .rgb()
      .string();
  }

  rgba(alpha = this.alpha()) {
    const [r, g, b] = this.toColor()
      .rgb()
      .array();
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  getLinearGradient({ to = 'bottom', color: _color } = {}) {
    const first = this.rgba();
    const second = Color.fromValue(_color)?.rgba() || this.rgba(0);
    return `linear-gradient(to ${to}, ${first} 0, ${second} 100%)`;
  }
}
