export const asNumber = (value) => {
  if (value === '') {
    return undefined;
  }
  if (/\.$/.test(value)) {
    return value;
  }
  if (/\.0$/.test(value)) {
    return value;
  }
  const n = Number(value);
  const valid = typeof n === 'number' && !Number.isNaN(n);

  if (/\.\d*0$/.test(value)) {
    return value;
  }

  return valid ? n : value;
};

export const getRange = (props) => {
  const { min, max, step, schema } = props;
  const spec = {};
  if (schema) {
    if (schema.multipleOf) {
      spec.step = schema.multipleOf;
    }
    if (schema.minimum || schema.minimum === 0) {
      spec.min = schema.minimum;
    }
    if (schema.maximum || schema.maximum === 0) {
      spec.max = schema.maximum;
    }
  } else {
    spec.min = min;
    spec.max = max;
    spec.step = step;
  }
  return spec;
};

export const getValue = (event, multiple) => {
  if (multiple) {
    return [].slice
      .call(event.target.options)
      .filter(o => o.selected)
      .map(o => o.value);
  }
  return event.target.value;
};

export const guessType = (value) => {
  if (Array.isArray(value)) {
    return 'array';
  } else if (typeof value === 'string') {
    return 'string';
  } else if (value == null) {
    return 'null';
  } else if (typeof value === 'boolean') {
    return 'boolean';
  } else if (!Number.isNaN(value)) {
    return 'number';
  } else if (typeof value === 'object') {
    return 'object';
  }
  return 'string';
};

export const processValue = (schema, value) => {
  const { type, items } = schema;
  const nums = new Set(['number', 'integer']);
  if (value === '') {
    return undefined;
  } else if (type === 'array' && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (type === 'number') {
    return asNumber(value);
  }

  if (schema.enum) {
    if (schema.enum.every(x => guessType(x) === 'number')) {
      return asNumber(value);
    } else if (schema.enum.every(x => guessType(x) === 'boolean')) {
      return value === 'true';
    }
  }

  return value;
};
